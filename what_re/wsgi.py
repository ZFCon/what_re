"""
WSGI config for what_re project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise
from django.conf import settings

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "what_re.settings")

application = WhiteNoise(get_wsgi_application(), settings.STATIC_ROOT)
application.add_files(settings.MEDIA_ROOT, prefix=settings.MEDIA_URL)
