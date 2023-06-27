"""Platform for historical rain factor Sensor integration."""
from __future__ import annotations

from .weatherhistory import Weather
import logging
from datetime import  timedelta
import jinja2
from homeassistant.core import HomeAssistant, callback
from homeassistant.components.sensor import (
    SensorEntity,
    SensorStateClass,
    SensorDeviceClass
)
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.config_entries import ConfigEntry
from homeassistant.helpers.update_coordinator import (
    CoordinatorEntity,
    DataUpdateCoordinator,
)
from homeassistant.helpers import (
    entity_platform,
)
from homeassistant.const import (
    CONF_NAME,
    CONF_RESOURCES,

    )
from .const import (
    CONF_FORMULA,
    CONF_ATTRIBUTES,
    CONF_INTIAL_DAYS,
    CONF_STATECLASS,
    CONF_SENSORCLASS,
    CONF_UID,
    ATTRIBUTION,
    DOMAIN
    )

SCAN_INTERVAL = timedelta(minutes=10)

_LOGGER = logging.getLogger(__name__)

async def _async_create_entities(hass:HomeAssistant, config, weather):
    """Create the Template switches."""
    sensors = []
    coordinator = WeatherCoordinator(hass, weather)
    #append multiple sensors using the single weather class
    for resource in config[CONF_RESOURCES]:
        sensors.append(
            WeatherHistory(
                hass,
                config,
                resource,
                weather,
                coordinator
            )
        )
    return sensors

