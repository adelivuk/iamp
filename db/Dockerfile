# FROM mcr.microsoft.com/mssql/server:2022-latest

# ENV ACCEPT_EULA=Y
# ENV MSSQL_PID=Express
# ENV SA_PASSWORD=admin123!
# ENV MSSQL_TCP_PORT=1433

# EXPOSE 1433

# Set the working directory inside the container
# WORKDIR /usr/src/app

# Copy the SQL script to the container
# COPY init-db.sql .

# Copy the entrypoint script to the container
# COPY entrypoint.sh .

# Ensure the entrypoint script is owned by root and has the right permissions
# USER root
# RUN chmod +x /usr/src/app/entrypoint.sh

# Switch back to the default user for SQL Server
# USER mssql

# Run the entrypoint script
# ENTRYPOINT ["./entrypoint.sh"]





# We choose exact tag (not 'latest'), to be sure that new version wont break creating image
FROM mcr.microsoft.com/mssql/server:2022-latest

# Create app directory
# RUN mkdir -p /usr/src/app

USER root
WORKDIR /usr/src/app

# Copy initialization scripts
COPY . /usr/src/app

# Grant permissions for the run-initialization script to be executable
USER root
RUN chmod +x /usr/src/app/run-initialization.sh
# RUN chown -R mssql:mssql /var/opt/mssql
# RUN chmod -R 770 /var/opt/mssql

# Set environment variables, not to have to write them with docker run command
# Note: make sure that your password matches what is in the run-initialization script
ENV SA_PASSWORD=${DB_PASSWORD}
ENV ACCEPT_EULA=Y
ENV MSSQL_PID=Express

# Expose port 1433 in case accesing from other container
EXPOSE ${DB_DOCKER_CONTAINER_PORT}

# Run Microsoft SQl Server and initialization script (at the same time)
# Note: If you want to start MsSQL only (without initialization script) you can comment bellow line out, CMD entry from base image will be taken
CMD /bin/bash /usr/src/app/entrypoint.sh