# Extensions erstellen



Wir wollen Extensions erstellen welche:

- über `git verwaltet` werden können
- über die composer.json `installiert` werden können
- nach der Installation kann die `Entwicklung im /vendor Ordner` stattfinden


**Anmerkung** <br>
Dadurch das die Erweiterung ihre eigene ``composer.json``
hat können dort alle Abhängigkeiten die das Bundle benötigt angegeben
werden.

Somit können bundles dann ganz einfach über den Befehl
`composer update` installiert werden.

Ausserdem kannst du deine Erweiterung auch
in eine .zip datei Packen und im Contao Manager hochladen.

Der Contao Manager entpackt und installiert dann für dich 
die Erweiterung. (Praktisch wenn du Bundles von Github runterlädst , und teilst)

1. Bundle runterladen
2. Im Contao Manager hochladen
3. Datenbank aktualisieren


### Vorbereitung

Wir erstellen einen Ordner in unserer Contao Installation z.B
`contao-example`

### Schritt 1

**Composer Setup**

Im terminal das Verzeichniss wechseln z.B

    cd contao-example

Eine composer.json generieren

    composer init

->

    {
    "name": "steffenu/contao-example-bundle",
    "description": "Contao My Test Bundle",
    "type": "contao-bundle",
    "require": {
        "contao/core-bundle": "^4.9"
    },
    "license": "LGPL-3.3-or-later",
    "autoload": {
        "psr-4": {
            "Steffenu\\ContaoExampleBundle\\": "src/"
        }
    }
}



### Schritt 2

**Installation**

In unserer haupt composer.json 

geben wir den Pfad an aus Schritt 0
``contao-example/``



    {
        "repositories": [
            {
                "type": "path",
                "url": "/contao-example/"
            }
        ]
    }

    {
    "require": {
        "steffenu/contao-example-bundle": "dev-main"
    }
}


### Schritt 3

dann `composer update` ausführen. (vorher cd .. damit wir wieder
bei der haupt composer sind)

nun sollte steffenu im vendor ordner auftauchen !

Sollte eine Fehlermeldung komme wie 

        - Root composer.json requires steffenu/contao-example-bundle dev-main, found steffenu/contao-example-bundle[dev-master] but it does not match the constraint.

dann `dev-main` zu `dev-master` ändern...

Hey ich folge nur den docs :D ... 
gut das die github repo kein feedback akzeptiert :D...
https://github.com/netzarbeiter/docs/tree/main/docs/dev/getting-started
(issues disabled)


### Schritt 4

Als nächstes :
1. Bundle Class erstellen
2. Contao Manager Plugin erstellen
3. Conposer json anpassen


**Bundle anlegen**

    // src/ContaoExampleBundle.php
    namespace Steffenu\ContaoExampleBundle;
    
    use Symfony\Component\HttpKernel\Bundle\Bundle;
    
    class ContaoExampleBundle extends Bundle
    {
    }

### Schritt 5

    // src/ContaoManager/Plugin.php
    namespace Steffenu\ContaoExampleBundle\ContaoManager;
    
    use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
    use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
    use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
    use Contao\CoreBundle\ContaoCoreBundle;
    use SomeVendor\ContaoExampleBundle\ContaoExampleBundle;
    
    class Plugin implements BundlePluginInterface
    {
        public function getBundles(ParserInterface $parser): array
        {
            return [
                BundleConfig::create(ContaoExampleBundle::class)
                    ->setLoadAfter([ContaoCoreBundle::class]),
            ];
        }
    }


### Schritt 6

Wieder zurück zu deiner composer.json von deinem Bundle
und dort eintragen.

    {
        "extra": {
             "contao-manager-plugin": "Steffenu\\ContaoExampleBundle\\ContaoManager\\Plugin"
        }
    }


### Schritt 7

**Service Konfiguration anlegen**


    // src/DependencyInjection/ContaoExampleExtension.php
    namespace Steffenu\ContaoExampleBundle\DependencyInjection;
    
    use Symfony\Component\Config\FileLocator;
    use Symfony\Component\DependencyInjection\ContainerBuilder;
    use Symfony\Component\DependencyInjection\Extension\Extension;
    use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
    
    class ContaoExampleExtension extends Extension
    {
        public function load(array $configs, ContainerBuilder $container): void
        {
            $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
            $loader->load('services.yaml');
        }
    }


### Schritt 8

**Routing Konfiguration anlegen**


    // src/ContaoManager/Plugin.php
    namespace Steffenu\ContaoExampleBundle\ContaoManager;
    
    use Contao\ManagerPlugin\Routing\RoutingPluginInterface;
    use Symfony\Component\Config\Loader\LoaderResolverInterface;
    use Symfony\Component\HttpKernel\KernelInterface;
    
    class Plugin implements RoutingPluginInterface
    {
        public function getRouteCollection(LoaderResolverInterface $resolver, KernelInterface $kernel)
        {
            $file = __DIR__.'/../Resources/config/routes.yaml';
            return $resolver->resolve($file)->load($file);
        }
    }


### Publishing mit Git


Initialisiere git direkt von der vendor directory
Erstelle eine remote Repository z.B auf Github


    user@somemachine ~/www/contao4/vendor/somevendor/contao-example-bundle
    $ git init
    $ git add --all
    $ git commit -m "initial commit"
    $ git remote add origin git@github.com:somevendor/contao-example-bundle.git
    $ git push origin main


## Recap

Wir haben die Grundstruktur einer Extension erstellt.

Bis jetzt hat die Extension noch keine Funktion, 

als nächstes machen wir uns auf Content Elemente,Frontend Module

Backend Module usw zu unserer Erweiterung hinzuzufügen.