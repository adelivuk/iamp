FROM mcr.microsoft.com/mssql/server:2022-latest

ENV ACCEPT_EULA=Y
ENV MSSQL_PID=Express
ENV SA_PASSWORD=admin123!
ENV MSSQL_TCP_PORT=1433

EXPOSE 1433

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the SQL script to the container
COPY init-db.sql .

# Copy the entrypoint script to the container
COPY entrypoint.sh .

# Ensure the entrypoint script is owned by root and has the right permissions
USER root
RUN chmod +x /usr/src/app/entrypoint.sh

# Switch back to the default user for SQL Server
USER mssql

# Run the entrypoint script
ENTRYPOINT ["./entrypoint.sh"]
