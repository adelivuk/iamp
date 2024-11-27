#!/bin/bash
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! start entrypoint.sh !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
/usr/src/app/run-initialization.sh & /opt/mssql/bin/sqlservr
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! end entrypoint.sh !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
