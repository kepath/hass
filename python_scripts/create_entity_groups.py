domain = data.get('domain', '')
group = data.get('group', '')
icon = data.get('icon', '')

if not isinstance(domain, str) or not isinstance(group, str) or not domain or not group:
    logger.warning("bad domain or group! Not executing.")
else:
    if domain == "switch":
        name = "All switches"
    elif domain == "binary_sensor":
        name = "All binary sensors"
    else:
        name = "All "+domain+"s"
    if not icon:
        service_data = {"object_id": group, "entities": hass.states.entity_ids(domain), "name": name}
    else:
        service_data = {"object_id": group, "entities": hass.states.entity_ids(domain), "name": name, "icon": icon}
    hass.services.call("group", "set", service_data, False)