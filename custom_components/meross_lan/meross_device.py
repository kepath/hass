from typing import Any, Callable, Dict, List, Optional, Union

from time import time, strftime, localtime
import json


from homeassistant.helpers.event import async_call_later
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.const import (
    DEVICE_CLASS_POWER, POWER_WATT,
    DEVICE_CLASS_CURRENT, ELECTRICAL_CURRENT_AMPERE,
    DEVICE_CLASS_VOLTAGE, VOLT,
    DEVICE_CLASS_ENERGY, ENERGY_WATT_HOUR
)

from .logger import LOGGER, LOGGER_trap
from logging import WARNING, DEBUG
from .switch import MerossLanSwitch
from .sensor import MerossLanSensor
from .light import MerossLanLight
from .cover import MerossLanGarage, MerossLanRollerShutter
from .const import (
    CONF_KEY, CONF_DISCOVERY_PAYLOAD,
    METHOD_GET, METHOD_SET,
    NS_APPLIANCE_CONTROL_TOGGLE, NS_APPLIANCE_CONTROL_TOGGLEX,
    NS_APPLIANCE_CONTROL_LIGHT, NS_APPLIANCE_GARAGEDOOR_STATE,
    NS_APPLIANCE_ROLLERSHUTTER_POSITION, NS_APPLIANCE_ROLLERSHUTTER_STATE,
    NS_APPLIANCE_CONTROL_ELECTRICITY, NS_APPLIANCE_CONTROL_CONSUMPTIONX,
    NS_APPLIANCE_SYSTEM_ALL, NS_APPLIANCE_SYSTEM_REPORT,
    PARAM_UNAVAILABILITY_TIMEOUT, PARAM_ENERGY_UPDATE_PERIOD, PARAM_UPDATE_POLLING_PERIOD, PARAM_HEARTBEAT_PERIOD
)


