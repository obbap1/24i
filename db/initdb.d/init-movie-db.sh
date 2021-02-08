#!/usr/bin/env bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER testUser;
    CREATE DATABASE movie_db ENCODING UTF8;
    GRANT ALL PRIVILEGES ON DATABASE movie_db TO testUser;
    ALTER USER testUser WITH PASSWORD 'password123';
    ALTER USER testUser WITH SUPERUSER;
EOSQL
