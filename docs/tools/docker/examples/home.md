# Home services
Example configuration of popular external home services

## Vault warden
```yml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    ports:
      - 80:80
    volumes:
      - '.data:/data'
    environment:
      WEBSOCKET_ENABLED: true
      SIGNUPS_ALLOWED: true
    restart: unless-stopped
```

## Pihole
```yml
services:
  pihole:
    image: pihole/pihole:latest
    hostname: Linux Production
    ports:
      - "533:53/tcp"
      - "533:53/udp"
      - "80:80"
    environment:
      TZ: Europe/Moscow
      WEBPASSWORD: admin
    volumes:
      - ./data/pihole:/etc/pihole
      - ./data/dnsmasq.d:/etc/dnsmasq.d
    restart: unless-stopped
```
## Adguard Home
```yml
services:
  adguardhome:
    image: adguard/adguardhome
    ports:
      - 53:53/tcp
      - 53:53/udp
      - 784:784/udp
      - 853:853/tcp
      - 3000:3000/tcp
      - 80:80/tcp
      - 443:443/tcp
    volumes:
      - ./data/work:/opt/adguardhome/work
      - ./data:conf:/opt/adguardhome/conf
    restart: unless-stopped
```