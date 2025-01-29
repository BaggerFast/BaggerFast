# Databases
Example configuration of popular databases

## MsSql
[Official documentation](https://hub.docker.com/r/microsoft/mssql-server)
```yml
services:
  mssql:
    image: mcr.microsoft.com/mssql/server
    ports:
      - 1433:1433
    volumes:
      - ./data/mssql:/var/opt/mssql
    environment:
      MSSQL_PID: 'Developer'
      ACCEPT_EULA: 'Y'
      MSSQL_SA_PASSWORD: 'yourStrongPassword'
    restart: unless-stopped
```

## PostgresSql
```yml
services:
  postgres:
    image: postgres
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
      PGDATA: /data/postgres
    volumes:
       - ./data/postgres:/data/postgres
    ports:
      - 5432:5432
    restart: unless-stopped
```

## Redis
[Official documentation](https://hub.docker.com/r/bitnami/redis)
```yml
services:
  redis:
    image: bitnami/redis
    ports:
      - 6379:6379
    environment:
      REDIS_PASSWORD: admin
    volumes:
      - ./data/data:/bitnami/redis/data
    restart: unless-stopped
```