class MerossDevice:

    def __init__(self, api: object, device_id: str, entry: ConfigEntry):

        LOGGER.debug("MerossDevice(%s) init", device_id)

        self.api = api
        self.entry_id = entry.entry_id
        self.device_id = device_id
        self.key = entry.data.get(CONF_KEY)  # could be 'None' : if so defaults to "" but allows key reply trick
        self.replykey = self.key
        self.entities: dict[any, _MerossEntity] = {}  # pylint: disable=undefined-variable
        self.has_sensors = False
        self.has_lights = False
        self.has_switches = False
        self.has_covers = False
        self._sensor_power = None
        self._sensor_current = None
        self._sensor_voltage = None
        self._sensor_energy = None
        self._online = False
        self.lastrequest = 0
        self.lastupdate = 0
        self.lastupdate_consumption = 0

        discoverypayload = entry.data.get(CONF_DISCOVERY_PAYLOAD, {})

        self.all = discoverypayload.get("all", {})
        self.ability = discoverypayload.get("ability", {})

        try:
            # use a mix of heuristic to detect device features
            p_type = self.all.get("system", {}).get("hardware", {}).get("type", "")

            p_digest = self.all.get("digest")
            if p_digest:
                light = p_digest.get("light")
                if isinstance(light, List):
                    for l in light:
                        MerossLanLight(self, l.get("channel"))
                elif isinstance(light, Dict):
                    MerossLanLight(self, light.get("channel", 0))

                garagedoor = p_digest.get("garageDoor")
                if isinstance(garagedoor, List):
                    for g in garagedoor:
                        MerossLanGarage(self, g.get("channel"))

                # atm we're not sure we can detect this in 'digest' payload
                if "mrs" in p_type.lower():
                    MerossLanRollerShutter(self, 0)

                # at any rate: setup switches whenever we find 'togglex'
                # or whenever we cannot setup anything from digest
                togglex = p_digest.get("togglex")
                if isinstance(togglex, List):
                    for t in togglex:
                        channel = t.get("channel")
                        if channel not in self.entities:
                            MerossLanSwitch(self, channel, self.togglex_set, self.togglex_get)
                elif isinstance(togglex, Dict):
                    channel = t.get("channel")
                    if channel not in self.entities:
                        MerossLanSwitch(self, channel, self.togglex_set, self.togglex_get)

                #endif p_digest

            # older firmwares (MSS110 with 1.1.28) look like dont really have 'digest'
            # but have 'control'
            p_control = self.all.get("control") if p_digest is None else None
            if p_control:
                p_toggle = p_control.get("toggle")
                if isinstance(p_toggle, Dict):
                    MerossLanSwitch(self, p_toggle.get("channel", 0), self.toggle_set, self.toggle_get)

            #fallback for switches: in case we couldnt get from NS_APPLIANCE_SYSTEM_ALL
            if not self.entities:
                if NS_APPLIANCE_CONTROL_TOGGLEX in self.ability:
                    MerossLanSwitch(self, 0, self.togglex_set, self.togglex_get)
                elif NS_APPLIANCE_CONTROL_TOGGLE in self.ability:
                    MerossLanSwitch(self, 0, self.toggle_set, self.toggle_get)

            if NS_APPLIANCE_CONTROL_ELECTRICITY in self.ability:
                self._sensor_power = MerossLanSensor(self, DEVICE_CLASS_POWER, POWER_WATT)
                self._sensor_current = MerossLanSensor(self, DEVICE_CLASS_CURRENT, ELECTRICAL_CURRENT_AMPERE)
                self._sensor_voltage = MerossLanSensor(self, DEVICE_CLASS_VOLTAGE, VOLT)

            if NS_APPLIANCE_CONTROL_CONSUMPTIONX in self.ability:
                self._sensor_energy = MerossLanSensor(self, DEVICE_CLASS_ENERGY, ENERGY_WATT_HOUR)

            self.mqtt_publish(NS_APPLIANCE_SYSTEM_ALL, METHOD_GET)

        except Exception as e:
            LOGGER.debug("MerossDevice(%s) init exception:(%s)", device_id, str(e))

        return

    def __del__(self):
        LOGGER.debug("MerossDevice(%s) destroy", self.device_id)
        return

    @property
    def online(self) -> bool:
        if self._online:
            #evaluate device MQTT availability by checking lastrequest got answered in less than 20 seconds
            if (self.lastupdate > self.lastrequest) or ((time() - self.lastrequest) < PARAM_UNAVAILABILITY_TIMEOUT):
                return True
            #else
            LOGGER.debug("MerossDevice(%s) going offline!", self.device_id)
            self._online = False
            for entity in self.entities.values():
                entity._set_unavailable()
        return False

    def parsepayload(self, namespace: str, method: str, payload: dict, replykey: Union[dict, Optional[str]]) -> None:  # pylint: disable=unsubscriptable-object
        """
        every time we receive a response we save it's 'replykey':
        that would be the same as our self.key (which it is compared against in 'get_replykey')
        if it's good else it would be the device message header to be used in
        a reply scheme where we're going to 'fool' the device by using its own hashes
        if our config allows for that (our self.key is 'None' which means empty key or auto-detect)

        Update: this key trick actually doesnt work on MQTT (but works on HTTP)
        """
        self.replykey = replykey
        if replykey != self.key:
            LOGGER_trap(WARNING, "Meross device key error for device_id: %s", self.device_id)

        self.lastupdate = time()
        if not self._online:
            LOGGER.debug("MerossDevice(%s) back online!", self.device_id)
            self._online = True
            if namespace != NS_APPLIANCE_SYSTEM_ALL:
                self.mqtt_publish(NS_APPLIANCE_SYSTEM_ALL, METHOD_GET)
            for entity in self.entities.values():
                entity._set_available()

        # this parsing is going to get 'bolder' as soon as we add more and more messages to parse
        # this is not optimal since, based on device/hardware we should be able to really restrict
        # this checks..right now let's go with it and order this check list by the likelyhood
        # of receiving a particular message (the first should be the more frequent overall and so on...)
        # This frequency is based on my guess of the actual devices connected to this code:
        # Most of all should be recent switches
        # this is naturally valid as per overall users statistic since if you have a particular device
        # that may be unlucky and always parse down to the last item
        if namespace == NS_APPLIANCE_CONTROL_TOGGLEX:
            togglex = payload.get("togglex")
            if isinstance(togglex, List):
                for t in togglex:
                    self.entities[t.get("channel")]._set_onoff(t.get("onoff"))
            elif isinstance(togglex, Dict):
                self.entities[togglex.get("channel")]._set_onoff(togglex.get("onoff"))
            """
            # quick refresh power readings after we toggled
            if NS_APPLIANCE_CONTROL_ELECTRICITY in self.ability:
                def callme(now):
                    self._mqtt_publish(NS_APPLIANCE_CONTROL_ELECTRICITY, METHOD_GET)
                    return
                # by the look of it meross plugs are not very responsive in updating power readings
                # most of the times even with 5 secs delay they dont get it right....
                async_call_later(self.hass, delay = 2, action = callme)
                """

        elif namespace == NS_APPLIANCE_CONTROL_ELECTRICITY:
            electricity = payload.get("electricity")
            power_w = electricity.get("power") / 1000
            voltage_v = electricity.get("voltage") / 10
            current_a = electricity.get("current") / 1000
            if self._sensor_power:
                self._sensor_power._set_state(power_w)
            if self._sensor_current:
                self._sensor_current._set_state(current_a)
            if self._sensor_voltage:
                self._sensor_voltage._set_state(voltage_v)

        elif namespace == NS_APPLIANCE_CONTROL_CONSUMPTIONX:
            if self._sensor_energy:
                self.lastupdate_consumption = self.lastupdate
                daylabel = strftime("%Y-%m-%d", localtime())
                for d in payload.get("consumptionx"):
                    if d.get("date") == daylabel:
                        energy_wh = d.get("value")
                        self._sensor_energy._set_state(energy_wh)

        elif namespace == NS_APPLIANCE_CONTROL_LIGHT:
            light = payload.get("light")
            if isinstance(light, Dict):
                self.entities[light.get("channel")]._set_light(light)

        elif namespace == NS_APPLIANCE_GARAGEDOOR_STATE:
            garagedoor = payload.get("state")
            for g in garagedoor:
                self.entities[g.get("channel")]._set_open(g.get("open"))

        elif namespace == NS_APPLIANCE_ROLLERSHUTTER_STATE:
            state = payload.get("state")
            for s in state:
                self.entities[s.get("channel")]._set_rollerstate(s.get("state"))

        elif namespace == NS_APPLIANCE_ROLLERSHUTTER_POSITION:
            position = payload.get("position")
            for p in position:
                self.entities[p.get("channel")]._set_rollerposition(p.get("position"))

        elif namespace == NS_APPLIANCE_SYSTEM_ALL:
            self.all = payload.get("all", {})
            p_digest = self.all.get("digest")
            if p_digest:
                p_togglex = p_digest.get("togglex")
                if isinstance(p_togglex, List):
                    for t in p_togglex:
                        self.entities[t.get("channel")]._set_onoff(t.get("onoff"))
                elif isinstance(p_togglex, Dict):
                    self.entities[p_togglex.get("channel", 0)]._set_onoff(p_togglex.get("onoff"))
                p_light = p_digest.get("light")
                if isinstance(p_light, Dict):
                    self.entities[p_light.get("channel", 0)]._set_light(p_light)
                p_garagedoor = p_digest.get("garageDoor")
                if isinstance(p_garagedoor, List):
                    for g in p_garagedoor:
                        self.entities[g.get("channel")]._set_open(g.get("open"))
                return
            # older firmwares (MSS110 with 1.1.28) look like dont really have 'digest'
            p_control = self.all.get("control")
            if p_control:
                p_toggle = p_control.get("toggle")
                if isinstance(p_toggle, Dict):
                    self.entities[p_toggle.get("channel", 0)]._set_onoff(p_toggle.get("onoff"))

        elif namespace == NS_APPLIANCE_CONTROL_TOGGLE:
            p_toggle = payload.get("toggle")
            if isinstance(p_toggle, Dict):
                self.entities[p_toggle.get("channel", 0)]._set_onoff(p_toggle.get("onoff"))

        return


    def toggle_set(self, channel: int, ison: int):
        return self.mqtt_publish(
            NS_APPLIANCE_CONTROL_TOGGLE,
            METHOD_SET,
            {"toggle": {"channel": channel, "onoff": ison}}
        )

    def toggle_get(self, channel: int):
        return self.mqtt_publish(
            NS_APPLIANCE_CONTROL_TOGGLE,
            METHOD_GET,
            {"toggle": {"channel": channel}}
        )

    def togglex_set(self, channel: int, ison: int):
        return self.mqtt_publish(
            NS_APPLIANCE_CONTROL_TOGGLEX,
            METHOD_SET,
            {"togglex": {"channel": channel, "onoff": ison}}
        )

    def togglex_get(self, channel: int):
        return self.mqtt_publish(
            NS_APPLIANCE_CONTROL_TOGGLEX,
            METHOD_GET,
            {"togglex": {"channel": channel}}
        )


    def mqtt_publish(self, namespace: str, method: str, payload: dict = {}):
        self.lastrequest = time()
        return self.api.mqtt_publish(self.device_id, namespace, method, payload, key=self.replykey if self.key is None else self.key)


    @callback
    def updatecoordinator_listener(self) -> None:
        now = time()
        # this is a bit rude: we'll keep sending 'heartbeats' to check if the device is still there
        # update(1): disabled because old firmware doesnt support GET NS_APPLIANCE_SYSTEM_REPORT
        # I could change the request to a supported one but all this heartbeat looks lame to mee atm
        # update(2): looks like any firmware doesnt support GET NS_APPLIANCE_SYSTEM_REPORT
        # we're replacing with a well known message and, we're increasing the period
        if (now - self.lastrequest) > PARAM_HEARTBEAT_PERIOD:
            self.mqtt_publish(NS_APPLIANCE_SYSTEM_ALL, METHOD_GET)
            return

        if not (self.online):
            return

        if NS_APPLIANCE_CONTROL_ELECTRICITY in self.ability:
            self.mqtt_publish(NS_APPLIANCE_CONTROL_ELECTRICITY, METHOD_GET)

        if self._sensor_energy and self._sensor_energy.enabled:
            if ((now - self.lastupdate_consumption) > PARAM_ENERGY_UPDATE_PERIOD):
                self.mqtt_publish(NS_APPLIANCE_CONTROL_CONSUMPTIONX, METHOD_GET)

        return
