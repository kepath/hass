"""Models used by MIWA."""
from __future__ import annotations

from dataclasses import dataclass
from dataclasses import field
from typing import TypedDict


class MIWAConfigEntryData(TypedDict):
    """Config entry for the MIWA integration."""

    username: str | None
    password: str | None


@dataclass
class MIWAEnvironment:
    """Class to describe a MIWA environment."""

    api_endpoint: str


@dataclass
class MIWAItem:
    """MIWA item model."""

    name: str = ""
    key: str = ""
    type: str = ""
    state: str = ""
    device_key: str = ""
    device_name: str = ""
    device_model: str = ""
    data: dict = field(default_factory=dict)
    extra_attributes: dict = field(default_factory=dict)
    native_unit_of_measurement: str = None
