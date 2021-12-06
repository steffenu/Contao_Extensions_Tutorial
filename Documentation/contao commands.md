    Available commands:
      about                                   Display information about the current project
      help                                    Display help for a command
      list                                    List commands
     assets
      assets:install                          Install bundle's web assets under a public directory
     cache
      cache:clear                             Clear the cache
      cache:pool:clear                        Clear cache pools
      cache:pool:delete                       Delete an item from a cache pool
      cache:pool:list                         List available cache pools
      cache:pool:prune                        Prune cache pools
      cache:warmup                            Warm up an empty cache
     config
      config:dump-reference                   Dump the default configuration for an extension
     contao
      contao:automator                        Runs automator tasks on the command line.
      contao:crawl                            Crawls the Contao root pages with the desired subscribers
      contao:cron                             Runs all registered cron jobs on the command line.
      contao:filesync                         Synchronizes the file system with the database.
      contao:install                          Installs the required Contao directories
      contao:install-web-dir                  Installs the files in the "web" directory
      contao:install:lock                     Locks the install tool.
      contao:install:unlock                   Unlocks the install tool.
      contao:migrate                          Executes migrations and the database schema diff.
      contao:resize-images                    Resizes deferred images that have not been processed yet.
      contao:symlinks                         Symlinks the public resources into the web directory.
      contao:user:create                      Create a new Contao back end user.
      contao:user:list                        Lists Contao back end users.
      contao:user:password                    Changes the password of a Contao back end user.
      contao:version                          Outputs the contao/core-bundle version (deprecated).
     dbal
      dbal:run-sql                            Executes arbitrary SQL directly from the command line.
     debug
      debug:autowiring                        List classes/interfaces you can use for autowiring
      debug:config                            Dump the current configuration for an extension
      debug:container                         Display current services for an application
      debug:dca                               Dumps the DCA configuration for a table.
      debug:event-dispatcher                  Display configured listeners for an application
      debug:fragments                         Displays the fragment controller configuration.
      debug:plugins                           Displays the Contao Manager plugin configurations
      debug:router                            Display current routes for an application
      debug:translation                       Display translation messages information
      debug:twig                              Show a list of twig functions, filters, globals and tests
     doctrine
      doctrine:cache:clear-collection-region  Clear a second-level cache collection region
      doctrine:cache:clear-entity-region      Clear a second-level cache entity region
      doctrine:cache:clear-metadata           Clears all metadata cache for an entity manager
      doctrine:cache:clear-query              Clears all query cache for an entity manager
      doctrine:cache:clear-query-region       Clear a second-level cache query region
      doctrine:cache:clear-result             Clears result cache for an entity manager
      doctrine:database:create                Creates the configured database
      doctrine:database:drop                  Drops the configured database
      doctrine:database:import                Import SQL file(s) directly to Database.
      doctrine:ensure-production-settings     Verify that Doctrine is properly configured for a production environment
      doctrine:mapping:convert                [orm:convert:mapping] Convert mapping information between supported formats
      doctrine:mapping:import                 Imports mapping information from an existing database
      doctrine:mapping:info                   
      doctrine:query:dql                      Executes arbitrary DQL directly from the command line
      doctrine:query:sql                      Executes arbitrary SQL directly from the command line.
      doctrine:schema:create                  Executes (or dumps) the SQL needed to generate the database schema
      doctrine:schema:drop                    Executes (or dumps) the SQL needed to drop the current database schema
      doctrine:schema:update                  Executes (or dumps) the SQL needed to update the database schema to match the current mapping metadata
      doctrine:schema:validate                Validate the mapping files
     fos
      fos:httpcache:clear                     Clear the HTTP cache.
      fos:httpcache:invalidate:path           Invalidate cached paths on all configured caching proxies
      fos:httpcache:invalidate:regex          Invalidate everything matching a regular expression on all configured caching proxies
      fos:httpcache:invalidate:tag            Invalidate cached content matching the specified tags on all configured caching proxies
      fos:httpcache:refresh:path              Refresh paths on all configured caching proxies
     lexik
      lexik:maintenance:lock                  Lock access to the site while maintenance...
      lexik:maintenance:unlock                Unlock access to the site while maintenance...
     lint
      lint:container                          Ensure that arguments injected into services match type declarations
      lint:twig                               Lint a template and outputs encountered errors
      lint:xliff                              Lint an XLIFF file and outputs encountered errors
      lint:yaml                               Lint a file and outputs encountered errors
     router
      router:match                            Help debug routes by simulating a path info match
     secrets
      secrets:decrypt-to-local                Decrypt all secrets and stores them in the local vault
      secrets:encrypt-from-local              Encrypt all local secrets to the vault
      secrets:generate-keys                   Generate new encryption keys
      secrets:list                            List all secrets
      secrets:remove                          Remove a secret from the vault
      secrets:set                             Set a secret in the vault
     security
      security:encode-password                Encode a password
     translation
      translation:update                      Update the translation file




## Commands 

docker exec -ti -u www-data dev-env_php72_1 /bin/sh

docker ps

cd contal.loc

vendor/bin/contao-console debug:router

vendor/bin/contao-console cache:clear

composer update

composer dump-autoload -o

rm -rf var/cache

vendor/bin/contao-console cache:pool:prune  (HOLZHAMMER METHODE ;)