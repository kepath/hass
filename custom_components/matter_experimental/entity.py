"""Matter entity base class."""
from __future__ import annotations

from abc import abstractmethod
from typing import Any, Callable, Coroutine

from homeassistant.core import callback
from homeassistant.helpers import device_registry, entity

from matter_server.client.exceptions import FailedCommand
from matter_server.client.model.device import MatterDevice

from .const import DOMAIN
from .device_platform_helper import DeviceMapping


class MatterEntity(entity.Entity):

    _attr_should_poll = False
    _unsubscribe: Callable[..., Coroutine[Any, Any, None]] | None = None

    def __init__(self, device: MatterDevice, mapping: DeviceMapping) -> None:
        self._device = device
        self._device_mapping = mapping
        if mapping.entity_description:
            self.entity_description = mapping.entity_description
        self._attr_unique_id = f"{device.node.matter.client.server_info.compressedFabricId}-{device.node.unique_id}-{device.endpoint_id}-{device.device_type.device_type}"

    @property
    def device_info(self) -> entity.DeviceInfo | None:
        """Return device info for device registry."""
        return {"identifiers": {(DOMAIN, self._device.node.unique_id)}}

    async def init_matter_device(self) -> None:
        """Initialize and subscribe device attributes."""
        device_name = (
            device_registry.async_get(self.hass)
            .async_get(self.registry_entry.device_id)
            .name
        )

        device_type_name = self._device.device_type.__doc__[:-1]
        name = f"{device_name} {device_type_name}"

        # If this device has multiple of this device type, add their endpoint.
        if (
            sum(
                dev.device_type is self._device.device_type
                for dev in self._device.node.devices
            )
            > 1
        ):
            name += f" ({self._device.endpoint_id})"

        self._attr_name = name

        if not self._device_mapping.subscribe_attributes:
            self._update_from_device()
            return

        try:
            # Subscribe to updates.
            self._unsubscribe = await self._device.subscribe_updates(
                self._device_mapping.subscribe_attributes, self._subscription_update
            )

            # Fetch latest info from the device.
            await self._device.update_attributes(
                self._device_mapping.subscribe_attributes
            )
        except FailedCommand as err:
            self._device.node.matter.adapter.logger.warning(
                "Error interacting with node %d (%s): %s. Marking device as unavailable. Recovery is not implemented yet. Reload config entry when device is available again.",
                self._device.node.node_id,
                self.entity_id,
                str(err.error_code),
            )
            self._attr_available = False

        self._update_from_device()

    async def async_added_to_hass(self) -> None:
        """Handle being added to Home Assistant."""
        await super().async_added_to_hass()

        async with self._device.node.matter.adapter.get_node_lock(
            self._device.node.node_id
        ):
            await self.init_matter_device()

    async def async_will_remove_from_hass(self) -> None:
        """Run when entity will be removed from hass."""
        if self._unsubscribe is not None:
            await self._unsubscribe()

    @callback
    def _subscription_update(self) -> None:
        """Called when subscription updated."""
        self._update_from_device()
        self.async_write_ha_state()

    @callback
    @abstractmethod
    def _update_from_device(self) -> None:
        """Update data from Matter device."""