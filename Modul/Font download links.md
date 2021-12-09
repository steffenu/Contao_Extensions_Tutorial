# Downloading Fonts from Adobe & Google


Ziel ist es aus den Apis Responses von Google und Adobe 
Die dowloadable fonts links zu extrahieren.

https://xd.adobe.com/view/7637fc4b-8d07-436d-a25b-6b0ca8d3cfaa-2364/screen/c3a30ccf-cb2c-4035-877b-b6e0c7a37733/specs/


## Adobe

https://use.typekit.net/ewa3sph.css

**Alle fonts aus den jeweiligen Kit (adobe only)**

Es werden alle 
- Fonts
- Font Variants

eingebunden.

Sprich für Adobe fonts müssen wir uns keine Sorgen machen und 
nur die css datei `https://use.typekit.net/ewa3sph.css` einbinden ;).

Die download links für jede font weight finden wir hier ...

    @font-face {
    font-family:"stud";
    src:url("https://use.typekit.net/af/cfef3d/0000000000000000773595c5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/cfef3d/0000000000000000773595c5/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/cfef3d/0000000000000000773595c5/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
    }
    
    @font-face {
    font-family:"social-gothic";
    src:url("https://use.typekit.net/af/54fe7d/00000000000000007735ad18/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/54fe7d/00000000000000007735ad18/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/54fe7d/00000000000000007735ad18/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
    }
    
    
    .tk-stud { font-family: "stud",sans-serif; }
    .tk-social-gothic { font-family: "social-gothic",sans-serif; }




## Google

Webfonts Helper Api : https://google-webfonts-helper.herokuapp.com/api/fonts/advent-pro?download=zip&subsets=latin&variants=500,700,regular

https://fonts.googleapis.com/css?family=Advent%20Pro


### Schritt 1 

Alle google Fonts : https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAVabA3Bd-oAEJpItCGHgpdJZ-OmjfJ0fo


### Schritt 2
Gesuchten Font  wählen z.B Roboto und variants bekommen


     "family": "Roboto",
          "variants": [
            "100",
            "100italic",
            "300",
            "300italic",
            "regular",
            "italic",
            "500",
            "500italic",
            "700",
            "700italic",
            "900",
            "900italic"

### Schritt 3 
Link Constructen mit allen availabe Fonts

Enthält Italic Beispiel 
in der url wird : `:ital` hinzugefügt zur Font Family
und zusätliche werte 0,100  und 1,100  (0 für normal , 1 für italic)

    https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"

Enthählt "kein" italic Beispiel



    https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;200;300;400;500;600;700&display=swap

.
    
    /* greek */
    @font-face {
      font-family: 'Advent Pro';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/adventpro/v11/V8mAoQfxVT4Dvddr_yOwhTmtKI5Z.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Advent Pro';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/adventpro/v11/V8mAoQfxVT4Dvddr_yOwhTStKI5Z.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Advent Pro';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/adventpro/v11/V8mAoQfxVT4Dvddr_yOwhTqtKA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }