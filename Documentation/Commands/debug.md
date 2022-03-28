vendor/bin/contao-console debug:container

vendor/bin/contao-console debug:autowiring

vendor/bin/contao-console debug:router

vendor/bin/contao-console cache:clear

composer update

composer dump-autoload -o

rm -rf var/cache

vendor/bin/contao-console cache:pool:prune  (HOLZHAMMER METHODE ;)