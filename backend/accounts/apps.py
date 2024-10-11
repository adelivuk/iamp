from django.apps import AppConfig

class AccountsConfig(AppConfig):
    name = 'accounts'

    def ready(self):
        try:
            from . import signals  # Import the signals module
        except ImportError:
            pass