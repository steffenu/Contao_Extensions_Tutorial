# Typekit

https://github.com/typekit/webfontloader

## Adobe 


Der Typekit webfontloader ermöglicht es
durch angabe deines Adobe Kits

    WebFontConfig = {
      typekit: {
        id: 'xxxxxx'
      }
    };

direkt das 
 - zugehörige  @fontface CSS
 - convieneice classes `.tk-galette{font-family:"galette",sans-serif;}`
einzufügen.

 
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>Webfontloader</h1>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
        <script>
          WebFontConfig = {
            typekit: {
              id: "ndz7jwu",
            },
          };
    
          WebFont.load({
            google: {
              families: ["Droid Sans", "Droid Serif"],
            },
            typekit: {
              id: "ndz7jwu",
            },
          });
        </script>
      </body>
    </html>

.

    <style type="text/css">@font-face{font-family:galette;src:url(https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/ce5ad6/00000000000000003b9afbd6/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;font-display:auto;}@font-face{font-family:galette;src:url(https://use.typekit.net/af/b972f8/00000000000000003b9afbd2/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3) format("woff2"),url(https://use.typekit.net/af/b972f8/00000000000000003b9afbd2/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3) format("woff"),url(https://use.typekit.net/af/b972f8/00000000000000003b9afbd2/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3) format("opentype");font-weight:300;font-style:normal;font-display:auto;}@font-face{font-family:bebas-neue-pro;src:url(https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3) format("woff2"),url(https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3) format("woff"),url(https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3) format("opentype");font-weight:600;font-style:normal;font-display:auto;}</style>



## Google

https://github.com/typekit/webfontloader#google

Auch für Google


    WebFontConfig = {
      google: {
        families: ['Droid Sans', 'Droid Serif:bold']
      }
    };

    WebFontConfig = {
      google: {
        families: ['Open Sans Condensed:300,700']
      }
    };