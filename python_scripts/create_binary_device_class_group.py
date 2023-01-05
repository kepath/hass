group = data.get('group', '')
icon = data.get('icon', '')
device_class = data.get('device_class', 'door')

domain = 'binary_sensor'
entity_list = []

if not isinstance(group, str) or not domain or not group:
    logger.warning("bad domain or group! Not executing.")

name = "All {} sensors".format(device_class)
for entity_id in hass.states.get(domain).attributes['entity_id']:
    if entity_id.attributes['device_class'] == device_class:
        entity_list.append(hass.states.get(entity_id))

if not icon:
    service_data = {"object_id": group, "entities": hass.states.entity_ids(entity_list), "name": name}
else:
    service_data = {"object_id": group, "entities": hass.states.entity_ids(entity_list), "name": name, "icon": icon}

hass.services.call("group", "set", service_data, False)


# https://community.home-assistant.io/t/how-to-add-an-extra-filter-in-python-script-to-rule-out-a-subset-of-lights/182451
# https://developers.home-assistant.io/docs/dev_101_hass/
# https://github.com/home-assistant/core/blob/dev/homeassistant/core.py#L1004
# https://github.com/home-assistant/core/blob/dev/homeassistant/core.py#L1124

# service: python_script.create_entity_groups
# data:
#   domain: binary_sensor
#   group: all_binary_sensors
#   icon: mdi:map-marker