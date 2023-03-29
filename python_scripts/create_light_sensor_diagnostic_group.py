# entity_include = data.get('entity_include')
included_entities = [
    "bathroom_light",
    "bed_a_light",
    "bed_b_light",
    "bed_c_light",
    "bed_e_light",
    "ensuite_light",
    "hallway_bottom_light",
    "hallway_middle_light",
    "kitchen_main_light",
    "kitchen_utility_light",
    "lounge_light",
    "study_light"
]

included_attributes = [
    "binary_sensor.___status",
    "binary_sensor.___switch_1",
    "binary_sensor.___switch_2",
    "light.___light_1",
    "sensor.___bssid",
    "sensor.___esphome_version",
    "sensor.___ip",
    "sensor.___mac",
    "sensor.___rssi",
    "sensor.___ssid",
    "sensor.___temperature",
    "sensor.___uptime",
    "update.___firmware"
]


group = data.get('group', '')
icon = data.get('icon', '')
collection_name = data.get('collection_name', '')
included_device_classes = data.get('included_device_classes', ['door'])

domain = 'binary_sensor'
entity_list = []

if not isinstance(group, str) or not domain or not group:
    logger.warning("Domain does not exist")

name = f"All binary sensor {collection_name} group"
excluded_entities = [
    "binary_sensor.zigbee_door_sensor_bed_c_contact",
    "binary_sensor.chrome_workdell",
    "binary_sensor.kev_iphone_remote",
    "binary_sensor.c105a8ea_57917284",
    "binary_sensor.front_g3_flex_motion",
    "binary_sensor.diskstation_security_status",
    "binary_sensor.front_door_tablet",
    "binary_sensor.macbook_pro_2018_screen_possibly",
    "light.chrome_workdell_screen",
    "light.c105a8ea_57917284_screen",
    "light.middle_hallway_light_light_1",
    "light.front_door_smartbulb",
    "light.kitchen_tuya_camera_indicator_light"
]

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
                                    logger.info(f"A {entity_id} at {time.time()}")

if not icon:
    service_data = {"object_id": group, "entities": entity_list, "name": name}
else:
    service_data = {"object_id": group, "entities": entity_list, "name": name, "icon": icon}

hass.services.call("group", "set", service_data, False)
