"""module to to create a group by selecting entities by domain, and other optional attributes"""

#########################################################################################
# Python script to create domain groups of specific device types
#
# DOMAIN - the domain type to search through to generate the group
# GROUP_NAME - the name of the group to create or recreate
# ICON - the mdi icon to assign to this group after creation
# FRIENDLY_NAME - the friendly name of the group
# FILTER_BY_DEVICE_CLASS - a boolean to indicate whether to filter by device class
#   if set to false, all entities in the domain will be added to the group
# INCLUDED_DEVICE_CLASSES - a list of device classes to include in the group
#   examples of device classes can be found here
#   binary_sensor - https://developers.home-assistant.io/docs/core/entity/binary-sensor
#   switch - https://developers.home-assistant.io/docs/core/entity/switch
# EXCLUDED_ENTITIES - a list of entity_id's to exclude from the group.
#   Be aware that hyphens are replaced by underscores in the entity_id's
#
# An example of an automation being used to create this group is
#
# - id: '0000000000000'
#   alias: on_start_create_group.all_door_class_binary_sensors
#   description: Uses python script create_entity_device_class_group to create an entity
#     group
#   trigger:
#   - platform: homeassistant
#     event: start
#   condition: []
#   action:
#   - service: python_script.create_entity_groups
#     data:
#       domain: binary_sensor
#       group_name: all_door_class_binary_sensors
#       icon: mdi:door
#       friendly_name: All binary_sensor door device class group
#       filter_by_device_class: true
#       included_device_classes:
#       - door
#       - window
#       - vibration
#       excluded_entity_groups:
#       - binary_sensor.excluded_binary_sensors_group
#       excluded_entities:
#       - binary_sensor.zigbee_door_sensor_bed_c_contact
#   mode: single
#########################################################################################
# from homeassistant.helpers import entity_registry as er

DOMAIN = str(data.get('domain', ''))
GROUP_NAME = str(data.get('group_name', ''))
ICON = str(data.get('icon', ''))
FRIENDLY_NAME = str(data.get('friendly_name', GROUP_NAME))
FILTER_BY_AREA = bool(data.get('filter_by_area', False))
GROUP_AREAS_BY_FLOOR = bool(data.get('group_areas_by_floor', False))
INCLUDED_AREAS = list(data.get('included_areas', []))
FILTER_BY_DEVICE_CLASS = bool(data.get('filter_by_device_class', False))
INCLUDED_DEVICE_CLASSES = list(data.get('included_device_classes', ['door']))
FILTER_BY_STATE_CLASS = bool(data.get('filter_by_state_class', False))
FILTERED_STATE_CLASS = str(data.get('filtered_state_class', ''))
FILTER_BY_UNIT_OF_MEASUREMENT = bool(data.get('filter_by_unit_of_measurement', False))
FILTERED_UNIT_OF_MEASUREMENT = str(data.get('filtered_unit_of_measurement', ''))
EXCLUDED_ENTITY_GROUPS = list(data.get('excluded_entity_groups', []))
EXCLUDED_ENTITIES = list(data.get('excluded_entities', []))

entity_list = []

try:
    if not isinstance(DOMAIN, str) or not DOMAIN or not GROUP_NAME:
        logger.error(f"Domain {DOMAIN} or group_name {GROUP_NAME} does not exist")
except LookupError:
    logger.error(logger, "Error - a problem occured looking up the domain")

# List of hard coded entity_id's to globally exclude from the groups.
# If a complete entity_id is given, this will remove just that entity
# if a partial match is given, any entity_id that contains that text will be excluded.
globally_excluded_matches = []

try:
    for group in EXCLUDED_ENTITY_GROUPS:
        logger.debug(f"iterating '{group}' at {time.time()}")
        if not group:
            logger.error(logger, f"Error - group {group} not found")
        else:
            group_entities = hass.states.get(group)
            if group_entities is None:
                logger.error(logger, f"Error - group {group} not found")
            else:
                for entity_id in group_entities.attributes.get("entity_id"):
                    logger.debug(f"iterating '{entity_id}' in group '{group}' when creating '{FRIENDLY_NAME}' at {time.time()}")
                    entity = hass.states.get(entity_id)
                    if entity is None:
                        logger.warning(logger, f"Warning - entity {entity_id} not found")
                    else:
                        globally_excluded_matches.append(entity_id)
                        logger.debug(f"'{entity_id}' added to 'globally_excluded_matches' at {time.time()}")
except KeyError:
    logger.error(logger, f"Error - a problem occured adding the members of {EXCLUDED_ENTITY_GROUPS} entities to the excluded matches list")

