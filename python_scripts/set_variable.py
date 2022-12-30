entity_state = data.get('entity_state')
entity_name = data.get('entity_name')

# entity_object = hass.states.get(entity_name)
hass.states.set(entity_name, entity_state)
logger.info("{entity_name} has been set to {entity_state}")

# domain = data.get('domain')
# group = data.get('group')

# service_data = {"object_id": group, "entities": hass.states.entity_ids(domain)}
# hass.services.call("group", "set", service_data, False)