domain = data.get('domain', '')
group_name = data.get('group_name', '')
friendly_name = data.get('friendly_name', group_name)
icon = data.get('icon')
excluded_entities = data.get('excluded_entities', [])

entity_list = []

if not isinstance(domain, str) or not domain:
    logger.error(logger, f"Error - The domain supplied does not exist. Group creation aborted.")
else:
    for entity_id in hass.states.entity_ids(domain):
        if entity_id == "":
            logger.error(logger, f"Error - entity_id missing when looping through domain. Group creation aborted.")
        else:
            if entity_id not in excluded_entities:
                entity_list.append(entity_id)
                logger.debug(f"{entity_id} added to group {friendly_name} at {time.time()}")

if not icon:
    service_data = {"object_id": group_name, "name": friendly_name, "entities": entity_list}
else:
    service_data = {"object_id": group_name, "name": friendly_name, "icon": icon, "entities": entity_list}

logger.info(f"Calling the service 'set group' with the data '{service_data}' at {time.time()}")
hass.services.call("group", "set", service_data, False)
