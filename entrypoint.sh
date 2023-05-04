#!/bin/bash

# Run any database migrations
python manage.py migrate

# Run Project
uwsgi --http=0.0.0.0:80 --module=what_re.wsgi

exec "$@"