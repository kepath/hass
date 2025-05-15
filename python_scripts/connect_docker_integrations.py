"""module to to create a group by selecting entities by domain, and other optional attributes"""

#########################################################################################
# Python script to create domain groups of specific device types
#
# DOMAIN - the domain type to search through to generate the group
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
# # from homeassistant.helpers import entity_registry as er

# # import fnmatch




# DOMAIN = str(data.get('domain', ''))
# GROUP_NAME = str(data.get('group_name', ''))
# ICON = str(data.get('icon', ''))
# FRIENDLY_NAME = str(data.get('friendly_name', GROUP_NAME))
# FILTER_BY_AREA = bool(data.get('filter_by_area', False))
# GROUP_AREAS_BY_FLOOR = bool(data.get('group_areas_by_floor', False))
# INCLUDED_AREAS = list(data.get('included_areas', []))
# FILTER_BY_DEVICE_CLASS = bool(data.get('filter_by_device_class', False))
# INCLUDED_DEVICE_CLASSES = list(data.get('included_device_classes', ['door']))
# FILTER_BY_STATE_CLASS = bool(data.get('filter_by_state_class', False))
# FILTERED_STATE_CLASS = str(data.get('filtered_state_class', ''))
# FILTER_BY_UNIT_OF_MEASUREMENT = bool(data.get('filter_by_unit_of_measurement', False))
# FILTERED_UNIT_OF_MEASUREMENT = str(data.get('filtered_unit_of_measurement', ''))
# EXCLUDED_ENTITY_GROUPS = list(data.get('excluded_entity_groups', []))
# EXCLUDED_INTEGRATIONS = list(data.get('excluded_integrations', []))
# EXCLUDED_INTEGRATION_ENTITY_SOURCE = "sensor.integration_entity_list"

# excluded_entities = list(data.get('excluded_entities', []))
# entity_list = []


# try:
#     if not isinstance(DOMAIN, str) or not DOMAIN or not GROUP_NAME:
#         logger.error(logger, f"A1: Domain {DOMAIN} or group_name {GROUP_NAME} does not exist")
# except LookupError:
#     logger.error(logger, "A2: Error - a problem occured looking up the domain")


# try:
#     for group in EXCLUDED_ENTITY_GROUPS:
#         logger.debug(logger, f"B1: iterating group '{group}' at {time.time()}")
#         if not group:
#             logger.error(logger, f"B2: Error - group {group} not found")
#         else:
#             group_entities = hass.states.get(group)
#             if group_entities is None:
#                 logger.error(logger, f"B3: Error - group {group} not found")
#             else:
#                 for entity_id in group_entities.attributes.get("entity_id"):
#                     logger.debug(logger, f"B4: iterating '{entity_id}' in group '{group}' when creating '{FRIENDLY_NAME}' at {time.time()}")
#                     entity = hass.states.get(entity_id)
#                     if entity is None:
#                         logger_text = "B5: Warning - entity {} not found"
#                         logger.warning(logger, logger_text.format(entity_id))
#                     else:
#                         excluded_entities.append(entity_id)
#                         logger.debug(logger, f"B6: '{entity_id}' added to 'excluded_entities' at {time.time()}")
# except KeyError:
#     logger.error(logger, f"B7: Error - a problem occured adding the members of {EXCLUDED_ENTITY_GROUPS} entities to the excluded matches list")
   
    
# try:
#     for integration in EXCLUDED_INTEGRATIONS:
#         logger.debug(logger, f"C1: iterating integration '{integration}' at {time.time()}")
        
        
#         try:
#             integration_entity_list = list(hass.states.get(EXCLUDED_INTEGRATION_ENTITY_SOURCE).attributes[integration])
#         except KeyError:
#             logger.error(logger, f"C2: Error - a problem occured looking up the integration entity list from the templated sensor '{EXCLUDED_INTEGRATION_ENTITY_SOURCE}'")
            
            
#         try:
#             for integration_entity in integration_entity_list:
#                 logger.debug(logger, f"C3: Iterating '{integration_entity}' in entity_list '{EXCLUDED_INTEGRATION_ENTITY_SOURCE}.attributes.{integration}' when checking integration '{integration}' at {time.time()}")
                
