#!/bin/bash

# Wait for the PostgreSQL database to be ready
if [ "$DATABASE" = "$POSTGRES_DB" ]
then
    echo "Waiting for postgres..."

    while ! nc -z db $POSTGRES_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

# Apply database migrations
python manage.py migrate

exec "$@"