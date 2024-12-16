"""MIWA API Client."""
from __future__ import annotations

import copy
from datetime import datetime
import json
import logging
import urllib

from bs4 import BeautifulSoup
from requests import Session

from .const import (
    BASE_HEADERS,
    CONNECTION_RETRY,
    DEFAULT_MIWA_ENVIRONMENT,
    REQUEST_TIMEOUT,
)
from .exceptions import BadCredentialsException, MIWAServiceException
from .models import MIWAEnvironment, MIWAItem
from .utils import format_entity_name, mask_fields

_LOGGER = logging.getLogger(__name__)


class MIWAClient:
    """MIWA client."""

    session: Session
    environment: MIWAEnvironment

    def __init__(
        self,
        session: Session | None = None,
        email: str | None = None,
        password: str | None = None,
        headers: dict | None = BASE_HEADERS,
        environment: MIWAEnvironment = DEFAULT_MIWA_ENVIRONMENT,
    ) -> None:
        """Initialize MIWAClient."""
        self.session = session if session else Session()
        self.email = email
        self.password = password
        self.environment = environment
        self.session.headers = headers
        self.scope = None
        self.request_error = {}

    def request(
        self,
        url,
        caller="Not set",
        data=None,
        expected="200",
        parse=False,
        log=False,
        retrying=False,
        connection_retry_left=CONNECTION_RETRY,
    ) -> dict:
        """Send a request to MIWA."""
        if data is None:
            _LOGGER.debug(f"{caller} Calling GET {url}")
            response = self.session.get(url, timeout=REQUEST_TIMEOUT)
        else:
            data_copy = copy.deepcopy(data)
            mask_fields(data_copy, ["password"])
            _LOGGER.debug(f"{caller} Calling POST {url} with {data_copy}")
            response = self.session.post(url, data, timeout=REQUEST_TIMEOUT)
        self.session.headers["x-xsrf-token"] = urllib.parse.unquote(
            self.session.cookies.get("XSRF-TOKEN"), encoding="utf-8", errors="replace"
        )

        _LOGGER.debug(
            f"{caller} http status code = {response.status_code} (expecting {expected})"
        )
        if log:
            _LOGGER.debug(f"{caller} response:\n{response.text}")
        if expected is not None and response.status_code != expected:
            if response.status_code == 404:
                self.request_error = response.json()
                return False
            if response.status_code == 401:
                raise BadCredentialsException(response.text)
            raise MIWAServiceException(
                f"[{caller}] Expecting HTTP {expected} | response HTTP {response.status_code}, response: {response.text}, Url: {response.url}"
            )
        if parse:
            soup = BeautifulSoup(response.text, "html.parser")
            tag = soup.find("div", {"id": "app"})
            if tag is None:
                raise MIWAServiceException("App ID not found on the login page")
            data_props = json.loads(tag.get("data-page")).get("props")
            _LOGGER.debug(f"Data page props: {data_props}")
            return data_props
        return response

    def login(self) -> dict:
        """Start a new MIWA session with a user & password."""

        self.session = Session()
        _LOGGER.debug("[MIWAClient|login|start]")
        """Login process"""
        if self.email is None or self.password is None:
            return False
        response = self.request(
            f"{self.environment.api_endpoint}/login",
            "[MIWAClient|login|get csrf]",
            None,
            200,
        )
        response = self.request(
            f"{self.environment.api_endpoint}/login",
            "[MIWAClient|login|authenticate]",
            {"email": self.email, "password": self.password},
            200,
            parse=True,
        )
        self.scope = response.get("auth").get("can")
        _LOGGER.debug(self.scope)
        _LOGGER.debug(response.get("auth"))
        return response.get("auth").get("user")

    def mijn_adressen(self):
        """Get adressen."""
        response = self.request(
            f"{self.environment.api_endpoint}/mijn-adressen",
            "[MIWAClient|mijn_adressen]",
            None,
            200,
            parse=True,
        )
        return response.get("addresses")

    def ledigingen(self, address_path):
        """Get ledigingen."""
        response = self.request(
            f"{self.environment.api_endpoint}/{address_path}/mijn-verbruik/ledigingen?fromDate=01%2F01%2F2010",
            f"[MIWAClient|{address_path}|ledigingen]",
            None,
            200,
            parse=True,
        )
        if "emptyings" not in response:
            return False
        return response

    def ondergrondse_ledigingen(self, address_path):
        """Get ondergrondse ledigingen."""
        response = self.request(
            f"{self.environment.api_endpoint}/{address_path}/mijn-verbruik/ondergrondse-ledigingen?fromDate=01%2F01%2F2010",
            f"[MIWAClient|{address_path}|ledigingen]",
            None,
            200,
            parse=True,
        )
        if "dumpings" not in response:
            return False
        return response

    def mijn_aanrekeningen(self, address_path):
        """Get aanrekeningen."""
        response = self.request(
            f"{self.environment.api_endpoint}/{address_path}/mijn-aanrekeningen/overzicht",
            f"[MIWAClient|{address_path}|mijn_aanrekeningen]",
            None,
            200,
            parse=True,
        )
        if "invoices" in response:
            return response.get("invoices")
        return False

    def facturatie_instellingen(self, address_path):
        """Get facturatie instellingen."""
        response = self.request(
            f"{self.environment.api_endpoint}/{address_path}/mijn-aanrekeningen/facturatie-instellingen",
            f"[MIWAClient|{address_path}|facturatie_instellingen]",
            None,
            200,
            parse=True,
        )
        return response

    def mijn_saldo(self, address_path):
        """Get payments."""
        response = self.request(
            f"{self.environment.api_endpoint}/{address_path}/mijn-saldo",
            f"[MIWAClient|{address_path}|mijn_saldo]",
            None,
            200,
            parse=True,
        )
        if "payments" in response:
            return response.get("payments")
        return False

    def mijn_producten(self, address_path):
        """Get aanrekeningen."""
        response = self.request(
            f"{self.environment.api_endpoint}/{address_path}/mijn-producten",
            f"[MIWAClient|{address_path}|mijn_producten]",
            None,
            200,
            parse=True,
        )
        return response.get("products")

    def fetch_data(self):
        """Fetch MIWA data."""
        data = {}
        user_info = self.login()
        if not user_info or "email" not in user_info or not self.scope:
            return False
        email = user_info.get("email")
        device_key = format_entity_name(f"user {email}")
        device_name = f"Account {email}"
        device_model = "User"
        key = format_entity_name(f"{email} email")
        data[key] = MIWAItem(
            name="Email",
            key=key,
            type="email",
            device_key=device_key,
            device_name=device_name,
            device_model=device_model,
            state=email,
            extra_attributes=user_info,
        )
        key = format_entity_name(f"{email} first_name")
        data[key] = MIWAItem(
            name="Voornaam",
            key=key,
            type="info",
            device_key=device_key,
            device_name=device_name,
            device_model=device_model,
            state=user_info.get("first_name"),
            extra_attributes=user_info,
        )
        key = format_entity_name(f"{email} last_name")
        data[key] = MIWAItem(
            name="Achternaam",
            key=key,
            type="info",
            device_key=device_key,
            device_name=device_name,
            device_model=device_model,
            state=user_info.get("last_name"),
            extra_attributes=user_info,
        )
        key = format_entity_name(f"{email} telephone")
        data[key] = MIWAItem(
            name="Telefoon- of gsm-nummer",
            key=key,
            type="telefoon",
            device_key=device_key,
            device_name=device_name,
            device_model=device_model,
            state=user_info.get("telephone"),
            extra_attributes=user_info,
        )

        for address in self.mijn_adressen():
            _LOGGER.debug(
                f"Adres: {address.get('street_name')} {address.get('house_number')}, {address.get('zipcode')} {address.get('city')}"
            )
            address_id = address.get("id")
            address_path = "mijn-adressen/" + address_id

            device_key = format_entity_name(f"address_id {address_id}")
            device_name = (
                f"Adres {address.get('street_name')} {address.get('house_number')}"
            )
            device_model = "Adres"
            key = format_entity_name(f"{address_id} adres")
            data[key] = MIWAItem(
                name=f"{address.get('street_name')} {address.get('house_number')}, {address.get('zipcode')} {address.get('city')}",
                key=key,
                type="address",
                device_key=device_key,
                device_name=device_name,
                device_model=device_model,
                state=address.get("inhabitant_category"),
                extra_attributes=address,
            )

            if self.scope.get("view_emptyings"):
                ledigingen = self.ledigingen(address_path)
                if ledigingen:
                    _LOGGER.debug(
                        f"Huidige balans: {ledigingen.get('linkedAddress').get('current_balance')} EUR"
                    )
                    key = format_entity_name(f"{address_id} huidige balans ledigingen")
                    data[key] = MIWAItem(
                        name="Huidige balans",
                        key=key,
                        type="euro",
                        device_key=device_key,
                        device_name=device_name,
                        device_model=device_model,
                        state=(
                            ledigingen.get("linkedAddress").get("current_balance") / 100
                        ),
                    )
                    key = format_entity_name(f"{address_id} totaal ledigingen gewicht")
                    data[key] = MIWAItem(
                        name="Totaal gewicht ledigingen",
                        key=key,
                        type="gewicht",
                        device_key=device_key,
                        device_name=device_name,
                        device_model=device_model,
                        state=(ledigingen.get("totalWeightOfEmptyings") / 1000),
                        extra_attributes={"ledigingen": ledigingen.get("emptyings")},
                    )
                    _LOGGER.debug(
                        f"Ledigingen van {ledigingen.get('fromDate')} tot heden ({ledigingen.get('totalWeightOfEmptyings')/1000} kg)"
                    )
                    if len(ledigingen.get("emptyings")):
                        fractions = []
                        for emptying in ledigingen.get("emptyings"):
                            fraction = emptying.get("fraction")
                            if fraction not in fractions:
                                fractions.append(fraction)
                                emptied = datetime.strptime(
                                    emptying.get("emptied_on"), "%Y-%m-%dT%H:%M:%S.%fZ"
                                )
                                formatted_emptied = emptied.strftime("%d-%m")
                                key = format_entity_name(
                                    f"{address_id} laatste lediging {fraction}"
                                )
                                data[key] = MIWAItem(
                                    name=f"{fraction} Laatste lediging {formatted_emptied}",
                                    key=key,
                                    type="gewicht",
                                    device_key=device_key,
                                    device_name=device_name,
                                    device_model=device_model,
                                    state=(emptying.get("weight") / 1000),
                                    extra_attributes=emptying,
                                )
                                _LOGGER.debug(
                                    f"  - {emptying.get('emptied_on')}, {fraction} {emptying.get('type')} {emptying.get('volume')}L: {emptying.get('weight')/1000} kg"
                                )

            if self.scope.get("view_dumpings"):
                dumpings = self.ondergrondse_ledigingen(address_path)
                if dumpings:
                    _LOGGER.debug(
                        f"Huidige balans: {dumpings.get('linkedAddress').get('current_balance')} EUR"
                    )
                    key = format_entity_name(
                        f"{address_id} huidige balans ondergrondse ledigingen"
                    )
                    data[key] = MIWAItem(
                        name="Huidige balans",
                        key=key,
                        type="euro",
                        device_key=device_key,
                        device_name=device_name,
                        device_model=device_model,
                        state=(
                            dumpings.get("linkedAddress").get("current_balance") / 100
                        ),
                        extra_attributes={"ledigingen": dumpings.get("dumpings")},
                    )
                    if len(dumpings.get("dumpings")):
                        fractions = []
                        for dumping in dumpings.get("dumpings"):
                            fraction = dumping.get("fraction")
                            if fraction not in fractions:
                                fractions.append(fraction)
                                emptied = datetime.strptime(
                                    dumping.get("dumped_on"), "%Y-%m-%dT%H:%M:%S.%fZ"
                                )
                                formatted_emptied = emptied.strftime("%d-%m")
                                key = format_entity_name(
                                    f"{address_id} laatste ondergrondse lediging {fraction}"
                                )
                                data[key] = MIWAItem(
                                    name=f"{fraction} Laatste lediging {emptied}",
                                    key=key,
                                    type="dumping",
                                    device_key=device_key,
                                    device_name=device_name,
                                    device_model=device_model,
                                    state=(dumping.get("price") / 100),
                                    extra_attributes=dumping,
                                )
                                _LOGGER.debug(
                                    f"  - {dumping.get('emptied_on')}, {fraction} : {dumping.get('price')/100} EUR"
                                )

            if self.scope.get("view_payments"):
                amount = 0
                payments = self.mijn_saldo(address_path)
                if payments and isinstance(payments, list):
                    for payment in payments:
                        amount += payment.get("amount")
                    key = format_entity_name(f"{address_id} payments")
                    data[key] = MIWAItem(
                        name="Payments",
                        key=key,
                        type="euro",
                        device_key=device_key,
                        device_name=device_name,
                        device_model=device_model,
                        state=(amount / 100),
                        extra_attributes={"betalingen": payments},
                    )

            if self.scope.get("view_invoices"):
                invoices = self.mijn_aanrekeningen(address_path)
                if invoices:
                    for invoice in invoices:
                        key = format_entity_name(
                            f"{address_id} aanrekening {invoice.get('invoiced_on')}"
                        )
                        data[key] = MIWAItem(
                            name=f"Aanrekening {invoice.get('invoiced_on')[0:10]}",
                            key=key,
                            type="euro",
                            device_key=device_key,
                            device_name=device_name,
                            device_model=device_model,
                            state=(invoice.get("amount_invoiced") / 100),
                            extra_attributes=invoice,
                        )
                        _LOGGER.debug(
                            f"  - {invoice.get('invoiced_on')}: {invoice.get('amount_invoiced')/100} EUR [{invoice.get('status')}|{invoice.get('billing_method')}]"
                        )
                facturatie_instellingen = self.facturatie_instellingen(address_path)
                if (
                    facturatie_instellingen
                    and "deliveryMethod" in facturatie_instellingen
                ):
                    _LOGGER.debug("Verzend- en betaalmethoden:")
                    _LOGGER.debug(
                        f"  Methode: {facturatie_instellingen.get('deliveryMethod')}"
                    )
                    key = format_entity_name(f"{address_id} aanrekening methode")
                    data[key] = MIWAItem(
                        name="Verzendmethode aanrekening",
                        key=key,
                        type="verzending",
                        device_key=device_key,
                        device_name=device_name,
                        device_model=device_model,
                        state=facturatie_instellingen.get("deliveryMethod"),
                        extra_attributes=facturatie_instellingen,
                    )
            _LOGGER.debug("Producten:")
            if self.scope.get("view_products"):
                for product in self.mijn_producten(address_path):
                    _LOGGER.debug(
                        f"  - {product.get('name')} [sinds {product.get('active_since')}]"
                    )
                    key = format_entity_name(
                        f"{address_id} product {product.get('name')}"
                    )
                    data[key] = MIWAItem(
                        name=f"{product.get('name')}",
                        key=key,
                        type="product",
                        device_key=device_key,
                        device_name=device_name,
                        device_model=device_model,
                        state=product.get("status"),
                        extra_attributes=product,
                    )
        _LOGGER.debug(f"Data returned in client.fetch_data: {data}")
        return data
