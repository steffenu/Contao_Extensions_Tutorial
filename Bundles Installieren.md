# Starter Bundle

Marko Cupics Bundle Generator : https://github.com/markocupic/contao-bundle-creator-bundle

Mein generiertes Starter Bundle :
https://github.com/steffenu/contao-example-bundle/tree/starter/src


Sofern du Marcos Generator nutzt kannst du dort 
alle nötigen einstellungen treffen und dir selber ein Bundle erstellen ;).

## Installation via Packigist

1. Dein Paket auf Github hochladen
2. Bei Packigist anmelden (über github)
3. dein Bundle hochladen
4. in der Require Sektion von der root composer.json dein packigist Bundle eintragen
5. composer update ausführen
6. Datenbank aktualisieren mit contao install-tool http://contao.loc/contao/install


     "require": {
        ....
        ....
        "steffenu/starter-bundle": "dev-master"
      },

fertig ;)

## Installation via Github

**Anmerkung**
deinen bundle Namen den du später in der Require Sektion eintragen musst 
findest du in deiner composer.json von deinem bundle

    "name": "steffenu/starter-bundle",

Aufpassen das du das nicht mit deinem github repo namen verwechselst ;).
Idealerweise sind beide gleich.

Mein github repo heisst : https://github.com/steffenu/contao-starter-bundle
Aber der name des Bundles ist : starter-bundle ;)

in der root composer.json


2. Verlinkung auf Remote Pfad [OPTION 2]

**Die Erweiterung auf github.com hochladen und in der composer.json folgende 2 Einträge machen**


    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/steffenu/contao-starter-bundle"
          }
      ],

.

      "require": {
        ....
        ....
        "dirtyharrycoding/starter-bundle": "dev-master"
      },

Danach via Contao Manager ein vollständige Update durchführen und das Installtool aufrufen. Fertig!



Bei Variante B kann es sein, dass github.com die Verbindungsanfrage ablehnt. Die Erstellung eines Oauth-Access-Tokens kann hier Abhilfe schaffen. Das Access Token muss dann in der config section der composer.json im Root eingesetzt werden. Github Oauth-Access-Token generieren
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

       "config": {
         "github-oauth": {
           "github.com": "43dfdfxxxxxxxxxxxxxxxxxxx5645rtzrfhgfe9"
         }
       },



## Manuelle Installation

1. Bundle herunterladen



2. Verlinkung auf Lokalen Pfad [OPTION 1] 

Du kannst direkt dein bundle in das Vendor Verzeichniss packen.
Du kannst aber auch die Dateien in irgendeinen ordner packen.
Contao "Symlinked" dann diesen Ordner mit dem vendor Verzeichnisse
und smit landen die dateien dann auch im vendor ordner

    vendor
        steffenu
            starter-bundle

**In der composer.json folgende 2 Einträge machen**
 
Pfadangabe

    "repositories": [
        {
            "type": "path",
            "url": "vendor/steffenu/starter-bundle"
        }
    ]

Paketname (wie gesagt in der composer.json vom bundle zu finden ;) better double check .. ;)

     "require": {
        ....
        ....
        "steffenu/starter-bundle": "dev-main"
      },



## Manuelle Installation via Autoloading

Todo

    src
        MeinVendor
            MeinBundle

.

        },
        "autoload": {
            "classmap": [
                "src/ContaoManagerPlugin.php"
            ],
            "psr-4": {
                "": "src/"
            }
        },

