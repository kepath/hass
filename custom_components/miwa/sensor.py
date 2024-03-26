"""MIWA sensor platform."""
from __future__ import annotations

import logging
from collections.abc import Callable
from dataclasses import dataclass
from typing import Any

from homeassistant.components.sensor import SensorDeviceClass
from homeassistant.components.sensor import SensorEntity
from homeassistant.components.sensor import SensorEntityDescription
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CURRENCY_EURO
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import EntityDescription
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import StateType

from . import MIWADataUpdateCoordinator
from .const import DOMAIN
from .entity import MIWAEntity
from .models import MIWAItem

_LOGGER = logging.getLogger(__name__)


@dataclass
class MIWASensorDescription(SensorEntityDescription):
    """Class to describe a MIWA sensor."""

    value_fn: Callable[[Any], StateType] | None = None


SENSOR_DESCRIPTIONS: list[SensorEntityDescription] = [
    MIWASensorDescription(key="address", icon="mdi:map-marker"),
    MIWASensorDescription(key="user", icon="mdi:face-man"),
    MIWASensorDescription(key="email", icon="mdi:email"),
    MIWASensorDescription(key="telefoon", icon="mdi:phone"),
    MIWASensorDescription(key="info", icon="mdi:information"),
    MIWASensorDescription(key="product", icon="mdi:trash-can"),
    MIWASensorDescription(key="verzending", icon="mdi:email-fast"),
    MIWASensorDescription(
        key="euro",
        icon="mdi:currency-eur",
        device_class=SensorDeviceClass.MONETARY,
        native_unit_of_measurement=CURRENCY_EURO,
    ),
    MIWASensorDescription(
        key="dumping",
        icon="mdi:truck-cargo-container",
        device_class=SensorDeviceClass.MONETARY,
        native_unit_of_measurement=CURRENCY_EURO,
    ),
    MIWASensorDescription(
        key="gewicht",
        icon="mdi:weight-kilogram",
        device_class=SensorDeviceClass.WEIGHT,
        native_unit_of_measurement="kg",
    ),
]


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the MIWA sensors."""
    _LOGGER.debug("[sensor|async_setup_entry|async_add_entities|start]")
    coordinator: MIWADataUpdateCoordinator = hass.data[DOMAIN][entry.entry_id]
    entities: list[MIWASensor] = []

    SUPPORTED_KEYS = {
        description.key: description for description in SENSOR_DESCRIPTIONS
    }

    # _LOGGER.debug(f"[sensor|async_setup_entry|async_add_entities|SUPPORTED_KEYS] {SUPPORTED_KEYS}")

    if coordinator.data is not None:
        for item in coordinator.data:
            item = coordinator.data[item]
            if description := SUPPORTED_KEYS.get(item.type):
                if item.native_unit_of_measurement is not None:
                    native_unit_of_measurement = item.native_unit_of_measurement
                else:
                    native_unit_of_measurement = description.native_unit_of_measurement
                sensor_description = MIWASensorDescription(
                    key=str(item.key),
                    name=item.name,
                    value_fn=description.value_fn,
                    native_unit_of_measurement=native_unit_of_measurement,
                    icon=description.icon,
                )

                _LOGGER.debug(f"[sensor|async_setup_entry|adding] {item.name}")
                entities.append(
                    MIWASensor(
                        coordinator=coordinator,
                        description=sensor_description,
                        item=item,
                    )
                )
            else:
                _LOGGER.debug(
                    f"[sensor|async_setup_entry|no support type found] {item.name}, type: {item.type}, keys: {SUPPORTED_KEYS.get(item.type)}",
                    True,
                )

        async_add_entities(entities)


class MIWASensor(MIWAEntity, SensorEntity):
    """Representation of a MIWA sensor."""

    entity_description: MIWASensorDescription

    def __init__(
        self,
        coordinator: MIWADataUpdateCoordinator,
        description: EntityDescription,
        item: MIWAItem,
    ) -> None:
        """Set entity ID."""
        super().__init__(coordinator, description, item)
        self.entity_id = f"sensor.{DOMAIN}_{self.item.key}"

    @property
    def native_value(self) -> str:
        """Return the status of the sensor."""
        state = self.item.state

        if self.entity_description.value_fn:
            return self.entity_description.value_fn(state)

        return state

    @property
    def extra_state_attributes(self):
        """Return attributes for sensor."""
        if not self.coordinator.data:
            return {}
        attributes = {
            "last_synced": self.last_synced,
        }
        if len(self.item.extra_attributes) > 0:
            for attr in self.item.extra_attributes:
                attributes[attr] = self.item.extra_attributes[attr]
        return attributes
