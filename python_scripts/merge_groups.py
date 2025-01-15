#########################################################################################
# Python script to create domain groups of specific device types
#
# domain - the domain type to search through to generate the group
# group_name - the name of the group to create or recreate
# icon - the mdi icon to assign to this group after creation
# friendly_name - the friendly name of the group
# included_device_classes - a list of device classes to include in the group
#   examples of device classes can be found here
#   binary_sensor - https://developers.home-assistant.io/docs/core/entity/binary-sensor
#   switch - https://developers.home-assistant.io/docs/core/entity/switch
# excluded_entities - a list of entity_id's to exclude from the group
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

groups = data.get('groups', [])
new_group_name = data.get('new_group_name', '')
icon = data.get('icon', '')
friendly_name = data.get('friendly_name', new_group_name)

entity_list = []

try:
    for group in groups:
        if not hass.states.get(group):
            logger.error(f"The group {group} does not exist")
        if len(group) == 0:
            logger.warning(f"The group {group} contains no entities")
        # logger.info(f"looking at group {group}")
        # logger.info(f"hass.states.get(group) {hass.states.get(group)}")
        for entity_id in hass.states.get(group).attributes['entity_id']:
            entity_list.append(entity_id)
            logger.debug(f"'{entity_id}' added to group '{friendly_name}' at {time.time()}")
except LookupError:
    logger.error(logger, "Error - a problem occured creating the entity list")

try:
    service_data = {"object_id": new_group_name, "name": friendly_name, "icon": icon, "entities": entity_list}
    logger.info(f"Calling the service 'set group' with the data '{service_data}' at {time.time()}")
    hass.services.call("group", "set", service_data, False)
except ServiceValidationError:
    logger.error(logger, "Error - a problem occured calling the hass group set service")
