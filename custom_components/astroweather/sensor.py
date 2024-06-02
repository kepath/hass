"""Support for the AstroWeather sensors."""

import logging

from homeassistant.components.sensor import SensorDeviceClass, SensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import (
    DEGREE,
    PERCENTAGE,
    UnitOfLength,
    UnitOfSpeed,
    UnitOfTemperature,
    UnitOfTime,
)
from homeassistant.core import HomeAssistant
from homeassistant.util import dt as dt_util

from .const import CONF_LOCATION_NAME, DEFAULT_LOCATION_NAME, DOMAIN, UPTONIGHT
from .entity import AstroWeatherEntity

SENSOR_NAME = 0
SENSOR_UNIT = 1
SENSOR_ICON = 2
SENSOR_DEVICE_CLASS = 3
SENSOR_STATE_CLASS = 4

STATE_CLASS_MEASUREMENT = "measurement"

_LOGGER = logging.getLogger(__name__)

# Sensor types are defined like: Name, Unit Type, icon, device class
SENSOR_TYPES = {
    "forecast_length": [
        "Forecast Length",
        UnitOfTime.HOURS,
        "mdi:map-marker-distance",
        None,
        None,
    ],
    "location_name": [
        "Location Name",
        None,
        "mdi:map-marker-outline",
        None,
        None,
    ],
    "latitude": [
        "Latitude",
        DEGREE,
        "mdi:latitude",
        None,
        None,
    ],
    "longitude": [
        "Longitude",
        DEGREE,
        "mdi:longitude",
        None,
        None,
    ],
    "elevation": [
        "Elevation",
        UnitOfLength.METERS,
        "mdi:image-filter-hdr",
        None,
        None,
    ],
    "time_shift": [
        "Time Shift",
        None,
        "mdi:map-clock-outline",
        None,
        None,
    ],
    "forecast_time": [
        "Timestamp",
        None,
        "mdi:calendar",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "cloudcover_percentage": [
        "Cloud Cover",
        PERCENTAGE,
        "mdi:weather-night-partly-cloudy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "cloudless_percentage": [
        "Cloudless",
        PERCENTAGE,
        "mdi:weather-night-partly-cloudy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "cloud_area_fraction_percentage": [
        "Clouds Area",
        PERCENTAGE,
        "mdi:weather-night-partly-cloudy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "cloud_area_fraction_high_percentage": [
        "Clouds Area High",
        PERCENTAGE,
        "mdi:weather-night-partly-cloudy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "cloud_area_fraction_medium_percentage": [
        "Clouds Area Medium",
        PERCENTAGE,
        "mdi:weather-night-partly-cloudy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "cloud_area_fraction_low_percentage": [
        "Clouds Area Low",
        PERCENTAGE,
        "mdi:weather-night-partly-cloudy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "fog_area_fraction_percentage": [
        "Fog Area",
        PERCENTAGE,
        "mdi:weather-fog",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "seeing_percentage": [
        "Seeing Percentage",
        PERCENTAGE,
        "mdi:waves",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "seeing": [
        "Seeing",
        None,
        "mdi:waves",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "transparency_percentage": [
        "Transparency",
        PERCENTAGE,
        "mdi:safety-goggles",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "transparency_plain": [
        "Transparency Plain",
        None,
        "mdi:safety-goggles",
        None,
        None,
    ],
    "lifted_index": [
        "Lifted Index",
        UnitOfTemperature.CELSIUS,
        "mdi:arrow-expand-up",
        SensorDeviceClass.TEMPERATURE,
        STATE_CLASS_MEASUREMENT,
    ],
    "lifted_index_plain": [
        "Lifted Index Plain",
        None,
        "mdi:arrow-expand-up",
        None,
        None,
    ],
    "rh2m": [
        "2m Relative Humidity",
        PERCENTAGE,
        "mdi:water-percent",
        SensorDeviceClass.HUMIDITY,
        STATE_CLASS_MEASUREMENT,
    ],
    "calm_percentage": [
        "Calm Percentage",
        PERCENTAGE,
        "mdi:weather-windy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "wind10m_direction": [
        "10m Wind Direction",
        None,
        "mdi:weather-windy",
        None,
        None,
    ],
    "wind10m_speed": [
        "10m Wind Speed",
        UnitOfSpeed.METERS_PER_SECOND,
        "mdi:windsock",
        SensorDeviceClass.WIND_SPEED,
        STATE_CLASS_MEASUREMENT,
    ],
    "temp2m": [
        "2m Temperature",
        UnitOfTemperature.CELSIUS,
        "mdi:thermometer",
        SensorDeviceClass.TEMPERATURE,
        STATE_CLASS_MEASUREMENT,
    ],
    "dewpoint2m": [
        "2m Dewpoint",
        UnitOfTemperature.CELSIUS,
        "mdi:thermometer",
        SensorDeviceClass.TEMPERATURE,
        STATE_CLASS_MEASUREMENT,
    ],
    "precipitation_amount": [
        "Precipitation Amount",
        UnitOfLength.MILLIMETERS,
        "mdi:weather-snowy-rainy",
        SensorDeviceClass.PRECIPITATION,
        STATE_CLASS_MEASUREMENT,
    ],
    "condition_percentage": [
        "Condition",
        PERCENTAGE,
        "mdi:weather-snowy-rainy",
        None,
        STATE_CLASS_MEASUREMENT,
    ],
    "sun_altitude": [
        "Sun Altitude",
        DEGREE,
        "mdi:weather-sunny",
        None,
        None,
    ],
    "sun_azimuth": [
        "Sun Azimuth",
        DEGREE,
        "mdi:weather-sunny",
        None,
        None,
    ],
    "sun_next_setting": [
        "Sun Next Setting",
        None,
        "mdi:weather-sunset-down",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "sun_next_setting_nautical": [
        "Sun Next Setting Nautical",
        None,
        "mdi:weather-sunset-down",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "sun_next_setting_astro": [
        "Sun Next Setting Astronomical",
        None,
        "mdi:weather-sunset-down",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "sun_next_rising": [
        "Sun Next Rising",
        None,
        "mdi:weather-sunset-down",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "sun_next_rising_nautical": [
        "Sun Next Rising Nautical",
        None,
        "mdi:weather-sunset-down",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "sun_next_rising_astro": [
        "Sun Next Rising Astronomical",
        None,
        "mdi:weather-sunset-down",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "moon_next_rising": [
        "Moon Next Rising",
        None,
        "mdi:arrow-up-circle-outline",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "moon_next_setting": [
        "Moon Next Setting",
        None,
        "mdi:arrow-down-circle-outline",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "moon_phase": [
        "Moon Phase",
        PERCENTAGE,
        "mdi:moon-waning-gibbous",
        None,
        None,
    ],
    "moon_next_new_moon": [
        "Moon Next New Moon",
        None,
        "mdi:moon-new",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "moon_next_full_moon": [
        "Moon Next Full Moon",
        None,
        "mdi:moon-full",
        SensorDeviceClass.TIMESTAMP,
        None,
    ],
    "moon_altitude": [
        "Moon Altitude",
        DEGREE,
        "mdi:moon-new",
        None,
        None,
    ],
    "moon_azimuth": [
        "Moon Azimuth",
        DEGREE,
        "mdi:moon-new",
        None,
        None,
    ],
    "night_duration_astronomical": [
        "Astronomical Night Duration",
        UnitOfTime.SECONDS,
        "mdi:timer-play-outline",
        SensorDeviceClass.DURATION,
        None,
    ],
    "deep_sky_darkness": [
        "Deep Sky Darkness",
        UnitOfTime.SECONDS,
        "mdi:timer-play",
        SensorDeviceClass.DURATION,
        None,
    ],
    "deepsky_forecast_today": [
        "Deepsky Forecast Today",
        PERCENTAGE,
        "mdi:calendar-star",
        None,
        None,
    ],
    "deepsky_forecast_today_plain": [
        "Deepsky Forecast Today Plain",
        None,
        "mdi:calendar-star",
        None,
        None,
    ],
    "deepsky_forecast_today_desc": [
        "Deepsky Forecast Today Description",
        None,
        "mdi:calendar-star",
        None,
        None,
    ],
    "deepsky_forecast_tomorrow": [
        "Deepsky Forecast Tomorrow",
        PERCENTAGE,
        "mdi:calendar-star",
        None,
        None,
    ],
    "deepsky_forecast_tomorrow_plain": [
        "Deepsky Forecast Tomorrow Plain",
        None,
        "mdi:calendar-star",
        None,
        None,
    ],
    "deepsky_forecast_tomorrow_desc": [
        "Deepsky Forecast Tomorrow Description",
        None,
        "mdi:calendar-star",
        None,
        None,
    ],
    UPTONIGHT: [
        "Uptonight",
        None,
        "mdi:creation-outline",
        None,
        None,
    ],
}


async def async_setup_entry(
    hass: HomeAssistant, entry: ConfigEntry, async_add_entities
) -> None:
    """Set up the AstroWeather sensor platform."""

    _LOGGER.info("Set up AstroWeather sensor platform")

    fcst_coordinator = hass.data[DOMAIN][entry.entry_id]["fcst_coordinator"]
    if not fcst_coordinator.data:
        return False

    coordinator = hass.data[DOMAIN][entry.entry_id]["coordinator"]
    if not coordinator.data:
        return False

    astroweather = hass.data[DOMAIN][entry.entry_id]["aw"]
    if not astroweather:
        return False

    sensors = []
    for sensor in SENSOR_TYPES:
        sensors.append(
            AstroWeatherSensor(coordinator, entry.data, sensor, fcst_coordinator, entry)
        )

    async_add_entities(sensors, True)

    return True


class AstroWeatherSensor(AstroWeatherEntity, SensorEntity):
    """Implementation of a AstroWeather Weatherflow Sensor."""

    def __init__(self, coordinator, entries, sensor, fcst_coordinator, entry):
        """Initialize the sensor."""
        super().__init__(coordinator, entries, sensor, fcst_coordinator, entry.entry_id)
        self._sensor = sensor
        self._device_class = SENSOR_TYPES[self._sensor][SENSOR_DEVICE_CLASS]
        self._state_class = SENSOR_TYPES[self._sensor][SENSOR_STATE_CLASS]
        self._icon = SENSOR_TYPES[self._sensor][SENSOR_ICON]
        self._state = None

        self._location_name = entries.get(CONF_LOCATION_NAME, DEFAULT_LOCATION_NAME)
        self._sensor_name = SENSOR_TYPES[self._sensor][SENSOR_NAME]
        self._attr_unique_id = f"{entry.entry_id}_{DOMAIN.lower()}_{self._sensor_name.lower().replace(' ', '_')}"
        self._name = f"{DOMAIN.capitalize()} {self._location_name} {self._sensor_name}"

    @property
    def name(self):
        """Return the name of the sensor."""

        return self._name

    @property
    def native_value(self):
        """Return the state of the sensor."""

        if (
            SENSOR_TYPES[self._sensor][SENSOR_DEVICE_CLASS]
            == SensorDeviceClass.TIMESTAMP
        ):
            return dt_util.parse_datetime(
                str(getattr(self.coordinator.data[SENSOR_NAME], self._sensor, None))
            )
        return getattr(self.coordinator.data[SENSOR_NAME], self._sensor, None)

    @property
    def native_unit_of_measurement(self):
        """Return the unit of measurement."""

        if (
            SENSOR_TYPES[self._sensor][SENSOR_DEVICE_CLASS]
            == SensorDeviceClass.TIMESTAMP
        ):
            return None
        else:
            return SENSOR_TYPES[self._sensor][SENSOR_UNIT]

    @property
    def icon(self):
        """Icon to use in the frontend."""

        return self._icon

    @property
    def device_class(self):
        """Return the device class of the sensor."""

        return self._device_class

    @property
    def state_class(self) -> str:
        """State class of sensor."""

        return self._state_class

    @property
    def extra_state_attributes(self) -> {}:
        """Extra state attributes for UpTonight."""

        if (
            self._sensor == UPTONIGHT
            and self.coordinator.data[SENSOR_NAME].uptonight is not None
        ):
            dso_list = []
            for dso in self.coordinator.data[SENSOR_NAME].uptonight_list:
                obj = {
                    "name": dso.target_name,
                    "type": dso.type,
                    "constellation": dso.constellation,
                    "foto": dso.foto,
                }
                dso_list.append(obj)
                # dso_list.insert(0, obj)
            return {"objects": dso_list}
        return None
