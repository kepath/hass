import aiohttp
import async_timeout
import json
import logging
from json.decoder import JSONDecodeError

_LOGGER = logging.getLogger(__name__)

VERSION = "version"
STATUS_ENDPOINT = "/status"
FILES_ENDPOINT = "/dvr/files?all=true"
AUTH_ENDPOINT = "/auth"

DEFAULT_PORT = 8089


class ChannelsDVR:
    def __init__(self, host, port):
        self._version = None
        self.host = host
        self.port = port

    async def request(self, uri):
        """Request content from a URI."""
        async with aiohttp.ClientSession() as session:
            try:
                with async_timeout.timeout(8):
                    async with session.get(uri) as response:
                        return await response.content.read()
            except:
                return None

    @property
    def version(self):
        """Return the version number of the server software."""
        return self._version

    async def init_data(self):
        """Get the version number of the server"""
        status_uri = f"http://{self.host}:{self.port}{STATUS_ENDPOINT}"
        try:
            resp = await self.request(status_uri)
            json_string = resp.decode("utf-8")
            status = json.loads(json_string)
        except OSError:
            msg = "Host %s is not available" % self.host
            _LOGGER.warning(msg)
            raise ConnectionFail(msg)

        self._version = {VERSION: status[VERSION]}

    async def get_files(self):
        """Get the list of files from the server."""
        files_uri = f"http://{self.host}:{self.port}{FILES_ENDPOINT}"
        _LOGGER.debug(f"Updating")

        """Retrieve recorded show info and server version"""
        try:
            resp = await self.request(files_uri)
            json_string = resp.decode("utf-8")
            files = json.loads(json_string)
            if not files:
                msg = "%s cannot be reached" % self.host
                _LOGGER.warning(msg)
                raise ConnectionFail(msg)

        except OSError:
            msg = "%s cannot be reached" % self.host
            _LOGGER.warning(msg)
            raise ConnectionFail(msg)

        except JSONDecodeError:
            msg = "Couldn't decode data returned from %s" % self.host
            _LOGGER.warning(msg)
            raise ConnectionFail(msg)

        return files

    async def get_poster(self, image_uri):
        """Get the poster for a show from the server."""
        return await self.request(image_uri)

    async def get_auth(self):
        """Make sure we can reach the server and get the unique ID (verification)"""
        try:
            auth_uri = f"http://{self.host}:{self.port}{AUTH_ENDPOINT}"

            resp = await self.request(auth_uri)
            json_string = resp.decode("utf-8")
            auth = json.loads(json_string)
        except (OSError, AttributeError):
            msg = "Host %s is not available" % self.host
            _LOGGER.error(msg)
            raise ConnectionFail(msg)

        except Exception:
            msg = "Unexpected exception"
            _LOGGER.exception(msg)
            raise ConnectionFail(msg)

        return auth


class ConnectionFail(Exception):
    """Error to indicate there is no connection."""

    def __init__(self, msg):
        self.msg = msg
