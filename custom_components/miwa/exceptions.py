"""Exceptions used by MIWA."""


class MIWAException(Exception):
    """Base class for all exceptions raised by MIWA."""

    pass


class MIWAServiceException(Exception):
    """Raised when service is not available."""

    pass


class BadCredentialsException(Exception):
    """Raised when credentials are incorrect."""

    pass


class NotAuthenticatedException(Exception):
    """Raised when session is invalid."""

    pass


class GatewayTimeoutException(MIWAServiceException):
    """Raised when server times out."""

    pass


class BadGatewayException(MIWAServiceException):
    """Raised when server returns Bad Gateway."""

    pass
