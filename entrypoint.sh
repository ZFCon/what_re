#!/bin/bash

set -e

if [ "${DIVIO_DB_WAIT}" = "1" ]; then
    /usr/local/bin/divio-wait-postgres.sh
fi

# Run any database migrations
python manage.py migrate

exec "$@"