#                 if integration_entity is None:
#                     logger.error(logger, f"C4: Error - entity {integration_entity} not found")
#                 else:
#                     excluded_entities.append(integration_entity)
#                     logger.debug(logger, f"C5: '{integration_entity}' added to 'excluded_entities' at {time.time()}")
                
#         except LookupError:
#             logger.error(logger, "C6: Error - a problem occured iterating through the looked up entity list")
        
# except KeyError:
#     logger.error(logger, f"C7: Error - a problem occured adding the members of {EXCLUDED_ENTITY_GROUPS} entities to the excluded matches list")


# try:
#     for entity_id in sorted(hass.states.entity_ids(DOMAIN)):
#         logger.debug(logger, f"D1: iterating '{entity_id}' in domain '{DOMAIN}' at {time.time()}")
#         if entity_id == "":
#             logger.error(logger, "D2: Error - entity_id missing when looping through domain")
#         else:
#             if entity_id not in excluded_entities:
#                 entity = hass.states.get(entity_id)
#                 if entity is None:
#                     logger.error(logger, "D3: Error - entity object not found")
#                 else:
                    
                    
#                     try:
#                         if FILTER_BY_DEVICE_CLASS:
#                             for attr in entity.attributes:
#                                 logger.debug(logger, f"E1: iterating '{attr}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
#                                 if attr is not None:
#                                     if attr == "device_class":
#                                         for device_class_option in INCLUDED_DEVICE_CLASSES:
#                                             logger.debug(logger, f"E2: iterating '{device_class_option}' in device_class '{INCLUDED_DEVICE_CLASSES}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
#                                             if entity.attributes.get(attr) == device_class_option:
#                                                 entity_list.append(entity_id)
#                                                 logger.debug(logger, f"E3: '{entity_id}' added to group '{FRIENDLY_NAME}' at {time.time()}")
#                         else:
#                             entity_list.append(entity_id)
#                             logger.debug(logger, f"E4: '{entity_id}' added to group '{FRIENDLY_NAME}' at {time.time()}")
#                     except KeyError:
#                         logger.error(logger, "E5: Error - a problem occured adding an entity to the entity list")


#                     try:
#                         if FILTER_BY_STATE_CLASS:
#                             for attr in entity.attributes:
#                                 logger.debug(logger, f"F1: iterating '{attr}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
#                                 if attr is not None:
#                                     if attr == "state_class":
#                                         if entity.attributes.get(attr) != FILTERED_STATE_CLASS:
#                                             if entity_id in entity_list:
#                                                 entity_list.remove(entity_id)
#                                                 logger.debug(logger, f"F2: '{entity_id}' removed from group '{FRIENDLY_NAME}' because the state class of the entity '{entity.attributes.get(attr)}' did not match the filtered state class '{FILTERED_STATE_CLASS}' at {time.time()}")
#                                             else:
#                                                 logger.debug(logger, f"F3: '{entity_id}' does not exist in the group '{FRIENDLY_NAME}', so cannot be removed. This may indicate a problem.")
#                     except KeyError:
#                         logger.error(logger, "F4: Error - a problem occured removing a filtered state_class entity from the entity list")


#                     try:
#                         if FILTER_BY_UNIT_OF_MEASUREMENT:
#                             for attr in entity.attributes:
#                                 logger.debug(logger, f"G1: iterating '{attr}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
#                                 if attr is not None:
#                                     if attr == "unit_of_measurement":
#                                         if entity.attributes.get(attr) != FILTERED_UNIT_OF_MEASUREMENT:
#                                             if entity_id in entity_list:
#                                                 entity_list.remove(entity_id)
#                                                 logger.debug(logger, f"G2: '{entity_id}' removed from group '{FRIENDLY_NAME}' because the state class of the entity '{entity.attributes.get(attr)}' did not match the filtered state class '{FILTERED_UNIT_OF_MEASUREMENT}' at {time.time()}")
#                                             else:
#                                                 logger.debug(logger, f"G3: '{entity_id}' does not exist in the group '{FRIENDLY_NAME}', so cannot be removed. This may indicate a problem.")
#                     except KeyError:
#                         logger.error(logger, "G4: Error - a problem occured removing a filtered unit_of_measurement entity from the entity list")


