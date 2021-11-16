1. Google Account erstellen

2. in der google Devlopoer console google Webfonts hinzufügen

3. Api Schlüssel erstellen.

4. 

https://www.googleapis.com/webfonts/v1/webfonts?key=
https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR-API-KEY


5. Alle Verfügbaren Fonts ausgeben lassen
API schlüssel einsetzen
https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR-API-KEY



            "family": "Play",
            "variants": [
                "regular",
                "700"
            ],
            "subsets": [
                "cyrillic",
                "cyrillic-ext",
                "greek",
                "latin",
                "latin-ext",
                "vietnamese"
            ],
            "version": "v12",
            "lastModified": "2020-09-02",
            "files": {
                "regular": "http://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIjtI8Hp8Tx3A.ttf",
                "700": "http://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TOpc423nTJTM.ttf"
            },
            "category": "sans-serif",
            "kind": "webfonts#webfont"
        },
        
        
        
6. Für Woff 2 dateien den Font name hier einfügen
https://fonts.googleapis.com/css?family=Play



    
    /* cyrillic-ext */
    @font-face {
      font-family: 'Play';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtg2H68T.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Play';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtE2H68T.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Play';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtY2H68T.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Play';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvto2H68T.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Play';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvts2H68T.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Play';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtU2Hw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }