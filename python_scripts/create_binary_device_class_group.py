# import re

group_name = data.get('group_name', '')
icon = data.get('icon', '')
friendly_name = data.get('friendly_name', group_name)
included_device_classes = data.get('included_device_classes', ['door'])
excluded_entities = data.get('excluded_entities', [])

domain = 'binary_sensor'
entity_list = []
filtered_list = []

if not isinstance(group_name, str) or not domain or not group_name:
    logger.warning("Domain does not exist")

# friendly_name = f"All binary sensor {friendly_name} group"
globally_excluded_regex = [
    "chrome_workdell",
    "c105a8ea_57917284",
    "1999f1b8_8c50d6ce",
    "front_door_tablet",
    "macbook_pro_2018_screen_possibly",
    "macbook_pro_2018_chrome",
    "a996ec86_cdbe8ea4",
    "kev_iphone_remote"
]

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
                    for attr in entity.attributes:
                        if attr is not None:
                            if attr == "device_class":
                                for device_class_option in included_device_classes:
                                    if entity.attributes.get(attr) == device_class_option:
                                        entity_list.append(entity_id)
                                        logger.debug(f"'{entity_id}' added to group '{friendly_name}' at {time.time()}")
except:
    logger.error(logger, f"Error - a problem occured creating the entity list")

try:
    for excluded_regex in globally_excluded_regex:
        for match_entity in entity_list:
            if match_entity.find(excluded_regex) != -1:
                entity_list.remove(match_entity)
                logger.debug(f"'{match_entity}' removed from group '{friendly_name}' as it matched '{match_entity}' at {time.time()}")

except:
    logger.error(logger, f"Error - a problem occured when removing a matched item from the entity list")

# r = re.compile(excluded_regex)
# if hass.helpers.template.regex_match(entity_list, excluded_regex):
# filtered_list.extend(filter(r.match, entity_list))
#     logger.info(f"pattern {excluded_regex} tested and match found at {time.time()}")
#     logger.info(f"pattern {r.pattern} tested and list {filtered_list} produced at {time.time()}")
# try:
#     if len(filtered_list) != 0:
#         logger.warning(logger, f"Removing {len(filtered_list)} items that match the global regex from the entity list at {time.time()}")
#         entity_list = list(set(entity_list)-set(filtered_list))
# except:
#     logger.error(logger, f"Error - a problem occured subtracting the entities matching the RegEx from the entity_list")

try:
    if not icon:
        service_data = {"object_id": group_name, "name": friendly_name, "entities": entity_list}
    else:
        service_data = {"object_id": group_name, "name": friendly_name, "icon": icon, "entities": entity_list}

    logger.info(f"Calling the service 'set group' with the data '{service_data}' at {time.time()}")
    hass.services.call("group", "set", service_data, False)
except:
    logger.error(logger, f"Error - a problem occured calling the hass group set service")
