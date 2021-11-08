# Teil 1 - Einführung

In diesem Tutorial werden wir Contao  
Extensions kennen lernen. Der Guide
Contao Modul Entwickler !

 Wir erstellen eigene:
- Content Elemente
- Frontend Module
- Backend Module

 > Stand ``Contao 4.9``

In den ersten Parts ... Grundlagen ,
Installation usw.

Danach widmen wir uns den erstellen der oben  
geannten Module.

Zum Schluss gehen wir noch etwas ins Detail
um z.B :
- Twig Templates einzubinden ,
- Eigene Widgets zu erstellen ( Custom HTML )
- Contao Spezifische Callbacks
- Custom Controllers

um unsere Module flexibel zu gestalten mit
der aktuellen Symfony Syntax.

### Die OrdnerStruktur

Wir folgen der best practice von Contao
und benennen unsere Ordner und Namespaces
vorbildlich so wie Contao es möchte ;).

Das hat den Vorteil das Contao in diese Ordner
reinschaut und teilweise automatisch dann deine Dateien
findet und läd.

Es gibt ein paar Stolpersteine
in dieser Hinsicht. "Namespace Magic" ,
Autoloading ...

Wir werden sie kennen lernen.

Zum jetzigen Zeitpunkt ...  welche
 Ordner sind interessant !?

    Ressource
      config
      dca
      languages
      templates


Wir erweitern diese später mit Controllern ,
Models .. the latest shit ;).

Contao hat ein "Skeleton Bundle"
was ich perönlich als "wenig hilfreich" empfand.

Deswegen möchte ich dir mein eigenes
Skeleton geben.

Dort sind alle 3 Bausteine mit drinne
und direkt mit Hello World Funktion !
Content Elemente, Frontend Module ,Backend Module.

Ich bin PHP Symfony und Contao Neuling.  
Wir machen step by step ;)

Hello World !

