docker exec -ti -u www-data dev-env_php72_1 /bin/sh
docker-compose up -d
docker-compose build

edge ist der aktuelle entwicklungszweig von alpine und daher nicht unbedingt stabil. daher lieber eine als stable gekennzeichnete version verwenden.
https://pkgs.alpinelinux.org/packages