try:
    for entity_id in hass.states.entity_ids(DOMAIN):
        logger.debug(f"iterating '{entity_id}' in domain '{DOMAIN}' at {time.time()}")
        if entity_id == "":
            logger.error(logger, "Error - entity_id missing when looping through domain")
        else:
            if entity_id not in EXCLUDED_ENTITIES:
                entity = hass.states.get(entity_id)
                if entity is None:
                    logger.error(logger, "Error - entity object not found")
                else:
                    try:
                        if FILTER_BY_DEVICE_CLASS:
                            for attr in entity.attributes:
                                logger.debug(f"iterating '{attr}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
                                if attr is not None:
                                    if attr == "device_class":
                                        for device_class_option in INCLUDED_DEVICE_CLASSES:
                                            logger.debug(f"iterating '{device_class_option}' in device_class '{INCLUDED_DEVICE_CLASSES}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
                                            if entity.attributes.get(attr) == device_class_option:
                                                entity_list.append(entity_id)
                                                logger.debug(f"'{entity_id}' added to group '{FRIENDLY_NAME}' at {time.time()}")
                        else:
                            entity_list.append(entity_id)
                            logger.debug(f"'{entity_id}' added to group '{FRIENDLY_NAME}' at {time.time()}")
                    except KeyError:
                        logger.error(logger, "Error - a problem occured adding an entity to the entity list")

                    try:
                        if FILTER_BY_STATE_CLASS:
                            for attr in entity.attributes:
                                logger.debug(f"iterating '{attr}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
                                if attr is not None:
                                    if attr == "state_class":
                                        if entity.attributes.get(attr) != FILTERED_STATE_CLASS:
                                            if entity_id in entity_list:
                                                entity_list.remove(entity_id)
                                                logger.debug(f"'{entity_id}' removed from group '{FRIENDLY_NAME}' because the state class of the entity '{entity.attributes.get(attr)}' did not match the filtered state class '{FILTERED_STATE_CLASS}' at {time.time()}")
                    except KeyError:
                        logger.error(logger, "Error - a problem occured removing a filtered state_class entity from the entity list")

                    try:
                        if FILTER_BY_UNIT_OF_MEASUREMENT:
                            for attr in entity.attributes:
                                logger.debug(f"iterating '{attr}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
                                if attr is not None:
                                    if attr == "unit_of_measurement":
                                        if entity.attributes.get(attr) != FILTERED_UNIT_OF_MEASUREMENT:
                                            if entity_id in entity_list:
                                                entity_list.remove(entity_id)
                                                logger.debug(f"'{entity_id}' removed from group '{FRIENDLY_NAME}' because the state class of the entity '{entity.attributes.get(attr)}' did not match the filtered state class '{FILTERED_UNIT_OF_MEASUREMENT}' at {time.time()}")
                    except KeyError:
                        logger.error(logger, "Error - a problem occured removing a filtered unit_of_measurement entity from the entity list")

                    try:
                        if FILTER_BY_AREA:
                            area_entity_list = []
                            if GROUP_AREAS_BY_FLOOR:
                                AREA_LOOKUP_ENTITY = str("sensor.floor_grouped_areas_entity_attributes")
                            else:
                                AREA_LOOKUP_ENTITY = str("sensor.area_and_entities_attributes")

                            try:
                                for area in INCLUDED_AREAS:
                                    remove_entity = True
                                    logger.debug(f"Iterating '{area}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
                                    area_lookup_attribute = str(area.replace(" ", "_").replace(":", "").replace(",", "").lower()) + "_entities"
                                    logger.debug(f"Looking up entities from the list found at '{AREA_LOOKUP_ENTITY}.attributes.{area_lookup_attribute}' at {time.time()}")
                                    try:
                                        area_entity_list = list(hass.states.get(AREA_LOOKUP_ENTITY).attributes[area_lookup_attribute])
                                    except KeyError:
                                        logger.error(logger, "Error - a problem occured looking up the area entity list from the template sensor")

                                    try:
                                        for area_entity in area_entity_list:
                                            logger.debug(f"Iterating '{area_entity}' in entity_list '{AREA_LOOKUP_ENTITY}.attributes.{area_lookup_attribute}' when checking area '{area}' at {time.time()}")
                                            if area_entity is not None:
                                                if area_entity == entity_id:
                                                    remove_entity = False
                                                    logger.debug(f"The entity '{area_entity}' has been found in the list from '{AREA_LOOKUP_ENTITY}.attributes.{area_lookup_attribute}' at {time.time()}")
                                    except LookupError:
                                        logger.error(logger, "Error - a problem occured iterating through the looked up entity list")
                                    try:
                                        if remove_entity:
                                            if entity_id in entity_list:
                                                entity_list.remove(entity_id)
                                                logger.debug(f"'{entity_id}' removed from group '{FRIENDLY_NAME}' because it was not in the area '{area}' at {time.time()}")
                                    except KeyError:
                                        logger.error(logger, f"Error - a problem occured removing the entity '{entity_id}' from the entity_list")

                            except LookupError:
                                logger.error(logger, "Error - a problem occured iterating through the list of areas")
                    except LookupError:
                        logger.error(logger, "Error - a problem occured removing a filtered unit_of_measurement entity from the entity list")

except LookupError:
    logger.error(logger, "Error - a problem occured creating the entity list")

try:
    for excluded_matches in globally_excluded_matches:
        logger.debug(f"iterating '{excluded_matches}' in 'globally_excluded_matches' at {time.time()}")
        for match_entity in entity_list:
            logger.debug(f"iterating '{match_entity}' in 'entity_list' at {time.time()}")
            if match_entity.find(excluded_matches) != -1:
                entity_list.remove(match_entity)
                logger.debug(f"'{match_entity}' removed from group '{FRIENDLY_NAME}' as it matched '{excluded_matches}' at {time.time()}")

except KeyError:
    logger.error(logger, "Error - a problem occured when removing a matched item from the entity list")

try:
    service_data = {"object_id": GROUP_NAME, "name": FRIENDLY_NAME, "icon": ICON, "entities": entity_list, "all": False}
    logger.info(f"Calling the service 'set group' with the data '{service_data}' at {time.time()}")
    hass.services.call("group", "set", service_data, False)
except ServiceValidationError:
    logger.error(logger, "Error - a problem occured calling the hass set group service")
