#!/bin/bash

# Wait for SQL Server to start
# until /opt/mssql-tools18/bin/sqlcmd -S 127.0.0.1 -U sa -P admin123! -Q "SELECT 1" &> /dev/null
# do
#     echo "Waiting for SQL Server to start..."
#     sleep 5
# done

echo "SQL Server is up and running."

# Run the setup script to create the DB
/opt/mssql-tools18/bin/sqlcmd -S 127.0.0.1 -U sa -P admin123! -i init-db.sql -C