domain = data.get('domain')
group = data.get('group')

service_data = {"object_id": group, "entities": hass.states.entity_ids(domain)}
hass.services.call("group", "set", service_data, False)