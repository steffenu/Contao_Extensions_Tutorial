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

Um unsere Module flexibel zu gestalten mit
der aktuellen Symfony Syntax.

Dann haben wir eine Basis ;).

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

Zum jetzigen Zeitpunkt , was sind
die Ordner die uns interessieren.

    Ressource
      config
      dca
      languages
      templates


Wir erweitern dies später mit Controllern ,
Models .. the latest shit right ;).

Contao hat ein "Skeleton Bundle"
was ich perönlich als "wenig hilfreich" empfand.

Deswegen möchte ich dir mein Eigenes
Skeleton geben.

Dort sind alle 3 Bausteine mit drinne
und direkt mit Hello World Funktion !
Content Elemente, Frontend Module ,Backend Module.






Ich will ich mit diesem Tutorial
den Fokus auf Extensions legen und
auch diverse Symfony feinheiten erwähnen bzw  
direkt mit einbinden. Und nicht nur verlinken :D  
so nach dem Motto "steht ja irgendwo".

Ich bin PHP Symfony und Contao Neuling.  
Ohne solide Vorkenntnisse war einiges  
schwer nachvollziehbar aus der Dokumentation.

Vor allem Beispiele fehlen einfach.
Wir machen step by step ;)
Hello World !

