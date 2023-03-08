"""Sensors of ABB Power-One PVI SunSpec"""
import logging
from typing import Any, Dict, Optional

from homeassistant.components.sensor import SensorEntity
from homeassistant.const import CONF_NAME
from homeassistant.core import callback

from .const import (DOMAIN, INVERTER_TYPE, SENSOR_TYPES_SINGLE_PHASE,
                    SENSOR_TYPES_THREE_PHASE)

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(hass, entry, async_add_entities):
    """Setup sensor platform"""
    hub_name = entry.data[CONF_NAME]
    hub = hass.data[DOMAIN][hub_name]["hub"]
    hub.read_sunspec_modbus_init()
    hub.read_sunspec_modbus_data()
    device_info = {
        "identifiers": {(DOMAIN, hub_name)},
        "name": hub_name,
        "model": hub.data["comm_model"],
        "manufacturer": hub.data["comm_manufact"],
        "sw_version": hub.data["comm_version"]
    }
    _LOGGER.debug("(sensor) Model: %s", hub.data["comm_model"])
    _LOGGER.debug("(sensor) Manufacturer: %s", hub.data["comm_manufact"])
    _LOGGER.debug("(sensor) SW Version: %s", hub.data["comm_version"])
    _LOGGER.debug("(sensor) Inverter Type (str): %s", hub.data["invtype"])
    entities = []
    if hub.data["invtype"] == INVERTER_TYPE[101]:
        for sensor_info in SENSOR_TYPES_SINGLE_PHASE.values():
            sensor = ABBPowerOnePVISunSpecSensor(
                hub_name,
                hub,
                device_info,
                sensor_info[0],
                sensor_info[1],
                sensor_info[2],
                sensor_info[3],
                sensor_info[4],
                sensor_info[5],
            )
            entities.append(sensor)
    elif hub.data["invtype"] == INVERTER_TYPE[103]:
        for sensor_info in SENSOR_TYPES_THREE_PHASE.values():
            sensor = ABBPowerOnePVISunSpecSensor(
                hub_name,
                hub,
                device_info,
                sensor_info[0],
                sensor_info[1],
                sensor_info[2],
                sensor_info[3],
                sensor_info[4],
                sensor_info[5],
            )
            entities.append(sensor)
    async_add_entities(entities)
    return True


class ABBPowerOnePVISunSpecSensor(SensorEntity):
    """Representation of an ABB SunSpec Modbus sensor"""

    def __init__(
        self, platform_name, hub, device_info, name, key, unit, icon, device_class, state_class
    ):
        """Initialize the sensor"""
        self._platform_name = platform_name
        self._hub = hub
        self._device_info = device_info
        self._name = name
        self._key = key
        self._unit_of_measurement = unit
        self._icon = icon
        self._device_class = device_class
        self._state_class = state_class

    async def async_added_to_hass(self):
        """Register callbacks"""
        self._hub.async_add_sunspec_modbus_sensor(self._sunspec_modbus_data_updated)

    async def async_will_remove_from_hass(self) -> None:
        """Unregister callbacks"""
        self._hub.async_remove_sunspec_modbus_sensor(self._sunspec_modbus_data_updated)

    @callback
    def _sunspec_modbus_data_updated(self):
        self.async_write_ha_state()

    @callback
    def _update_state(self):
        if self._key in self._hub.data:
            self._state = self._hub.data[self._key]

    @property
    def name(self):
        """Return the name"""
        return f"{self._platform_name} ({self._name})"

    @property
    def unique_id(self) -> Optional[str]:
        """Return the ID"""
        return f"{self._platform_name}_{self._key}"

    @property
    def unit_of_measurement(self):
        """Return the unit of measurement"""
        return self._unit_of_measurement

    @property
    def icon(self):
        """Return the sensor icon."""
        return self._icon

    @property
    def device_class(self):
        """Return the sensor device_class."""
        return self._device_class

    @property
    def state_class(self):
        """Return the sensor state_class."""
        return self._state_class

    @property
    def state(self):
        """Return the state of the sensor."""
        if self._key in self._hub.data:
            return self._hub.data[self._key]

    @property
    def state_attributes(self) -> Optional[Dict[str, Any]]:
        """Return the attributes"""
        return None

    @property
    def should_poll(self) -> bool:
        """Data is delivered by the hub"""
        return False

    @property
    def device_info(self) -> Optional[Dict[str, Any]]:
        """Return device information"""
        return self._device_info
