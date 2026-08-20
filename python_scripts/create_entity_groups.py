"""module to to create a group by selecting entities by domain, and other optional attributes"""

#########################################################################################
# Python script to create domain groups of specific device types
#
# DOMAINS - the domain types to search through to generate the group
# GROUP_NAME - the name of the group to create or recreate
# ICON - the mdi icon to assign to this group after creation
# FRIENDLY_NAME - the friendly name of the group
# FILTER_BY_AREA - a boolean to indicate whether to filter by HA area
# GROUP_AREAS_BY_FLOOR - a boolean to indicate tp group by floor (a collection of areas)
# INCLUDED_AREAS - a list of areas to group by
# FILTER_BY_DEVICE_CLASS - a boolean to indicate whether to filter by device class
#   if set to false, all entities in the domain will be added to the group
# INCLUDED_DEVICE_CLASSES - a list of device classes to include in the group
#   examples of device classes can be found here
#   binary_sensor - https://developers.home-assistant.io/docs/core/entity/binary-sensor
#   switch - https://developers.home-assistant.io/docs/core/entity/switch
# FILTER_BY_STATE_CLASS - a boolean to indicate whether to filter by state class
#   if set to false, all entities in the domain will be added to the group
# FILTERED_STATE_CLASS - a list of state classes to include in the group
#   examples of device classes can be found here
#   https://developers.home-assistant.io/docs/core/entity/sensor/
# excluded_entities - a list of entity_id's to exclude from the group.
#   Be aware that hyphens are replaced by underscores in the entity_id's
#   This list is appended to when excluding by group or integration.
# EXCLUDED_ENTITY_GROUPS - groups of entities to exclude
# EXCLUDED_INTEGRATIONS - exclude all of the entities that belong to an integration
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
#       - group.globally_excluded_entities
#       excluded_entities:
#       - binary_sensor.zigbee_door_sensor_bed_c_contact
#       excluded_integrations
#       - browser_mod
#   mode: single
#########################################################################################
# from homeassistant.helpers import entity_registry as er

# import fnmatch
# import time
# import logging as logger

DOMAINS = list(data.get('domains', []))
GROUP_NAME = str(data.get('group_name', ''))
ICON = str(data.get('icon', ''))
FRIENDLY_NAME = str(data.get('friendly_name', GROUP_NAME))
FILTER_BY_AREA = bool(data.get('filter_by_area', False))
GROUP_AREAS_BY_FLOOR = bool(data.get('group_areas_by_floor', False))
INCLUDED_AREAS = list(data.get('included_areas', []))
FILTER_BY_DEVICE_CLASS = bool(data.get('filter_by_device_class', False))
INCLUDED_DEVICE_CLASSES = list(data.get('included_device_classes', []))
EXCLUDED_DEVICE_CLASSES = list(data.get('excluded_device_classes', []))
FILTER_BY_STATE_CLASS = bool(data.get('filter_by_state_class', False))
FILTERED_STATE_CLASS = str(data.get('filtered_state_class', ''))
FILTER_BY_UNIT_OF_MEASUREMENT = bool(data.get('filter_by_unit_of_measurement', False))
FILTERED_UNIT_OF_MEASUREMENT = str(data.get('filtered_unit_of_measurement', ''))
EXCLUDED_ENTITY_GROUPS = list(data.get('excluded_entity_groups', []))
EXCLUDED_INTEGRATIONS = list(data.get('excluded_integrations', []))
EXCLUDED_INTEGRATION_ENTITY_SOURCE = "sensor.integration_entity_list"
LOGGER_LEVEL = str(data.get('log_level', 'WARNING'))

