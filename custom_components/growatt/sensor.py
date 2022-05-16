"""
Support for Growatt Plant energy production sensors.
"""
import logging

import voluptuous as vol

import homeassistant.helpers.config_validation as cv
from homeassistant.components.sensor import PLATFORM_SCHEMA
from homeassistant.const import CONF_USERNAME, CONF_PASSWORD
from homeassistant.helpers.entity import Entity

_LOGGER = logging.getLogger(__name__)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_USERNAME): cv.string,
        vol.Required(CONF_PASSWORD): cv.string,
    }
)


def setup_platform(hass, config, add_entities, discovery_info=None):
    """Set up the Growatt Plant sensor."""
    import growatt

    username = config.get(CONF_USERNAME)
    password = config.get(CONF_PASSWORD)

    growatt_client = growatt.GrowattApi()

    is_login_success = login(growatt_client, username, password)
    if is_login_success:
        sensor_today = GrowattPlantToday(
            hass, growatt_client, username, password
        )
        sensor_total = GrowattPlantTotal(
            hass, growatt_client, username, password
        )
        sensor_current = GrowattPlantCurrent(
            hass, growatt_client, username, password
        )
        add_entities([sensor_today, sensor_total, sensor_current])
        return True

    return False


def login(client, username, password):
    """Login to the growatt server."""
    import growatt

    try:
        client.login(username, password)
        return True
    except growatt.LoginError as error:
        logging.error(error)
        return False


class GrowattPlant(Entity):
    def __init__(self, hass, client, username, password):
        """Initialize the sensor."""
        self._hass = hass
        self._client = client
        self._username = username
        self._password = password
        self._state = None

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @staticmethod
    def convert_multiplier(metric_name, multiplier_lookup):
        """Convert a value to a given multiplier."""
        if metric_name not in multiplier_lookup:
            message = (
                "Found an unsupported metric name {}, "
                "cannot convert safely."
            ).format(metric_name)
            logging.error(message)
            raise ValueError(message)
        else:
            return multiplier_lookup[metric_name]


class GrowattPlantTotals(GrowattPlant):
    """Representation of a Growatt plant sensor."""

    @property
    def unit_of_measurement(self):
        """Return the unit this state is expressed in."""
        return "kWh"

    def _convert_to_kwh(self, value: str, metric_name: str):
        """Convert a value to a kWh value."""
        watts = float(value)
        multiplier_lookup = {"kWh": 1, "MWh": 1000, "GWh": 1000 * 1000}
        return watts * self.convert_multiplier(metric_name, multiplier_lookup)

    def _get_total_energy(self, key: str):
        """Get todays energy as float in kWh.

        Refreshes login to update the session.
        """
        login(self._client, self._username, self._password)
        plant_info = self._client.plant_list()
        return float(
            self._convert_to_kwh(*plant_info["totalData"][key].split(" "))
        )


class GrowattPlantToday(GrowattPlantTotals):
    """Representation of a Growatt plant daily sensor."""

    def update(self):
        """Get the latest data from Growatt server."""
        self._state = self._get_total_energy("todayEnergySum")

    @property
    def name(self):
        """Return the name of the sensor."""
        return "Growatt plant today"


class GrowattPlantTotal(GrowattPlantTotals):
    """Representation of a Growatt plant total sensor."""

    def update(self):
        """Get the latest data from Growatt server."""
        self._state = self._get_total_energy("totalEnergySum")

    @property
    def name(self):
        """Return the name of the sensor."""
        return "Growatt plant total"


class GrowattPlantCurrent(GrowattPlant):
    """Representation of a Growatt plant current sensor."""

    def _convert_to_w(self, value: str, metric_name: str):
        """Convert a value to a kWh value."""
        watts = float(value)
        multiplier_lookup = {"W": 1, "kW": 1000}
        return watts * self.convert_multiplier(metric_name, multiplier_lookup)

    def update(self):
        """Get total current energy as float in W.

        Refreshes login to update the session.
        """
        login(self._client, self._username, self._password)
        plant_info = self._client.plant_list()
        new_state = float(
            self._convert_to_w(
                *plant_info["totalData"]["currentPowerSum"].split(" ")
            )
        )
        self._state = new_state

    @property
    def unit_of_measurement(self):
        """Return the unit this state is expressed in."""
        return "W"

    @property
    def name(self):
        """Return the name of the sensor."""
        return "Growatt plant current"
