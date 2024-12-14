"""Constants used by MIWA."""
from datetime import timedelta
import json
from pathlib import Path
from typing import Final

from homeassistant.const import Platform

from .models import MIWAEnvironment

PLATFORMS: Final = [Platform.SENSOR]

ATTRIBUTION: Final = "Data provided by MIWA"

DEFAULT_MIWA_ENVIRONMENT = MIWAEnvironment(
    api_endpoint="https://mijnmiwa.be",
)

UNRECORDED_ATTRIBUTES = {
    "ledigingen",
}

BASE_HEADERS = {
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
}

DATETIME_FORMAT = "%Y-%m-%dT%H:%M:%S%z"
COORDINATOR_UPDATE_INTERVAL = timedelta(minutes=15)
CONNECTION_RETRY = 5
REQUEST_TIMEOUT = 20
WEBSITE = "https://mijnmiwa.be/"

manifestfile = Path(__file__).parent / "manifest.json"
with open(manifestfile) as json_file:
    manifest_data = json.load(json_file)

DOMAIN = manifest_data.get("domain")
NAME = manifest_data.get("name")
VERSION = manifest_data.get("version")
ISSUEURL = manifest_data.get("issue_tracker")
STARTUP = f"""
-------------------------------------------------------------------
{NAME}
Version: {VERSION}
This is a custom component
If you have any issues with this you need to open an issue here:
{ISSUEURL}
-------------------------------------------------------------------
"""
