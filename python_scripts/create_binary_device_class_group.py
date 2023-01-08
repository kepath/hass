group = data.get('group', '')
icon = data.get('icon', '')
collection_name = data.get('collection_name', '')
included_device_classes = data.get('included_device_classes', ['door'])

domain = 'binary_sensor'
entity_list = []

if not isinstance(group, str) or not domain or not group:
    logger.warning("bad domain or group! Not executing.")

name = "All binary sensor {} group".format(collection_name)

for entity_id in hass.states.entity_ids(domain):
    if entity_id == "":
        logger.error(logger, "**Required parameter 'entity_id' is missing.**\n\nAction '{}' NOT executed.".format(action.lower()))
    else:
        entity = hass.states.get(entity_id)
        if entity is None:
            logger.error(logger, "**Cannot find entity '{}'.**\n\nAction '{}' NOT executed.".format(entity_id, action.lower()))
        else:
            for attr in entity.attributes:
                if attr is not None:
                    if attr == "device_class":
                        for device_class_option in included_device_classes:
                            if entity.attributes.get(attr) == device_class_option:
                                entity_list.append(entity_id)
                                logger.info("A {} at {}".format(entity_id, time.time()))

if not icon:
    service_data = {"object_id": group, "entities": entity_list, "name": name}
else:
    service_data = {"object_id": group, "entities": entity_list, "name": name, "icon": icon}

hass.services.call("group", "set", service_data, False)
