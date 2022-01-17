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

ps : dev-master oder dev- main je nachdem wie dein haupt branch 
bei github heisst ;)

![](https://i.imgur.com/Ww4AB32.png)

## Installation via Packeton

### Schritt 1

Paket auf Gitlab Hochalden

### Schritt 2

Packet in Packeton auswählen und submitten


## In der Dev umgebung arbeiten 

    "lupcom/fontpreview-bundle": "dev-master"

1.Bei require dein paket eintragen ( den dev master branch nutzen)
2. In Gitlab als Maintainer für dein Paket eingetragen sein.
3. Nun kannst du das Paket runterladen und auch im Vendor
   ordner bearbeiten und pushen zum master branch.
4. Dann kannst du composer update lupcom/fontpreview-bundle ausführen
   und hast somit die neuste version die du bearbeitet hast wieder
   durch das composer upadte installiert ... inkl cache clears und updated
   dependencies für twig usw.




## Installation via Github

**Anmerkung**

Deinen bundle Namen den du später in der Require Sektion eintragen musst 
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



Bei dieser Variante kann es sein, dass github.com die Verbindungsanfrage ablehnt. Die Erstellung eines Oauth-Access-Tokens kann hier Abhilfe schaffen. Das Access Token muss dann in der config section der composer.json im Root eingesetzt werden. Github Oauth-Access-Token generieren

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
Du kannst aber auch die Dateien in irgendeinen Ordner packen.
Contao "Symlinked" dann diesen Ordner mit dem vendor Verzeichniss
und damit landen die Dateien dann auch im vendor Ordner.

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


## Welche Variante nutzen?

Für Entwicklung würde ich empfehlen

das die Pfadangabe über type `path` gesetzt ist.

Denn bei einem Composer update werden 
so die lokalen datein genutzt.


    "repositories": [
        {
            "type": "path",
        }
    ]


Du könntest die datein also erstmal über die erste oder zweite 
variante installieren und danach dann auf `path` umstellen.

füge `canonical false` hinzu ... weil sonst verlangt
composer die original installierte version via github oder packigist ;):

https://getcomposer.org/doc/articles/repository-priorities.md
    
    "repositories": [
        {
            "type": "path",
            "url": "vendor/steffenu/starter-bundle",
            "canonical": false
        }
    ]
   


Solltest du nur ein fertiges Paket nutzen wollen
dann benutze die packigist variante(am einfachsten) ,
ansonsten die Github Variante.


Tipp:
Mein starter bundle liegt auf Packigist 

du kannst es also einfach so requiren :

    "steffenu/starter-bundle": "dev-master"

oder über github wie oben beschrieben ;)...