#                     try:
#                         if FILTER_BY_AREA:
#                             area_entity_list = []
#                             if GROUP_AREAS_BY_FLOOR:
#                                 AREA_LOOKUP_ENTITY = str("sensor.floor_entity_attributes")
#                             else:
#                                 AREA_LOOKUP_ENTITY = str("sensor.area_entity_attributes")


#                             try:
#                                 for area in INCLUDED_AREAS:
#                                     remove_entity = True
#                                     logger.debug(logger, f"H1: Iterating '{area}' in entity '{entity_id}' in domain '{DOMAIN}' when creating '{FRIENDLY_NAME}' at {time.time()}")
#                                     area_lookup_attribute = str(area.replace(" ", "_").replace(":", "").replace(",", "").lower()) + "_entities"
#                                     logger.debug(logger, f"H2: Looking up entities from the list found at '{AREA_LOOKUP_ENTITY}.attributes.{area_lookup_attribute}' at {time.time()}")
                                    
                                    
#                                     try:
#                                         if area_lookup_attribute:
#                                             area_entity_list = list(hass.states.get(AREA_LOOKUP_ENTITY).attributes[area_lookup_attribute])
#                                     except KeyError:
#                                         logger.error(logger, f"H3: Error - a problem occured looking up the area entity list from the templated sensor '{AREA_LOOKUP_ENTITY}'")


#                                     try:
#                                         for area_entity in area_entity_list:
#                                             logger.debug(logger, f"H4: Iterating '{area_entity}' in entity_list '{AREA_LOOKUP_ENTITY}.attributes.{area_lookup_attribute}' when checking area '{area}' at {time.time()}")
#                                             if area_entity is not None:
#                                                 if area_entity == entity_id:
#                                                     remove_entity = False
#                                                     logger.debug(logger, f"H5: The entity '{area_entity}' has been found in the list from '{AREA_LOOKUP_ENTITY}.attributes.{area_lookup_attribute}' at {time.time()}")
#                                     except LookupError:
#                                         logger.error(logger, "H6: Error - a problem occured iterating through the looked up entity list")
                                        
                                        
#                                     try:
#                                         if remove_entity:
#                                             if entity_id in entity_list:
#                                                 entity_list.remove(entity_id)
#                                                 logger.debug(logger, f"H7: '{entity_id}' removed from group '{FRIENDLY_NAME}' because it was not in the area '{area}' at {time.time()}")
#                                             else:
#                                                 logger.debug(logger, f"H8: '{entity_id}' does not exist in the group '{FRIENDLY_NAME}', so cannot be removed. This may indicate a problem.")
#                                     except KeyError:
#                                         logger.error(logger, f"H9: Error - a problem occured removing the entity '{entity_id}' from the entity_list")

#                             except LookupError:
#                                 logger.error(logger, "H10: Error - a problem occured iterating through the list of areas")
#                     except LookupError:
#                         logger.error(logger, "H11: Error - a problem occured removing a filtered unit_of_measurement entity from the entity list")

# except LookupError:
#     logger.error(logger, "D4: Error - a problem occured creating the entity list")


# try:
#     service_data = {"object_id": GROUP_NAME, "name": FRIENDLY_NAME, "icon": ICON, "entities": entity_list, "all": False}
#     # service_data_string = service_data)
#     logger_text = "I1: Calling the service 'set group' with the data '{}' at {}"
#     logger.debug(logger, logger_text.format(service_data, time.time()))
#     hass.services.call("group", "set", service_data, False)
# except ServiceValidationError:
#     logger_text = "I2: Error - a problem occured calling the hass set group service"
#     logger.error(logger, logger_text)
