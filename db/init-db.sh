#!/bin/bash
# db/init-db.sh

# Wait for the SQL Server to come up
sleep 30s

# Run the SQL commands to create the database
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P admin123! -Q "CREATE DATABASE iam;"