"""Adds config flow for Blueprint."""
from __future__ import annotations

import logging

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.helpers import selector

# from .StatefulScenes import test_yaml
from .const import (
    DOMAIN,
    CONF_NUMBER_TOLERANCE,
    CONF_SCENE_PATH,
    CONF_RESTORE_STATES_ON_DEACTIVATE,
    CONF_TRANSITION_TIME,
    DEFAULT_NUMBER_TOLERANCE,
    DEFAULT_SCENE_PATH,
    DEFAULT_RESTORE_STATES_ON_DEACTIVATE,
    DEFAULT_TRANSITION_TIME,
)

from .const import (
    TOLERANCE_MIN,
    TOLERANCE_MAX,
    TOLERANCE_STEP,
    TRANSITION_MIN,
    TRANSITION_MAX,
    TRANSITION_STEP,
)
from .StatefulScenes import Hub, StatefulScenesYamlInvalid, StatefulScenesYamlNotFound

_LOGGER = logging.getLogger(__name__)


class ConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for Blueprint."""

    VERSION = 1

    async def async_step_user(
        self,
        user_input: dict | None = None,
    ) -> config_entries.FlowResult:
        """Handle a flow initialized by the user."""
        _errors = {}

        if user_input is not None:
            try:
                Hub(
                    hass=self.hass,
                    scene_path=user_input[CONF_SCENE_PATH],
                    number_tolerance=user_input[CONF_NUMBER_TOLERANCE],
                )
            except StatefulScenesYamlInvalid as err:
                _LOGGER.warning(err)
                _errors["base"] = "invalid_yaml"
            except StatefulScenesYamlNotFound as err:
                _LOGGER.warning(err)
                _errors["base"] = "yaml_not_found"
            except Exception as err:
                _LOGGER.warning(err)
                _errors["base"] = "unknown"
            else:
                return self.async_create_entry(
                    title="Stateful Scenes",
                    data=user_input,
                )

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(
                {
                    vol.Optional(
                        CONF_SCENE_PATH, default=DEFAULT_SCENE_PATH
                    ): selector.TextSelector(
                        selector.TextSelectorConfig(type=selector.TextSelectorType.TEXT)
                    ),
                    vol.Optional(
                        CONF_NUMBER_TOLERANCE, default=DEFAULT_NUMBER_TOLERANCE
                    ): selector.NumberSelector(
                        selector.NumberSelectorConfig(
                            min=TOLERANCE_MIN, max=TOLERANCE_MAX, step=TOLERANCE_STEP
                        )
                    ),
                    vol.Optional(
                        CONF_RESTORE_STATES_ON_DEACTIVATE,
                        default=DEFAULT_RESTORE_STATES_ON_DEACTIVATE,
                    ): selector.BooleanSelector(),
                    vol.Optional(
                        CONF_TRANSITION_TIME, default=DEFAULT_TRANSITION_TIME
                    ): selector.NumberSelector(
                        selector.NumberSelectorConfig(
                            min=TRANSITION_MIN, max=TRANSITION_MAX, step=TRANSITION_STEP
                        )
                    ),
                }
            ),
            errors=_errors,
        )

    # async def _test_credentials(self, username: str, password: str) -> None:
    #     """Validate credentials."""
    #     client = IntegrationBlueprintApiClient(
    #         username=username,
    #         password=password,
    #         session=async_create_clientsession(self.hass),
    #     )
    #     await client.async_get_data()
