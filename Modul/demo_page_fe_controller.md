# Building a Demo Page


### CSS einfügen.

( weiteres im Ordner Doku zu Modifizierungen - Adobe Object Konstruieren)

### Font Downlaod Links Erzeugen via JS

Aus dem Link

https://use.typekit.net/ewa3sph.js

ist es möglich sich die download links zu "konstruieren"




### Font Downlaod Links Parsen aus CSS

https://use.typekit.net/ewa3sph.css

hier sind die 3 verschiedenen font typen

- woff 2
- woff
- opentype

Links zu finden.



## STEP 1

    Interstate Condensed:800
    Aclonica:400
    ABeeZee:400
    Alatsi:400
    Interstate:400
    Aladin:400
    Akronim:400
    Alef:400

Im Controller aus diesen Informationen von Font Picker welche wir
in der Datenbank gepseichert haben machen , wollen wir im 
template folgende Tags erzeugen.

    <ul>
    <li style="font-family: interstate-condensed; font-weight:800"><h1>Heading 1</h1></li>
    ...
    </ul>


Problem wir brauchen wieder den css name welcher manchmal nicht ganz
identisch ist mit dem Font Name



## STEP 2

Download links im Frontend anbieten.

    <a href="http://server/site/test.txt" download="test001.txt">Download Your File</a>

> Dropdown und download Button erzeugen
> Datei umbenennen
> 
> a = otf font = stud.otf 
> l = woff2 = stud.woff2
> d = woff = stud.woff

Beispiel :

font-family: "stud";
-woff 2
-woff
-opentype



