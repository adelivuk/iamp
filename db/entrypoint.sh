#!/bin/bash

# Start SQL Server in the background
/opt/mssql/bin/sqlservr &

# Wait for SQL Server to start
sleep 30s

# Run the SQL script to create the database
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P admin123! -i init-db.sql

# Keep the container running
wait