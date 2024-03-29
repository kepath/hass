from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity import Entity, DeviceInfo
from .onesmartwrapper import OneSmartWrapper
from .const import *


class OneSmartEntity(Entity):
    def __init__(self, hass: HomeAssistant, config_entry, wrapper: OneSmartWrapper, update_topic, source, device_id: str, name: str, suffix: str, icon: str):
        self.hass = hass
        self.config_entry = config_entry
        self.wrapper = wrapper
        self.update_topic = update_topic
        self.update_topic_listener = None

        self._source = source

        self._name = name
        self._attr_has_entity_name = True
        self._suffix = suffix
        self._attr_icon = icon

        self._site = wrapper.get_cache((OneSmartCommand.SITE,OneSmartAction.GET))

        if device_id != None:
            self._device_id = device_id
            devices = wrapper.get_cache((OneSmartCommand.DEVICE,OneSmartAction.LIST))
            rooms = wrapper.get_cache((OneSmartCommand.ROOM,OneSmartAction.LIST))
            self._device: dict = devices.get(device_id)
            room_id = self._device.get(OneSmartFieldName.ROOM, None)
            self._room: dict = rooms.get(room_id, None)
            url = None

            identifiers = {(DOMAIN, self._device_id)}
            device_name = self._device.get(OneSmartFieldName.NAME, None)
            model = self._device.get(OneSmartFieldName.TYPE, None)
            if self._room:
                room_name = self._room.get(OneSmartFieldName.NAME, None)
            else:
                room_name = None
        else:
            self._device_id = self._site.get(OneSmartFieldName.NODEID)
            identifiers = {(DOMAIN, self._device_id),(DOMAIN, self._site.get(OneSmartFieldName.MAC))}
            device_name = self._site.get(OneSmartFieldName.NAME, None)
            model = DEVICE_MODEL
            room_name = None
            url = "https://portal.onesmartcontrol.com"

        self._attr_device_info = DeviceInfo(
            configuration_url=url,
            connections = None,
            entry_type = None,
            hw_version = None,
            identifiers = identifiers,
            manufacturer = DEVICE_MANUFACTURER,
            model = model,
            name = device_name,
            suggested_area = room_name,
            sw_version = self._site.get(OneSmartFieldName.VERSION, None),
            via_device=(DOMAIN, self._site.get(OneSmartFieldName.NODEID, None)),

        )

        self._cache = wrapper.get_cache(source)

    async def async_added_to_hass(self):
        @callback
        def update():
            self.update_from_latest_data()
            self.async_write_ha_state()

        await super().async_added_to_hass()
        self.update_topic_listener = async_dispatcher_connect(
            self.hass, self.update_topic, update
        )
        self.async_on_remove(self.update_topic_listener)
        self.update_from_latest_data()

    @property
    def available(self) -> bool:
        return self.wrapper.is_connected()

    @property
    def should_poll(self) -> bool:
        return False

    @property
    def cache(self):
        return self._cache

    @property
    def name(self):
        if self._suffix != None:
            return f"{self._name} {self._suffix.title()}"
        else:
            return self._name

    @property
    def unique_id(self):
        if self._suffix != None:
            return f"{DOMAIN}-{self._device_id}-{self._key}-{self._suffix}"
        else:
            return f"{DOMAIN}-{self._device_id}-{self._key}"

    @callback
    def update_from_latest_data(self):
        self._cache = self.wrapper.get_cache(self._source)
        
    def get_cache_value(self, key):
        if self.cache == None:
            return None
        
        value = self.cache
        
        if len(value) == 0:
            return None
        else:
            node: str
            for node in key.split("."):
                if node.isdigit():
                    node = int(node)
                if value == None:
                    return None
                elif node in value:
                    value = value[node]
                    continue
                else:
                    value = None

        return value