excluded_entities = list(data.get('excluded_entities', []))
entity_list = []
try:
    if LOGGER_LEVEL != "WARNING":
        logger.setLevel(LOGGER_LEVEL)
        logger.debug(logger, "log level set to '{0}' when creating '{1}' at {2}".format(LOGGER_LEVEL, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
except ValueError:
    logger.error(logger, "An error occurred setting the log level to '{0}' when creating '{1}' at {2}".format(LOGGER_LEVEL, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))

if LOGGER_LEVEL != "WARNING":
    logger.setLevel(LOGGER_LEVEL)

try:
    for domain in DOMAINS:
        if not isinstance(domain, str) or not domain or not GROUP_NAME:
            logger.error(logger, "A1: Domain {0} or group_name {1} does not exist".format(DOMAINS, GROUP_NAME))
except LookupError:
    logger.error(logger, "A2: Error - a problem occurred looking up the domain")


try:
    for group in EXCLUDED_ENTITY_GROUPS:
        logger.debug(logger, "B1: iterating group '{0}' at {1}".format(str(group), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
        if not group:
            logger.error(logger, "B2: Error - group {0} not found".format(str(group)))
        else:
            group_entities = hass.states.get(group)
            if group_entities is None:
                logger.error(logger, "B3: Error - group {0} not found".format(str(group)))
            else:
                for entity_id in group_entities.attributes.get("entity_id"):
                    logger.debug(logger, "B4: iterating '{0}' in group '{1}' when creating '{2}' at {3}".format(str(entity_id), str(group), FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                    entity = hass.states.get(entity_id)
                    if entity is None:
                        logger_text = "B5: Warning - entity {0} not found"
                        logger.warning(logger, logger_text.format(str(entity_id)))
                    else:
                        excluded_entities.append(entity_id)
                        logger.debug(logger, "B6: '{0}' added to 'excluded_entities' at {1}".format(str(entity_id), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
except KeyError:
    logger.error(logger, "B7: Error - a problem occurred adding the members of {0} entities to the excluded matches list".format(EXCLUDED_ENTITY_GROUPS))

    
try:
    for integration in EXCLUDED_INTEGRATIONS:
        logger.debug(logger, "C1: iterating integration '{0}' at {1}".format(str(integration), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
        
        integration_entity_list = []
        try:
            integration_entity_list = list(hass.states.get(EXCLUDED_INTEGRATION_ENTITY_SOURCE).attributes[integration]) if len(list(hass.states.get(EXCLUDED_INTEGRATION_ENTITY_SOURCE).attributes[integration])) > 0 else []
        except KeyError:
            logger.error(logger, "C2: Error - a problem occurred looking up the integration entity list from the templated sensor '{0}'".format(EXCLUDED_INTEGRATION_ENTITY_SOURCE))
            
        try:
            for integration_entity in integration_entity_list:
                # logger.info(logger, "C3: Iterating '{}' in entity_list '{}.attributes.{}' when checking integration '{}' at {}".format(str(integration_entity), EXCLUDED_INTEGRATION_ENTITY_SOURCE, str(integration), str(integration), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                logger.warning(logger, "C3: Iterating '{0}' in entity_list '{1}.attributes.{2}' when checking integration '{2}' at {3}".format(str(integration_entity), EXCLUDED_INTEGRATION_ENTITY_SOURCE, str(integration), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))

                if integration_entity is None:
                    logger.error(logger, "C4: Error - entity {0} not found".format(str(integration_entity)))
                else:
                    excluded_entities.append(integration_entity)
                    logger.warning(logger, "C5: '{0}' added to 'excluded_entities' at {1}".format(str(integration_entity), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                
        except LookupError:
            logger.error(logger, "C6: Error - a problem occurred iterating through the looked up entity list")
        
except KeyError:
    logger.error(logger, "C7: Error - a problem occurred adding the members of {0} entities to the excluded matches list".format(EXCLUDED_ENTITY_GROUPS))


try:
    for domain in DOMAINS:
        logger.debug(logger, "D0: iterating domain '{0}' at {1}".format(str(domain), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
        try:
            for entity_id in sorted(hass.states.entity_ids(domain)):
                logger.debug(logger, "D1: iterating '{0}' in domain '{1}' at {2}".format(str(entity_id), domain, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                if entity_id == "":
                    logger.error(logger, "D2: Error - entity_id missing when looping through domain")
                else:
                    if entity_id not in excluded_entities:
                        entity = hass.states.get(entity_id)
                        if entity is None:
                            logger.error(logger, "D3: Error - entity object not found")
                        else:
                            try:
                                if len(INCLUDED_DEVICE_CLASSES) > 0:
                                    for attr in entity.attributes:
                                        logger.debug(logger, "E1: iterating '{0}' in entity '{1}' in domain '{2}' when creating '{3}' at {4}".format(str(attr), str(entity_id), domain, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                        if attr is not None:
                                            if attr == "device_class":
                                                for device_class_option in INCLUDED_DEVICE_CLASSES:
                                                    logger.debug(logger, "E2: iterating '{0}' in device_class '{1}' in entity '{2}' in domain '{3}' when creating '{4}' at {5}".format(str(device_class_option), INCLUDED_DEVICE_CLASSES, str(entity_id), DOMAINS, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                                    if entity.attributes.get(attr) == device_class_option:
                                                        entity_list.append(entity_id)
                                                        logger.debug(logger, "E3: '{0}' added to group '{1}' at {2}".format(str(entity_id), FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                else:
                                    entity_list.append(entity_id)
                                    logger.debug(logger, "E4: '{0}' added to group '{1}' at {2}".format(str(entity_id), FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                            except KeyError:
                                logger.error(logger, "E5: Error - a problem occurred adding an entity to the entity list")
                                
                            try:
                                if len(EXCLUDED_DEVICE_CLASSES) > 0:
                                    for attr in entity.attributes:
                                        logger.debug(logger, "E6: iterating '{0}' in entity '{1}' in domain '{2}' when creating '{3}' at {4}".format(str(attr), str(entity_id), domain, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                        if attr is not None:
                                            if attr == "device_class":
                                                for device_class_option in EXCLUDED_DEVICE_CLASSES:
                                                    logger.debug(logger, "E7: iterating '{0}' in device_class '{1}' in entity '{2}' in domain '{3}' when creating '{4}' at {5}".format(str(device_class_option), EXCLUDED_DEVICE_CLASSES, str(entity_id), DOMAINS, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                                    if entity.attributes.get(attr) == device_class_option:
                                                        entity_list.remove(entity_id)
                                                        logger.debug(logger, "E8: '{0}' added to group '{1}' at {2}".format(str(entity_id), FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                            except KeyError:
                                logger.error(logger, "E9: Error - a problem occurred adding an entity to the entity list")

                            try:
                                if FILTER_BY_STATE_CLASS:
                                    for attr in entity.attributes:
                                        logger.debug(logger, "F1: iterating '{0}' in entity '{1}' in domain '{2}' when creating '{3}' at {4}".format(str(attr), str(entity_id), domain, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                        if attr is not None:
                                            if attr == "state_class":
                                                if entity.attributes.get(attr) != FILTERED_STATE_CLASS:
                                                    if entity_id in entity_list:
                                                        entity_list.remove(entity_id)
                                                        logger.debug(logger, "F2: '{0}' removed from group '{1}' because the state class of the entity '{2}' did not match the filtered state class '{3}' at {4}".format(str(entity_id), FRIENDLY_NAME, str(entity.attributes.get(attr)), FILTERED_STATE_CLASS, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                                    else:
                                                        logger.debug(logger, "F3: '{0}' does not exist in the group '{1}', so cannot be removed. This may indicate a problem.".format(str(entity_id), FRIENDLY_NAME))
                            except KeyError:
                                logger.error(logger, "F4: Error - a problem occurred removing a filtered state_class entity from the entity list")


                            try:
                                if FILTER_BY_UNIT_OF_MEASUREMENT:
                                    for attr in entity.attributes:
                                        logger.debug(logger, "G1: iterating '{0}' in entity '{1}' in domain '{2}' when creating '{3}' at {4}".format(str(attr), str(entity_id), domain, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                        if attr is not None:
                                            if attr == "unit_of_measurement":
                                                if entity.attributes.get(attr) != FILTERED_UNIT_OF_MEASUREMENT:
                                                    if entity_id in entity_list:
                                                        entity_list.remove(entity_id)
                                                        logger.debug(logger, "G2: '{0}' removed from group '{1}' because the state class of the entity '{2}' did not match the filtered state class '{3}' at {4}".format(str(entity_id), FRIENDLY_NAME, str(entity.attributes.get(attr)), FILTERED_UNIT_OF_MEASUREMENT, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                                    else:
                                                        logger.debug(logger, "G3: '{0}' does not exist in the group '{1}', so cannot be removed. This may indicate a problem.".format(str(entity_id), FRIENDLY_NAME))
                            except KeyError:
                                logger.error(logger, "G4: Error - a problem occurred removing a filtered unit_of_measurement entity from the entity list")


                            try:
                                if FILTER_BY_AREA:
                                    area_entity_list = []
                                    if GROUP_AREAS_BY_FLOOR:
                                        AREA_LOOKUP_ENTITY = str("sensor.floor_entity_attributes")
                                    else:
                                        AREA_LOOKUP_ENTITY = str("sensor.area_entity_attributes")


                                    try:
                                        for area in INCLUDED_AREAS:
                                            remove_entity = True
                                            logger.debug(logger, "H1: Iterating '{0}' in entity '{1}' in domain '{2}' when creating '{3}' at {4}".format(str(area), str(entity_id), domain, FRIENDLY_NAME, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                            area_lookup_attribute = str(area.replace(" ", "_").replace(":", "").replace(",", "").lower()) + "_entities"
                                            logger.debug(logger, "H2: Looking up entities from the list found at '{0}.attributes.{1}' at {2}".format(AREA_LOOKUP_ENTITY, str(area_lookup_attribute), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                            
                                            
                                            try:
                                                if area_lookup_attribute:
                                                    area_entity_list = list(hass.states.get(AREA_LOOKUP_ENTITY).attributes[area_lookup_attribute])
                                                    logger.debug(logger, "H3: Creating 'area_entity_list' using 'list(hass.states.get({0}).attributes[{1}])' at {2}".format(AREA_LOOKUP_ENTITY, str(area_lookup_attribute), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                            except KeyError:
                                                logger.error(logger, "H4: Error - a problem occurred looking up the area entity list from the templated sensor '{0}'".format(AREA_LOOKUP_ENTITY))


                                            try:
                                                for area_entity in area_entity_list:
                                                    logger.debug(logger, "H5: Iterating '{0}' in entity_list '{1}.attributes.{2}' when checking area '{3}' at {4}".format(str(area_entity), AREA_LOOKUP_ENTITY, str(area_lookup_attribute), str(area), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                                    if area_entity is not None:
                                                        if area_entity == entity_id:
                                                            remove_entity = False
                                                            logger.debug(logger, "H6: The entity '{0}' has been found in the list from '{1}.attributes.{2}' at {3}".format(str(area_entity), AREA_LOOKUP_ENTITY, str(area_lookup_attribute), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                            except LookupError:
                                                logger.error(logger, "H7: Error - a problem occurred iterating through the looked up entity list")
                                                
                                                
                                            try:
                                                if remove_entity:
                                                    if entity_id in entity_list:
                                                        entity_list.remove(entity_id)
                                                        logger.debug(logger, "H8: '{0}' removed from group '{1}' because it was not in the area '{2}' at {3}".format(str(entity_id), FRIENDLY_NAME, str(area), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
                                                    else:
                                                        logger.info(logger, "H9: '{0}' does not exist in the group '{1}', so cannot be removed. This may indicate a problem.".format(str(entity_id), FRIENDLY_NAME))
                                            except KeyError:
                                                logger.error(logger, "H10: Error - a problem occurred removing the entity '{0}' from the entity_list".format(str(entity_id)))

                                    except LookupError:
                                        logger.error(logger, "H11: Error - a problem occurred iterating through the list of areas")
                            except LookupError:
                                logger.error(logger, "H12: Error - a problem occurred removing a filtered unit_of_measurement entity from the entity list")

        except LookupError:
            logger.error(logger, "D4: Error - a problem occurred creating the entity list")
    
except LookupError:
    logger.error(logger, "D4: Error - a problem occurred creating the entity list")


try:
    service_data = {"object_id": GROUP_NAME, "name": FRIENDLY_NAME, "icon": ICON, "entities": entity_list, "all": False}
    # service_data_string = service_data)
    # logger_text = "I1: Calling the service 'set group' with the data '{}' at {}".format(service_data, str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time()))))
    logger.warning(logger, "I1: Calling the service 'set group' with the data '{0}' at {1}".format(str(service_data), str(time.strftime('%a %d %b %Y, %H:%M:%S', time.localtime(time.time())))))
    hass.services.call("group", "set", service_data, False)
except ServiceValidationError:
    logger_text = "I2: Error - a problem occurred calling the hass set group service"
    logger.error(logger, logger_text)
