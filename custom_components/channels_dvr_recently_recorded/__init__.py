"""The Channels DVR Recently Recorded integation."""

from homeassistant.const import CONF_HOST, CONF_PORT
from custom_components.channels_dvr_recently_recorded.api import (
    ChannelsDVR,
    ConnectionFail,
)
import logging
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant


DOMAIN = "channels_dvr_recently_recorded"

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict):
    """Set up the Channels DVR Recently Recorded component."""
    hass.data.setdefault(DOMAIN, {})
    return True


async def async_setup_entry(hass, config_entry):
    """Set up config entry."""

    channels_dvr = ChannelsDVR(
        config_entry.data[CONF_HOST], config_entry.data[CONF_PORT]
    )
    try:
        await channels_dvr.init_data()
    except ConnectionFail as err:
        return False

    hass.data[DOMAIN][config_entry.entry_id] = channels_dvr

    await hass.config_entries.async_forward_entry_setups (config_entry, ["sensor"])

    return True


async def async_unload_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_forward_entry_unload(
        config_entry, "sensor"
    )

    if unload_ok:
        hass.data[DOMAIN].pop(config_entry.entry_id)

    return unload_ok