async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Initialize config entry. form config flow"""
    if config_entry.options != {}:
        config = config_entry.options
    else:
        config = config_entry.data
    weather = Weather(hass,config)
    #initailise the weather data
    weather.set_processing_type ('initial')
    await weather.async_update()
    async_add_entities(await _async_create_entities(hass, config, weather))

    platform = entity_platform.async_get_current_platform()
    platform.async_register_entity_service(
        "api_call",
        {

        },
        "api_call",
    )



class WeatherCoordinator(DataUpdateCoordinator):
    """Weather API data coordinator
       refresh the data independantly of the sensor"""

    def __init__(self, hass: HomeAssistant, weather) -> None:
        """Initialize my coordinator."""
        super().__init__(
            hass,
            _LOGGER,
            name=DOMAIN,
            update_interval=SCAN_INTERVAL,
        )

        self._weather = weather

    async def _async_update_data(self):
        """Fetch data from API endpoint"""
        #process n records every cycle
        await self._weather.async_update()
        if self._weather.remaining_backlog() > 0:
            self._weather.set_processing_type ('backload')
            await self._weather.async_update()

class WeatherHistory(CoordinatorEntity,SensorEntity):
    ''' Rain factor class defn'''
    _attr_has_entity_name = True
    _attr_should_poll = False
    _attr_attribution = ATTRIBUTION

    def __init__(
        self,
        hass: HomeAssistant,
        config,
        resource,
        weather: Weather,
        coordinator: CoordinatorEntity
    ) -> None:
        #subscribe to the API data coordinator
        super().__init__(coordinator)

        self._hass               = hass
        self._state              = 1
        self._weather            = weather
        self._extra_attributes   = None
        self._name               = resource[CONF_NAME]
        self._formula            = resource[CONF_FORMULA]
        self._attributes         = resource.get(CONF_ATTRIBUTES)
        self._initdays           = config.get(CONF_INTIAL_DAYS)
        self._sensor_class       = resource.get(CONF_SENSORCLASS,None)
        self._state_class        = resource.get(CONF_STATECLASS,None)
        self._uuid               = resource.get(CONF_UID)

    @callback
    def _handle_coordinator_update(self) -> None:
        """Handle updated data from the coordinator."""
        self._weather.set_processing_type ('general')
        self.determine_state()
        self.async_write_ha_state()

    async def async_added_to_hass(self):
        self._hass.async_create_task(self.async_update())
        await super().async_added_to_hass()

    async def api_call(self):
        await self._weather.show_call_data()

    async def async_update(self):
        ''' update the sensor'''
        self.determine_state()
        self.async_write_ha_state()

    @property
    def name(self):
        """Return the name of the sensor."""
        return self._name

    @property
    def unique_id(self):
        """Return a unique_id for this entity."""
        return self._uuid

    @property
    def state_class(self) -> SensorStateClass:
        """handle string instances"""
        match self._state_class:
            case 'measurement':
                return SensorStateClass.MEASUREMENT

    @property
    def native_unit_of_measurement(self):
        match self._sensor_class:
            case 'humidity':
                return '%'
            case 'precipitation':
                return 'mm'
            case 'precipitation_intensity':
                return 'mm/h'
            case 'temperature':
                return  '°C'
            case 'pressure':
                return  'hPa'

    @property
    def device_class(self) -> SensorDeviceClass:
        """handle string instances"""
        match self._sensor_class:
            case 'humidity':
                return SensorDeviceClass.HUMIDITY
            case 'precipitation':
                return SensorDeviceClass.PRECIPITATION
            case 'precipitation_intensity':
                return SensorDeviceClass.PRECIPITATION_INTENSITY
            case 'temperature':
                return SensorDeviceClass.TEMPERATURE
            case 'pressure':
                return SensorDeviceClass.PRESSURE

    @property
    def native_value(self):
        """Return the state."""
        return self._state

    @property
    def extra_state_attributes(self):
        """Return the state attributes."""
        return self._extra_attributes

    def determine_state(self):
        """Determine the sensor state"""
        try:
            self._state = float(self._evaluate_custom_formula(self._formula ,  self._update_vars(self._weather)))
        except ValueError:
            self._state = self._evaluate_custom_formula(self._formula ,  self._update_vars(self._weather))
        #return the attributes if requested
        if self._attributes is not None:
            self._extra_attributes = self._evaluate_custom_attr(self._attributes, self._update_vars(self._weather))

    def _evaluate_custom_formula(self, formula: str, wvars: dict):
        """evaluate the formula/template"""
        environment = jinja2.Environment()
        template = environment.from_string(formula)
        #process the template and handle errors
        try:
            return template.render(wvars)
        except jinja2.UndefinedError as err:
            _LOGGER.warning("Variable not defined in custom formula: %s \n %s", formula, err)
            return 0
        except jinja2.TemplateSyntaxError as err:
            _LOGGER.warning("Syntax error could not evaluate custom formula: %s \n %s", formula, err)
            return 0

    def _evaluate_custom_attr(self, attributes: list, wvars: dict):
        """take the list of vars and build the attrs dictionaty"""
        attrs = {}
        attrs_list = attributes.replace(" ","").replace("'","").strip("[]'").split(",")
        for item in attrs_list:
            if item in wvars:
                attrs.update({item:wvars[item]})
        return attrs

    def _update_vars(self, weather:Weather):
        wvars = {}
        #default to initial days variable
        #need to define 'dummy' versions in the config flow as well
        wvars["cumulative_rain"]    = weather.cumulative_rain()
        wvars["cumulative_snow"]    = weather.cumulative_snow()
        for i in range(int(max(weather.num_days(),self._initdays))):
            wvars[f"day{i}rain"]        = weather.processed_value(i,'rain')
            wvars[f"day{i}snow"]        = weather.processed_value(i,'snow')
            wvars[f"day{i}max"]         = weather.processed_value(i,'max_temp')
            wvars[f"day{i}min"]         = weather.processed_value(i,'min_temp')
        #forecast provides 7 days of data
        for i in range(0,6):
            wvars[f"forecast{i}pop"]      = weather.processed_value(f'f{i}','pop')
            wvars[f"forecast{i}rain"]     = weather.processed_value(f'f{i}','rain')
            wvars[f"forecast{i}snow"]     = weather.processed_value(f'f{i}','snow')
            wvars[f"forecast{i}humidity"] = weather.processed_value(f'f{i}','humidity')
            wvars[f"forecast{i}max"]      = weather.processed_value(f'f{i}','max_temp')
            wvars[f"forecast{i}min"]      = weather.processed_value(f'f{i}','min_temp')
        #current observations
        wvars["current_rain"]        = weather.processed_value('current', 'rain')
        wvars["current_snow"]        = weather.processed_value('current', 'snow')
        wvars["current_humidity"]    = weather.processed_value('current', 'humidity')
        wvars["current_temp"]        = weather.processed_value('current', 'temp')
        wvars["current_pressure"]    = weather.processed_value('current', 'pressure')
        #special values
        wvars["remaining_backlog"]   = weather.remaining_backlog()
        wvars["daily_count"]         = weather.daily_count()

        return wvars
