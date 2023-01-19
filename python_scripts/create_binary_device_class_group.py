group = data.get('group', '')
icon = data.get('icon', '')
collection_name = data.get('collection_name', '')
included_device_classes = data.get('included_device_classes', ['door'])

domain = 'binary_sensor'
entity_list = []

if not isinstance(group, str) or not domain or not group:
    logger.warning("bad domain or group! Not executing.")

name = f"All binary sensor {collection_name} group"
excluded_entities = [
    "binary_sensor.zigbee_door_sensor_bed_c_contact",
    "light.chrome_workdell_screen",
    "light.c105a8ea_57917284_screen",
    "binary_sensor.chrome_workdell",
    "binary_sensor.c105a8ea_57917284",
    "binary_sensor.front_g3_flex_motion",
    "binary_sensor.diskstation_security_status"
]

for entity_id in hass.states.entity_ids(domain):
    if entity_id == "":
        logger.error(logger, f"**Required parameter 'entity_id' is missing.**\n\nAction '{action.lower()}' NOT executed.")
    else:
        if entity_id not in excluded_entities:
            entity = hass.states.get(entity_id)
            if entity is None:
                logger.error(logger, f"**Cannot find entity '{entity_id}'.**\n\nAction '{action.lower()}' NOT executed.")
            else:
                for attr in entity.attributes:
                    if attr is not None:
                        if attr == "device_class":
                            for device_class_option in included_device_classes:
                                if entity.attributes.get(attr) == device_class_option:
                                    entity_list.append(entity_id)
                                    logger.info(f"A {entity_id} at {time.time()}")

if not icon:
    service_data = {"object_id": group, "entities": entity_list, "name": name}
else:
    service_data = {"object_id": group, "entities": entity_list, "name": name, "icon": icon}

hass.services.call("group", "set", service_data, False)
