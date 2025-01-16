"""module to merge a list of already generated HA groups into a new group"""

#########################################################################################
# Python script to create domain groups of specific device types
#
# GROUPS - the groups to search through to generate the entity list to add to the new group
# NEW_GROUP_NAME - the name of the group to create or recreate
# ICON - the mdi icon to assign to this group after creation
# FRIENDLY_NAME - the friendly name of the group
#
# An example of an automation being used to create this group is
#
# - id: '0000000000000'
#   alias: on_start_merge_groups_remote_tv_class_media_player
#   description: ""
#   triggers:
#     - event: start
#       trigger: homeassistant
#   conditions: []
#   actions:
#     - delay:
#         hours: 0
#         minutes: 0
#         seconds: 40
#         milliseconds: 0
#     - data:
#         groups:
#           - group.all_remotes
#           - group.all_tv_class_media_player
#         new_group_name: all_remotes_and_tv_class_media_player
#         icon: mdi:television-play
#         friendly_name: All media_player tv device class and remotes group
#       action: python_script.merge_groups
#   mode: single
#########################################################################################

GROUPS = list(data.get('groups', []))
NEW_GROUP_NAME = str(data.get('new_group_name', ''))
ICON = str(data.get('icon', ''))
FRIENDLY_NAME = str(data.get('friendly_name', NEW_GROUP_NAME))

entity_list = []

try:
    for group in GROUPS:
        if not hass.states.get(group):
            logger.error(f"The group {group} does not exist")
        if len(group) == 0:
            logger.warning(f"The group {group} contains no entities")
        for entity_id in hass.states.get(group).attributes['entity_id']:
            entity_list.append(entity_id)
            logger.debug(f"'{entity_id}' added to group '{FRIENDLY_NAME}' at {time.time()}")
except LookupError:
    logger.error(logger, "Error - a problem occured creating the entity list")

try:
    service_data = {"object_id": NEW_GROUP_NAME, "name": FRIENDLY_NAME, "icon": ICON, "entities": entity_list}
    logger.info(f"Calling the service 'set group' with the data '{service_data}' at {time.time()}")
    hass.services.call("group", "set", service_data, False)
except ServiceValidationError:
    logger.error(logger, "Error - a problem occured calling the hass group set service")
