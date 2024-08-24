#########################################################################################
# Python script to create domain groups of specific device types
#
# domain - the domain type to search through to generate the group
# group_name - the name of the group to create or recreate
# icon - the mdi icon to assign to this group after creation
# friendly_name - the friendly name of the group
# filter_by_device_class - a boolean to indicate whether to filter by device class
#   if set to false, all entities in the domain will be added to the group
# included_device_classes - a list of device classes to include in the group
#   examples of device classes can be found here
#   binary_sensor - https://developers.home-assistant.io/docs/core/entity/binary-sensor
#   switch - https://developers.home-assistant.io/docs/core/entity/switch
# excluded_integrations - a list of integrations to exclude from the group
# excluded_entities - a list of entity_id's to exclude from the group.
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
#   - service: python_script.create_entity_device_class_group
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

domain = data.get('domain', '')
group_name = data.get('group_name', '')
icon = data.get('icon', '')
friendly_name = data.get('friendly_name', group_name)
filter_by_area = data.get('filter_by_area', False)
group_areas_by_floor = data.get('group_areas_by_floor', False)
included_areas = data.get('included_areas', [])
filter_by_device_class = data.get('filter_by_device_class', False)
included_device_classes = data.get('included_device_classes', ['door'])
filter_by_state_class = data.get('filter_by_state_class', False)
filtered_state_class = data.get('filtered_state_class', '')
filter_by_unit_of_measurement = data.get('filter_by_unit_of_measurement', False)
filtered_unit_of_measurement = data.get('filtered_unit_of_measurement', '')
excluded_entity_groups = data.get('excluded_entity_groups', [])
excluded_entities = data.get('excluded_entities', [])

# integration_exclusion_template_sensor = "sensor.integration_entity_attributes"
entity_list = []

try:
    if not isinstance(domain, str) or not domain or not group_name:
        logger.error(f"Domain {domain} or group_name {group_name} does not exist")
except:
    logger.error(logger, "Error - a problem occured looking up the domain")

# List of hard coded entity_id's to globally exclude from the groups.
# If a complete entity_id is given, this will remove just that entity
# if a partial match is given, any entity_id that contains that text will be excluded.
globally_excluded_matches = []

try:
    for group in excluded_entity_groups:
        logger.debug(f"iterating '{group}' at {time.time()}")
        if not group:
            logger.error(logger, f"Error - group {group} not found")
        else:
            group_entities = hass.states.get(group)
            if group_entities is None:
                logger.error(logger, f"Error - group {group} not found")
            else:
                for entity_id in group_entities.attributes.get("entity_id"):
                    logger.debug(f"iterating '{entity_id}' in group '{group}' when creating '{friendly_name}' at {time.time()}")
                    entity = hass.states.get(entity_id)
                    if entity is None:
                        logger.warning(logger, f"Warning - entity {entity_id} not found")
                    else:
                        globally_excluded_matches.append(entity_id)
                        logger.debug(f"'{entity_id}' added to 'globally_excluded_matches' at {time.time()}")
except:
    logger.error(logger, f"Error - a problem occured adding the members of {excluded_entity_groups} entities to the excluded matches list")

