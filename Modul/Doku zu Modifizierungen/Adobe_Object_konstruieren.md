# 


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

## Schritt 1

**Kit Informationen anfordern**

    https://typekit.com/api/v1/json/kits/ndz7jwu

.

    {
        "kit": {
            "id": "ndz7jwu",
            "name": "Maennerhobby",
            "analytics": false,
            "domains": [
                "f"
            ],
            "families": [
                {
                    "id": "qhhz",
                    "name": "Bebas Neue Pro",
                    "slug": "bebas-neue-pro",
                    "css_names": [
                        "bebas-neue-pro"
                    ],
                    "css_stack": "\"bebas-neue-pro\",sans-serif",
                    "subset": "all",
                    "variations": [
                        "n6"
                    ]
                },
                {
                    "id": "vmnk",
                    "name": "Galette",
                    "slug": "galette",
                    "css_names": [
                        "galette"
                    ],
                    "css_stack": "\"galette\",sans-serif",
                    "subset": "default",
                    "variations": [
                        "n3",
                        "n7"
                    ]
                }
            ],
            "optimize_performance": false
        }
    }


## Schritt 2

**Font Family Informationen abrufen**

## `Anmerkung:`

im Feld `fvd` steht z.B `n1`

            "font_style": "normal",
            "font_variant": "normal",
            "font_weight": "100",

dies steht für font style normal und font weight 100


oder im Feld `fvd` steht z.B `i1`

        "font_style": "italic",
        "font_variant": "normal",
        "font_weight": "100",

    https://typekit.com/api/v1/json/families/qhhz


--> Man könnte also aus n1 oder i1
die font weigt und italic ableiten

Evtl könnte man sich so den ``Schritt 3`` sparen
welcher diese Werte vollkommen ausgeschrieben enthält

Es gibt aber kein Api limit... daher wäre es nur für Performance ;)


.

    {
        "family": {
            "id": "qhhz",
            "name": "Bebas Neue Pro",
            "slug": "bebas-neue-pro",
            "web_link": "http://typekit.com/fonts/bebas-neue-pro",
            "browse_info": {
                "capitals": [
                    "uppercase-lowercase"
                ],
                "classification": [
                    "sans-serif"
                ],
                "contrast": [
                    "low"
                ],
                "language": [],
                "number_style": [
                    "uppercase"
                ],
                "recommended_for": [
                    "headings",
                    "paragraphs"
                ],
                "weight": [
                    "heavy",
                    "light",
                    "regular"
                ],
                "width": [
                    "condensed"
                ],
                "x_height": [
                    "high"
                ]
            },
            "css_stack": "sans-serif",
            "description": null,
            "foundry": {
                "name": "Dharma Type",
                "slug": "dharma-type"
            },
            "libraries": [
                {
                    "id": "full",
                    "link": "/api/v1/json/libraries/full",
                    "name": "Full Library"
                }
            ],
            "variations": [
                {
                    "id": "qhhz:n1",
                    "link": "/api/v1/json/families/qhhz/n1",
                    "name": "Bebas Neue Pro Thin",
                    "fvd": "n1"
                },
                {
                    "id": "qhhz:i1",
                    "link": "/api/v1/json/families/qhhz/i1",
                    "name": "Bebas Neue Pro Thin Italic",
                    "fvd": "i1"
                },
                {
                    "id": "qhhz:n2",
                    "link": "/api/v1/json/families/qhhz/n2",
                    "name": "Bebas Neue Pro Light",
                    "fvd": "n2"
                },
                {
                    "id": "qhhz:i2",
                    "link": "/api/v1/json/families/qhhz/i2",
                    "name": "Bebas Neue Pro Light Italic",
                    "fvd": "i2"
                },
                {
                    "id": "qhhz:n3",
                    "link": "/api/v1/json/families/qhhz/n3",
                    "name": "Bebas Neue Pro Book",
                    "fvd": "n3"
                },
                {
                    "id": "qhhz:i3",
                    "link": "/api/v1/json/families/qhhz/i3",
                    "name": "Bebas Neue Pro Book Italic",
                    "fvd": "i3"
                },
                {
                    "id": "qhhz:n4",
                    "link": "/api/v1/json/families/qhhz/n4",
                    "name": "Bebas Neue Pro Regular",
                    "fvd": "n4"
                },
                {
                    "id": "qhhz:i4",
                    "link": "/api/v1/json/families/qhhz/i4",
                    "name": "Bebas Neue Pro Italic",
                    "fvd": "i4"
                },
                {
                    "id": "qhhz:n5",
                    "link": "/api/v1/json/families/qhhz/n5",
                    "name": "Bebas Neue Pro Middle",
                    "fvd": "n5"
                },
                {
                    "id": "qhhz:i5",
                    "link": "/api/v1/json/families/qhhz/i5",
                    "name": "Bebas Neue Pro Middle Italic",
                    "fvd": "i5"
                },
                {
                    "id": "qhhz:n6",
                    "link": "/api/v1/json/families/qhhz/n6",
                    "name": "Bebas Neue Pro Bold",
                    "fvd": "n6"
                },
                {
                    "id": "qhhz:i6",
                    "link": "/api/v1/json/families/qhhz/i6",
                    "name": "Bebas Neue Pro Bold Italic",
                    "fvd": "i6"
                }
            ]
        }
    }


