# Develop
Example configuration of popular external dev services

## Keycloak
[Official documentation](https://www.keycloak.org/server/containers)
```yml
services:
  keycloak:
    image: keycloak/keycloak
    command: start-dev
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://db-ip:5432/keycloak
      KC_DB_USERNAME: admin
      KC_DB_PASSWORD: admin
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
      KC_HOSTNAME: https://your-domain.pro
      KC_PROXY_HEADERS: xforwarded
    volumes:
      - ./data/providers:/opt/keycloak/providers
    ports:
       - 8080:8080
    restart: unless-stopped
```