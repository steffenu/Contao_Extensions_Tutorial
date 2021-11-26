# Änderungen an der font-picker Bibilothek

![](https://i.imgur.com/rgC1CXI.png)

**Ziel**
- einfügen einer neuen Kategorie


## Schritt 1


**Creating a List**


Korrektes Format ... Anmerkung 

https://fonts.adobe.com/docs/api/terminology

### Subset
    A “Subset” refers to a set of the available characters 
    in a typeface. Each Font Variation includes multiple characters, 
    including many that are not commonly used. To include all of these characters
    increases the size of the font file, so we offer the ability to choose a subset of characters, per Font Family, in each kit.

.

    var __adobeFonts = {
      // This list was last updated on December 8, 2020
      TestFont: {
        category: "sans-serif",
        variants: "400,400i",
        subsets: "latin",
      },
      TestFont2: {
        category: "sans-serif",
        variants: "400,400i",
        subsets: "latin",
      },
    };


Diesen Code Block vereinfacht 

        // TODO
        // Modify this Code Block for loading Adobe Fonts
        // Hier sollen dann alle Fonts Aus dem Aktuellen Kit landen
        // oder evtl alle Adobe Fonts die es gibt.
        /*         if (options.googleFonts && Array.isArray(options.googleFonts)) {
          // User supplied an array of Google fonts.
          var googleFonts = {},
            fontFamily;
          for (var f = 0; f < options.googleFonts.length; f++) {

						// f = 1 bsp
            fontFamily = options.googleFonts[f];
						
            //googleFonts[1] = __googleFonts[sonmefont];
            googleFonts[fontFamily] = __googleFonts[fontFamily];
          }
          options.googleFonts = googleFonts;
        } else if (false !== options.googleFonts) {
          // If user did not supply a subset of Google Fonts, list them all

          // creating a font object containing 
          // all fonts to be used
          options.adobeFonts = __adobeFonts;

        } */

Vereinfacht (User selected code entfernt)

        options.googleFonts = __googleFonts;
        console.log("__googleFonts nacher:", __googleFonts);

        // ALL Adobe Fonts in Object
        // TODO Create it from Adobe Kit Response
        options.adobeFonts = __adobeFonts;


## Schritt 2

**Adobe Fonts in Head einfügen**

**Anmerkung**
In der Bibliothek wird Google Api genutzt und
in der loadFont function der link zum einfügen für das
zugehörige CSS generiert.


    <link href="https://fonts.googleapis.com/css?family=Andika:400&amp;display=swap" rel="stylesheet" type="text/css">



enthalten in dem link ist der CSS code

    /* latin-ext */
    @font-face {
      font-family: 'Andika';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/andika/v12/mem_Ya6iyW-LwqgwZLYQarw.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Andika';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/andika/v12/mem_Ya6iyW-LwqgwarYQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

Code zum generieren der links aus der Bibliothek

        // TODO INSERT ADOBE FONTS INTO HEAD
        loadFont: function (type, font) {
          if (fontsLoaded[font]) {
            return;
          }
          fontsLoaded[font] = true;

          switch (type) {
            case "google":
              this.options.debug &&
                console.log("Loading Google font " + font + " from " + url);

              // TODO komplettes Kit Css einfügen
              var url =
                "https://fonts.googleapis.com/css?family=" +
                font.replace(/ /g, "+") +
                ":" +
                this.options.googleFonts[font].variants +
                "&display=swap";
              $("head").append(
                $("<link>", {
                  href: url,
                  rel: "stylesheet",
                  type: "text/css",
                })
              );
              break;


## Schritt 3

**Click Function Anpassen**

**Anmerkung**

In der Click function
wird der code generiert wenn man auf ein item klickt.
Es wird dabei augeklappt und diverse buttons generiert
das sind die dazugehörigen font weights die man auswählen kann
100 , 200 , 300 usw

    click: function (e, el) {...}



## Zwischenschritt

**Entfernen der Sektion Favourites**

**Anmerkung**
Ich entferne Sektionen des Font Pickers die nicht benötigt werden.

Den Funktionsaufruf auskommentiert .. Hat wunderbar geklappt :D

    //this.getFavorites(); // List favorites & recents


## Schritt 4


**Anpassen der Funktion getFontsList**

Hier werden die Kategorien erstellt (divider genannt hier)
und die zugehörigen fonts unter diesen divider eingfügt.


![](https://i.imgur.com/DihHhnd.png)

hier wird die liste aus Schritt 1 genutzt um den ausgedachten testfont anzuzeigen.
Die Challenge wird in den weiteren Schritten sein 
die Liste für die Adobe Fonts aus unser API response von "Adobe" 
korrekt zusammen zu bauen.

Sofern die `Adobe Api` nicht die passenden / selben Informationen liefert
wie die `Google Api` müssen ggf Anderungen /Kompromisse gemacht werden.

    this.options.adobeFonts


          // TODO Adobe fonts
          if (objLength(this.options.adobeFonts) > 0) {
            $li = $('<li class="fp-divider">' + "Adobe Fonts" + "</li>");
            // TODO Fonts hinzufügen
            $frag.append($li[0]);
            
            for (fontFamily in this.options.adobeFonts) {
              console.log("fontFamily:", fontFamily);
              append("adobe", fontFamily);
            }
          }



    getFontsList: function () {
              var self = this,
                $frag = $(document.createDocumentFragment()), // Use a document fragment to increase performance
                $li,
                fontFamily;
    
              // TODO handles adding list items
    
              /* 
                        <li data-font-type="google" data-font-family="Abel" class="" style="font-family: Abel;">Abel <small>sans-serif</small></li>
                        */
              function append(fontType, fontFamily) {
                var font = self.allFonts[fontType][fontFamily],
                  small = "";
                if (!font) {
                  return;
                } // Continue if font does not exist
    
                if (font.category || font.variants) {
                  var items = [];
                  if (font.category) {
                    items.push(font.category);
                  }
                  if (self.options.variants && font.variants) {
                    var nr = font.variants.split(",").length;
                    if (nr > 1) {
                      items.push(nr + " " + self.dictionary["styles"]);
                    }
                  }
                  small = " <small>" + items.join(", ") + "</small>";
                }
    
                $li = $("<li>", {
                  "data-font-type": fontType,
                  "data-font-family": fontFamily,
                }).html(fontFamily + small);
    
                $frag.append($li[0]);
              }
    
              /*           // Local fonts
              if (objLength(this.options.localFonts) > 0) {
                $li = $(
                  '<li class="fp-divider">' +
                    this.dictionary["localFonts"] +
                    "</li>"
                );
                $frag.append($li[0]);
                for (fontFamily in this.options.localFonts) {
                  append("local", fontFamily);
                }
              } */
    
              // TODO Adobe fonts
              if (objLength(this.options.adobeFonts) > 0) {
                $li = $('<li class="fp-divider">' + "Adobe Fonts" + "</li>");
                // TODO Fonts hinzufügen
                $frag.append($li[0]);
                for (fontFamily in this.options.adobeFonts) {
                  console.log("fontFamily:", fontFamily);
                  append("adobe", fontFamily);
                }
              }
    
              // Google fonts
              if (objLength(this.options.googleFonts) > 0) {
                $li = $(
                  '<li class="fp-divider">' +
                    this.dictionary["googleFonts"] +
                    "</li>"
                );
    
                $frag.append($li[0]);
                for (fontFamily in this.options.googleFonts) {
                  //console.log("fontFamily:", fontFamily);
                  append("google", fontFamily);
                }
              }
    
              this.$results = $("<ul>", {
                class: "fp-results",
                tabindex: 0,
              }).append($frag);
            },


## Schritt 5

****

        this.setupHtml();
        this.bindEvents();

Die setupHtml Methode ruft dann die einzelnen Methoden auf
die wir Modifiziert haben und erzeugt damit ein "Modal".


## Zusammenfassung

1. Generieren eines Font Objects für Adobe welches
    die Fonts, Font weights beinhaltet (Für Google Fonts ist so ein Object vorhanden im Code , jedoch ist die Adobe Api anders)
2. Die zugehörigen css import code im header einfügen via `loadFont` Funktion
3. `click` Funktion anpassen für unsere Adobe Fonts
4. getFontsList anpassen um eine Adobe Kategorie anzuzeigen mit den Fonts aus einem Adobe Kit
   bsp. Kit = MeinProject. Dann tauchen z.B Font1 und Font2 unter Adobe Fonts auf.
5. Die setupHtml() methode ruft unsere modifizierten Methoden auf.