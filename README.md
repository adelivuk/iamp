#DEV

docker-compose build --no-cache
docker-compose up

docker system prune
docker prune system -a

docker build -t current_folder_name (frontend, backend, db) .

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest


pip install -r .\requirements.txt
pip freeze > requirements.txt


python manage.py dbshell
python manage.py createsuperuser


https://github.com/django-extensions/django-extensions

https://medium.com/@analyticscodeexplained/running-microsoft-sql-server-in-docker-a8dfdd246e45