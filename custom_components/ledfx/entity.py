"""LedFx entity."""

from __future__ import annotations

import copy
import logging
from typing import Any

from homeassistant.components.light import ATTR_BRIGHTNESS
from homeassistant.helpers.entity import EntityDescription
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import (
    ATTR_FIELD_TYPE,
    ATTR_LIGHT_BRIGHTNESS,
    ATTR_LIGHT_COLOR,
    ATTR_LIGHT_EFFECT,
    ATTR_LIGHT_EFFECT_CONFIG,
    ATTR_STATE,
    ATTRIBUTION,
)
from .enum import Version
from .helper import generate_entity_id
from .updater import LedFxUpdater, convert_brightness

_LOGGER = logging.getLogger(__name__)


class LedFxEntity(CoordinatorEntity):
    """LedFx entity."""

    _attr_attribution: str = ATTRIBUTION
    _attr_device_code: str | None = None
    _attr_field_type: str | None = None

    def __init__(
        self,
        unique_id: str,
        description: EntityDescription,
        updater: LedFxUpdater,
        entity_id_format: str,
    ) -> None:
        """Initialize sensor.

        :param unique_id: str: Unique ID
        :param description: EntityDescription: EntityDescription object
        :param updater: LedFxUpdater: LedFx updater object
        :param entity_id_format: str: ENTITY_ID_FORMAT
        """

        CoordinatorEntity.__init__(self, coordinator=updater)

        self.entity_description = description
        self._updater: LedFxUpdater = updater

        self.entity_id = generate_entity_id(
            entity_id_format,
            updater.ip,
            description.key,
        )

        self._attr_name = description.name
        self._attr_unique_id = unique_id
        self._attr_available = updater.data.get(ATTR_STATE, False)

        self._attr_device_info = updater.device_info

    async def async_added_to_hass(self) -> None:
        """When entity is added to hass."""

        await CoordinatorEntity.async_added_to_hass(self)

    @property
    def available(self) -> bool:
        """Is available

        :return bool: Is available
        """

        return self._attr_available and self.coordinator.last_update_success

    def _handle_coordinator_update(self) -> None:
        """Update state."""

        raise NotImplementedError  # pragma: no cover

    async def async_update_effect(
        self,
        code: str,
        value: Any = None,
    ) -> None:
        """Update effect

        :param code: str: Code
        :param value: Any: Value
        """

        config: dict = dict(
            self._updater.data.get(
                f"{self._attr_device_code}_{ATTR_LIGHT_EFFECT_CONFIG}", {}
            )
            | {
                ATTR_BRIGHTNESS: convert_brightness(
                    min(
                        float(
                            self._updater.data.get(
                                f"{self._attr_device_code}_{ATTR_LIGHT_BRIGHTNESS}", 0
                            )
                        ),
                        255,
                    )
                )
            }
        )

        if self._updater.version == Version.V2:
            config |= {
                "background_color": self._updater.data.get(
                    f"{self._attr_device_code}_{ATTR_LIGHT_COLOR}"
                )
            }

        config |= {code: value}

        effect: str | None = self._updater.data.get(
            f"{self._attr_device_code}_{ATTR_LIGHT_EFFECT}"
        )

        if self._attr_device_code and effect:
            await self._updater.client.effect(
                self._attr_device_code,
                effect,
                self._convert_config(config, code, value),
                self._updater.version == Version.V2,
            )

            self._updater.data[
                f"{self._attr_device_code}_{ATTR_LIGHT_EFFECT_CONFIG}"
            ] = {
                code: value for code, value in config.items() if code != ATTR_BRIGHTNESS
            }

            self._updater.async_update_listeners()

    def _convert_config(self, config: dict, code: str, value: Any) -> dict:
        """Convert config

        :param config: dict
        :param code: str: Code
        :param value: Any: Value
        :return dict
        """

        result: dict = copy.deepcopy(config)

        if (
            code in self._updater.effect_properties
            and self._updater.effect_properties[code][ATTR_FIELD_TYPE] == "color"
        ):  # pragma: no cover
            if value in self._updater.colors:
                result[code] = self._updater.colors[value]
            elif value in self._updater.gradients:
                result[code] = self._updater.gradients[value]
            else:
                del result[code]

        return result
