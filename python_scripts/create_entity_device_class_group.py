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
#       included_device_classes:
#       - door
#       - window
#       - vibration
#       excluded_entities:
#       - binary_sensor.zigbee_door_sensor_bed_c_contact
#########################################################################################

domain = data.get('domain', '')
group_name = data.get('group_name', '')
icon = data.get('icon', '')
friendly_name = data.get('friendly_name', group_name)
filter_by_device_class = data.get('filter_by_device_class', False)
included_device_classes = data.get('included_device_classes', ['door'])
excluded_entities = data.get('excluded_entities', [])

entity_list = []

if not isinstance(domain, str) or not domain or not group_name:
    logger.error(f"Domain or group_name {domain}{group_name} does not exist")

# List of entity_id's to globally exclude from the groups.
# Any entity_id that contains any text in the list will be excluded.
# This is useful for integrations such as browser_mod that create lots of commonly named entities.
globally_excluded_matches = [
    "chrome_workdell",
    "a4974337_d703c461",
    "c105a8ea_57917284",
    "1999f1b8_8c50d6ce",
    "front_door_tablet",
    "macbook_pro_2018_screen_possibly",
    "macbook_pro_2018_chrome",
    "a996ec86_cdbe8ea4",
    "kev_iphone_remote",
    "41edef0a_ffdd99dd"
]

# try:
logger.info(f"Entering integration_entities")
# for entity_id in hass.integration_entities('browser_mod'):
#     logger.error(logger, f"a: Adding '{entity_id}' to the globally excluded matches list")
# for entity_id in hass.helpers.template.integration_entities('browser_mod'):
#     logger.error(logger, f"b: Adding '{entity_id}' to the globally excluded matches list")
# for entity_id in hass.entity_registry.integration_entities('browser_mod'):
#     logger.error(logger, f"c: Adding '{entity_id}' to the globally excluded matches list")
# for entity_id in hass.entry.integration_entities('browser_mod'):
#     logger.error(logger, f"d: Adding '{entity_id}' to the globally excluded matches list")
# except:
#     logger.error(logger, f"Error - a problem occured adding browser_mod entities to the globally excluded matches list")

try:
    for entity_id in hass.states.entity_ids(domain):
        if entity_id == "":
            logger.error(logger, f"Error - entity_id missing when looping through domain")
        else:
            if entity_id not in excluded_entities:
                entity = hass.states.get(entity_id)
                if entity is None:
                    logger.error(logger, f"Error - entity object not found")
                else:
                    if filter_by_device_class:
                        for attr in entity.attributes:
                            if attr is not None:
                                if attr == "device_class":
                                    for device_class_option in included_device_classes:
                                        if entity.attributes.get(attr) == device_class_option:
                                            entity_list.append(entity_id)
                                            logger.debug(f"'{entity_id}' added to group '{friendly_name}' at {time.time()}")
                    else:
                        entity_list.append(entity_id)
                        logger.debug(f"'{entity_id}' added to group '{friendly_name}' at {time.time()}")

except:
    logger.error(logger, f"Error - a problem occured creating the entity list")

try:
    for excluded_matches in globally_excluded_matches:
        for match_entity in entity_list:
            if match_entity.find(excluded_matches) != -1:
                entity_list.remove(match_entity)
                logger.debug(f"'{match_entity}' removed from group '{friendly_name}' as it matched '{excluded_matches}' at {time.time()}")

except:
    logger.error(logger, f"Error - a problem occured when removing a matched item from the entity list")

try:
    service_data = {"object_id": group_name, "name": friendly_name, "icon": icon, "entities": entity_list}
    logger.info(f"Calling the service 'set group' with the data '{service_data}' at {time.time()}")
    hass.services.call("group", "set", service_data, False)
except:
    logger.error(logger, f"Error - a problem occured calling the hass group set service")