## Schritt 3

**Variationen Informationen abrufen**

    https://typekit.com/api/v1/json/families/qhhz/n1

.

    {
        "variation": {
            "id": "qhhz:n1",
            "name": "Bebas Neue Pro Thin",
            "family": {
                "id": "qhhz",
                "link": "/api/v1/json/families/qhhz",
                "name": "Bebas Neue Pro"
            },
            "font_style": "normal",
            "font_variant": "normal",
            "font_weight": "100",
            "foundry": {
                "name": "Dharma Type",
                "slug": "dharma-type"
            },
            "libraries": [
                {
                    "id": "full",
                    "link": "/api/v1/json/libraries/full",
                    "name": "Full Library"
                }
            ],
            "postscript_name": "BebasNeuePro-Thin"
        }
    }


## Schritt 4

**Konstruieren des Objects**

Dies ist das Object was wir befüllen müssen aus der Adobe Api

    var __adobeFonts = {
      TestFont: {
        category: "sans-serif",
        variants: "400,400i",
        subsets: "latin",
      },

.


**category**

    "css_stack": "sans-serif",

Über ``css_stack`` können wir die Kategorie ideal übernehmen

    var __adobeFonts = {

      TestFont: {
        category: "sans-serif",

      },

**variants**

Die `variants: "400,400i",` müssen generiert werden

dazu können theoretisch die werden  aus `fvd`   `n1` oder `i1`
genutzt werden.

    var __adobeFonts = {
      Bebas Neue Pro: {
        category: "sans-serif",
        variants: "100,100i",
      },

Über den erstellten Endpunkt ``@Route("/contao/api/variations/{font_id}",``
können wir uns alle Variation Abkürzungen ausgeben lassen.

OUTPUT:
array('n3', 'i3', 'n4', 'i4', 'n5', 'i5', 'n7', 'i7', 'n8', 'i8')

diese können wir dann entweder umwandeln
    
    n3 = 300 oder i3 =300i

oder nochmal einen weiteren request machen für jede
einzelne variation. [ist evtl sicherer]

weil für das umwandeln bräuchte man eine vorgefertigte übersetzung
sprich n = normal  oder i = italic ... 
sofern aber andere buchstaben hinzukommen ... ? können fehler entstehen
evtl ändert sich da aber nichts ;).



**subsets**

"we offer a subset of characters, per Font Family, in each kit."

mit ``latin`` sollte der standartfall abgedeckt werden

    var __adobeFonts = {
      TestFont: {
        category: "sans-serif",
        variants: "400,400i",
        subsets: "latin",
      },
