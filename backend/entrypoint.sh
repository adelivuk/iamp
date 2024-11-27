#!/bin/bash

echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! start entrypoint.sh !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"


# Wait for the database to be ready
# until python manage.py migrate; do
#  echo "Waiting for database to be ready..."
#  sleep 2
# done

# Check if the superuser exists, if not, create it
python manage.py shell -c "
from django.contrib.auth import get_user_model;
User = get_user_model();
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@email.com', 'admin123!');
"

# Run migrations and start the server
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 0.0.0.0:8000

echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! end entrypoint.sh !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
