

git init
git config --local user.name "sunger"
git config --local user.email "steffen.unger@lupcom.org"
git add .
git commit -m "update"
git branch -M master
git remote add origin "git@gitlab.lupcom.de:contao-bundles/wiki-modul-bundle.git"
git push -u origin master


( SOFERN ES ZU fehlermeldungen kommt)
git pull --allow-unrelated-histories

(sofern er bei einer bestimmten Datei meckert)
git add README.md
git commit -m "fix merge issue"
git push

git pull git@gitlab.lupcom.de:contao-bundles/wiki-modul-bundle.git master

# Webhook einrichten

1.Bei Gitlab auf Settings gehen beim jeweiligen Packet.
(Dafür muss man Admin oder Maintainer sein)

2. Zum Reiter Webhooks navigieren und dort bei URL folgendes eintragen
   (die Daten kannst du in Packeton in deinem Profil einsehen)

https://packeton.lup.me/api/update-package?token=DEIN_USERNAME:DEIN_TOKEN

https://packeton.lup.me/api/update-package?token=steffenunger:tPGxbUD2B6mOmLIMZPSD


4. Ein häckchen bei Push Events setzen und bei Enable SSL verifaction
5. Dann auf Save webhook Drücken.


Mun wird bei dem erstellen eines neuen Tags
der Webhook ausgelöst,  welcher dein Packet von Gitlab zu Packeton überträgt.




# Maintainer oder Admin Rechte

Nötig für GIT  um das Repository vollständig verwalten zu können.

Admin kann auf das Repo klicken. 
> Zugriff verwalten
> Im Dropdown den jeweiligen Entwickler zum Maintainer machen

# Pakete über gitlab ziehen


Während der Entwicklung  ist es günstig wenn composer sich
deine Paket direkt von gitlab holt.

Warum ? :

Damit bei einem composer update immer die neuste version aus gitlab installiert wird.



Dein Entwickler flow  ist dann wie folgt :

1. push change to gitlab
2. composer update lupcom/mein-bundle
3. paket wird von gitlab runtergeladen und bei dir lokal installiert


Füge dafür folgenden Eintrag in deine composer.json hinzu.
(Setze die url deines Packets auf Gitlab ein)

    {
      "type": "vcs",
      "url": "https://gitlab.lupcom.de/contao-bundles/wiki-modul-bundle"
    },


Ausserdem bei require dann den "dev-master" branch eintragen ( ggf  dev-main )

      "require": {
        "lupcom/wiki-module-bundle": "dev-master"
      },



# Composer

Sofern man ein Paket required ist die Reihenfolge wie Composer 
nach einem Paket schaut wie folgt.


1.  Packigist ( default - öffentliche Paketverwaltung)
2. "type": "composer" ( über selbst definierte Paketverwaltung)
3. "type": "vcs"  ( über version control)
4. "type": "path" (über Pfadangabe)

Als Beispiel nehmen wir das Paket lupcom/wiki-module-bundle
welches wir ohne weitere einstellung in der require Sektion einfügen.

  "require": {
    "lupcom/wiki-module-bundle": "dev-master",
  },

Composer schaut zuerst in der öffentlichen Paketverwaltung - Packigist.

Sollte dein Paket dort liegen wird es gefunden und installiert.

Jedoch nutzen wir kein Packigist sondern eine self hosted Paketverwaltung für "NICHT öffentliche Pakete"-
"Packeton".

Damit composer weiss das es auf Packeton schauen soll

müssen wir in der composer.json folgenden eintrag hinzufügen

    {
      "type": "composer",
      "url": "https://YOUR_PACKETON_USERNAME:YOUR_PACKETON_APIKEY@packeton.lup.me"
    }

Wie im vorherigen Abschnitt erwähnt kann über den "type vcs" , definiert werden das 
zuerst auf gitlab geschaut wird.

    {
      "type": "vcs",
      "url": "https://gitlab.lupcom.de/contao-bundles/wiki-modul-bundle"
    },

Jemand der dein Paket installiert brauch diesen Eintrag nicht machen.
Sondern  in der Regel nur den Eintrag für "type": "composer".

Du erstellt dann in  Gitlab  ein Tag  erstellt sodass "Packeton" über den Webhook sich die neuste 
Version zieht.

Solltest du kein Tag erstellen wird kein webhook ausgelöst und
so liegt möglicherweise nicht die neuste Version auf Packeton.