try:
    for entity_id in hass.states.entity_ids(domain):
        logger.debug(f"iterating '{entity_id}' in domain '{domain}' at {time.time()}")
        if entity_id == "":
            logger.error(logger, f"Error - entity_id missing when looping through domain")
        else:
            if entity_id not in excluded_entities:
                entity = hass.states.get(entity_id)
                if entity is None:
                    logger.error(logger, f"Error - entity object not found")
                else:
                    try:
                        if filter_by_device_class:
                            for attr in entity.attributes:
                                logger.debug(f"iterating '{attr}' in entity '{entity_id}' in domain '{domain}' when creating '{friendly_name}' at {time.time()}")
                                if attr is not None:
                                    if attr == "device_class":
                                        for device_class_option in included_device_classes:
                                            logger.debug(f"iterating '{device_class_option}' in device_class '{included_device_classes}' in entity '{entity_id}' in domain '{domain}' when creating '{friendly_name}' at {time.time()}")
                                            if entity.attributes.get(attr) == device_class_option:
                                                entity_list.append(entity_id)
                                                logger.debug(f"'{entity_id}' added to group '{friendly_name}' at {time.time()}")
                        else:
                            entity_list.append(entity_id)
                            logger.debug(f"'{entity_id}' added to group '{friendly_name}' at {time.time()}")
                    except:
                        logger.error(logger, f"Error - a problem occured adding an entity to the entity list")

                    try:
                        if filter_by_state_class:
                            for attr in entity.attributes:
                                logger.debug(f"iterating '{attr}' in entity '{entity_id}' in domain '{domain}' when creating '{friendly_name}' at {time.time()}")
                                if attr is not None:
                                    if attr == "state_class":
                                        if entity.attributes.get(attr) != filtered_state_class:
                                            entity_list.remove(entity_id)
                                            logger.debug(f"'{entity_id}' removed from group '{friendly_name}' because the state class of the entity '{entity.attributes.get(attr)}' did not match the filtered state class '{filtered_state_class}' at {time.time()}")
                    except:
                        logger.error(logger, f"Error - a problem occured removing a filtered state_class entity from the entity list")

                    try:
                        if filter_by_unit_of_measurement:
                            for attr in entity.attributes:
                                logger.debug(f"iterating '{attr}' in entity '{entity_id}' in domain '{domain}' when creating '{friendly_name}' at {time.time()}")
                                if attr is not None:
                                    if attr == "unit_of_measurement":
                                        if entity.attributes.get(attr) != filtered_unit_of_measurement:
                                            entity_list.remove(entity_id)
                                            logger.debug(f"'{entity_id}' removed from group '{friendly_name}' because the state class of the entity '{entity.attributes.get(attr)}' did not match the filtered state class '{filtered_unit_of_measurement}' at {time.time()}")
                    except:
                        logger.error(logger, f"Error - a problem occured removing a filtered unit_of_measurement entity from the entity list")

                    try:
                        if filter_by_area:
                            area_entity_list = []
                            if group_areas_by_floor:
                                area_lookup_entity = "sensor.floor_grouped_areas_entity_attributes"
                            else:
                                area_lookup_entity = "sensor.area_and_entities_attributes"

                            try:
                                for area in included_areas:
                                    remove_entity = True
                                    logger.debug(f"Iterating '{area}' in entity '{entity_id}' in domain '{domain}' when creating '{friendly_name}' at {time.time()}")
                                    area_lookup_attribute = str(area.replace(" ","_").replace(":","").replace(",","").lower()) + "_entities"
                                    logger.debug(f"Looking up entities from the list found at '{area_lookup_entity}.attributes.{area_lookup_attribute}' at {time.time()}")
                                    try:
                                        area_entity_list = list(hass.states.get(area_lookup_entity).attributes[area_lookup_attribute])
                                    except:
                                        logger.error(logger, f"Error - a problem occured looking up the area entity list from the template sensor")

                                    try:
                                        for area_entity in area_entity_list:
                                            logger.debug(f"Iterating '{area_entity}' in entity_list '{area_lookup_entity}.attributes.{area_lookup_attribute}' when checking area '{area}' at {time.time()}")
                                            if area_entity is not None:
                                                if area_entity == entity_id:
                                                    remove_entity = False
                                                    logger.debug(f"The entity '{area_entity}' has been found in the list from '{area_lookup_entity}.attributes.{area_lookup_attribute}' at {time.time()}")
                                    except:
                                        logger.error(logger, f"Error - a problem occured iterating through the looked up entity list")

                                    if remove_entity:
                                        entity_list.remove(entity_id)
                                        logger.debug(f"'{entity_id}' removed from group '{friendly_name}' because it was not in the area '{area}' at {time.time()}")

                            except:
                                logger.error(logger, f"Error - a problem occured iterating through the list of areas")
                    except:
                        logger.error(logger, f"Error - a problem occured removing a filtered unit_of_measurement entity from the entity list")

except:
    logger.error(logger, f"Error - a problem occured creating the entity list")

try:
    for excluded_matches in globally_excluded_matches:
        logger.debug(f"iterating '{excluded_matches}' in 'globally_excluded_matches' at {time.time()}")
        for match_entity in entity_list:
            logger.debug(f"iterating '{match_entity}' in 'entity_list' at {time.time()}")
            if match_entity.find(excluded_matches) != -1:
                entity_list.remove(match_entity)
                logger.debug(f"'{match_entity}' removed from group '{friendly_name}' as it matched '{excluded_matches}' at {time.time()}")

except:
    logger.error(logger, f"Error - a problem occured when removing a matched item from the entity list")

try:
    service_data = {"object_id": group_name, "name": friendly_name, "icon": icon, "entities": entity_list, "all": False}
    logger.info(f"Calling the service 'set group' with the data '{service_data}' at {time.time()}")
    hass.services.call("group", "set", service_data, False)
except:
    logger.error(logger, f"Error - a problem occured calling the hass set group service")
