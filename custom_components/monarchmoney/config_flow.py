"""Config flow for Monarch Money integration."""
from __future__ import annotations
import logging

import voluptuous as vol

from typing import Any, Optional
from asyncio.log import logger
from homeassistant.config_entries import (
    ConfigEntry,
    OptionsFlow,
)
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.data_entry_flow import FlowResult
from homeassistant.const import CONF_SCAN_INTERVAL, CONF_EMAIL, CONF_PASSWORD
from monarchmoney import MonarchMoney

from .const import (
    CONF_TIMEOUT,
    DEFAULT_SCAN_INTERVAL,
    DEFAULT_TIMEOUT,
    DOMAIN,
    VALUES_SCAN_INTERVAL,
    VALUES_TIMEOUT,
    SESSION_FILE,
)

_LOGGER = logging.getLogger(__name__)

CREDENTIALS_SCHEMA = vol.Schema(
    {
        vol.Required("email"): str,
        vol.Required("password"): str,
    }
)

OPTIONS_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_SCAN_INTERVAL, default=DEFAULT_SCAN_INTERVAL): vol.In(
            VALUES_SCAN_INTERVAL
        ),
        vol.Required(CONF_TIMEOUT, default=DEFAULT_TIMEOUT): vol.In(VALUES_TIMEOUT),
    }
)


class MonarchConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Monarch Money."""

    VERSION = 1
    DOMAIN = DOMAIN
    CONNECTION_CLASS = config_entries.CONN_CLASS_CLOUD_POLL

    def __init__(self) -> None:
        self._existing_entry = None
        self._user_input = {}
        self._description_placeholders = None
        super().__init__()

    @property
    def logger(self) -> logging.Logger:
        """Return logger."""
        return logging.getLogger(__name__)

    def _get_schema(self, step_id: str):
        if step_id == "user":
            return CREDENTIALS_SCHEMA
        else:
            return vol.Schema({vol.Required(CONF_PASSWORD): str})

    async def _test_connection_and_set_token(self):
        api = MonarchMoney(session_file=self.hass.config.path(SESSION_FILE))
        await api.login(self._user_input[CONF_EMAIL], self._user_input[CONF_PASSWORD])
        # TODO exception handling
        # except LoginFailedException as exc:
        #     raise InvalidAuth from exc
        # If you cannot connect:
        # throw CannotConnect

        # try to get account information, if we do, we're good
        # await api.get_account()
        self.logger.info("Successfully authenticated")

        # set the token to the one just obtained
        api.save_session(filename=self.hass.config.path(SESSION_FILE))
        # self._user_input["api"] = api

    def _show_setup_form(self, user_input=None, errors=None, step_id="user"):
        """Show the setup form to the user."""

        if user_input is None:
            user_input = {}

        return self.async_show_form(
            step_id=step_id,
            data_schema=self._get_schema(step_id),
            errors=errors or {},
            description_placeholders=self._description_placeholders,
        )

    async def _validate_and_create_entry(self, user_input, step_id):
        """Check if config is valid and create entry if so."""

        self._user_input[CONF_PASSWORD] = user_input[CONF_PASSWORD]

        extra_inputs = user_input

        if self._existing_entry:
            extra_inputs = self._existing_entry
        self._user_input[CONF_EMAIL] = extra_inputs[CONF_EMAIL]

        if self.unique_id is None:
            await self.async_set_unique_id(self._user_input[CONF_EMAIL])
            self._abort_if_unique_id_configured()

        try:
            # test the connection and set the token
            await self._test_connection_and_set_token()
        except Exception as ex:
            logger.exception(ex)
            return self.async_show_form(
                step_id=step_id,
                data_schema=self._get_schema(step_id),
                errors={"base": "invalid_auth"},
            )

        if step_id == "user":
            # if we didn't have an entry, create one
            return self.async_create_entry(
                title=self._user_input[CONF_EMAIL], data=self._user_input
            )

        # if we have an entry, assume that we want to update it (treat as re-auth)
        entry = await self.async_set_unique_id(self.unique_id)
        self.hass.config_entries.async_update_entry(entry, data=self._user_input)
        await self.hass.config_entries.async_reload(entry.entry_id)
        return self.async_abort(reason="reauth_successful")

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Handle the initial step."""
        errors: dict[str, str] = {}

        if user_input is None:
            return self._show_setup_form(user_input, errors)

        return await self._validate_and_create_entry(user_input, "user")

    async def async_step_reauth(self, entry_data) -> FlowResult:
        """Handle configuration by re-auth."""
        await self.async_set_unique_id(entry_data[CONF_EMAIL])
        self._existing_entry = {**entry_data}
        self._description_placeholders = {CONF_EMAIL: entry_data[CONF_EMAIL], CONF_PASSWORD: entry_data[CONF_PASSWORD]}
        return await self.async_step_reauth_confirm()

    async def async_step_reauth_confirm(
        self, user_input: Optional[dict[str, str]] = None
    ) -> FlowResult:
        """Handle re-auth completion."""
        if user_input is None:
            return self._show_setup_form(step_id="reauth_confirm")

        return await self._validate_and_create_entry(user_input, "reauth_confirm")

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: ConfigEntry) -> OptionsFlow:
        """Define the config flow to handle options."""
        return MonarchOptionsFlowHandler(config_entry)


class MonarchOptionsFlowHandler(OptionsFlow):
    """Handle an Mila options flow."""

    def __init__(self, entry: ConfigEntry) -> None:
        """Initialize."""
        self.entry = entry

    async def async_step_init(
        self, user_input: Optional[dict[str, str]] = None
    ) -> FlowResult:
        """Manage the options."""
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        return self.async_show_form(step_id="init", data_schema=OPTIONS_SCHEMA)
