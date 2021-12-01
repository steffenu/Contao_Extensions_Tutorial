# Die Load funktion

Die load funktion baut das link element zusammen
welches im head eingefügt wird.

Das ist bereits implementiert für

- google
- localfonts

Adobe bietet uns hier KEINE möglichkeiten
über die variants und den font name 
einen solchen link zu generieren.



    <link href="https://fonts.googleapis.com/css?family=B612+Mono:400,400i,700,700i&amp;display=swap" rel="stylesheet" type="text/css">

.

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
              jQuery("head").append(
                jQuery("<link>", {
                  href: url,
                  rel: "stylesheet",
                  type: "text/css",
                })
              );
              break;

            case "local":
              this.options.debug && console.log("Loading local font " + font);
              if ("FontFace" in window) {
                new FontFace(
                  font,
                  "url('" + this.options.localFontsUrl + font + ".woff')"
                )
                  .load()
                  .then(function (font) {
                    document.fonts.add(font);
                  });
              } else {
                jQuery("head").append(
                  "<style> @font-face { font-family:'" +
                    font +
                    "'; src:local('" +
                    font +
                    "'), url('" +
                    this.options.localFontsUrl +
                    font +
                    ".woff') format('woff'); } </style>"
                );
              }
              break;
          }
        },


Über die Adobe Api kommen wir 


    src:url("https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;

.

Dies hat folgendes format

    src: "https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/{format}{?primer,subset_id,fvd,v}"

.

    {format}{?primer,subset_id,fvd,v}
    
    l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")

b = "k" === b ? ra(a, ["l", "d", "a"], c) : ra(a, [b], c);

**{format}**
a = otf font
l = woff2
d = woff

primer - 7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191
fvd - n7
v - 3

{
    "weight": "700",
    "style": "normal",
    "display": "auto",
    "primer": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"
}

.
    
    @import url("https://p.typekit.net/p.css?s=1&k=ndz7jwu&ht=tk&f=378.1151.44428&a=28148133&app=typekit&e=css");
    
    @font-face {
    font-family:"galette";
    src:url("https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
    }
    
    @font-face {
    font-family:"galette";
    src:url("https://use.typekit.net/af/b972f8/00000000000000003b9afbd2/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/b972f8/00000000000000003b9afbd2/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/b972f8/00000000000000003b9afbd2/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:300;
    }
    
    @font-face {
    font-family:"bebas-neue-pro";
    src:url("https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:600;
    }
    
    .tk-galette { font-family: "galette",sans-serif; }
    .tk-bebas-neue-pro { font-family: "bebas-neue-pro",sans-serif; }
