0. Adobe fonts account erstellen

1. Api Key generieren oder vorhandenen nutzen

https://fonts.adobe.com/account/tokens
	

2. fetch kit information ( mit postman zb)

	Header mit
	- X-Typekit-Token
	- bei value den Api token einsetzen.
	

3. KIT LISTE anfordern ( A list of kits owned by the authenticating user )
http://typekit.com/api/v1/json/kits
	
4. KIT information anfordern
https://typekit.com/api/v1/json/kits/ndz7jwu	
    
    RESPONSE :
    
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
                    "subset": "default",
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


5. Getting Information on Font ( using the font id)
https://typekit.com/api/v1/json/families/qhhz 

    
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
    "name": "Vollständige Bibliothek"
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



6. Die Id in diesen link einsetzen
https://use.typekit.net/ndz7jwu.css





    
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


7. Woff2 Datei downloaden

https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3


8. Source Url durch gedownloadete datei ersetzen (pfadangabe zur datei machen)

@font-face {
font-family:"bebas-neue-pro";
src:url("https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/be956f/00000000000000003b9b423e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:600;
}


9. Github project to rip / download adobe fonts
Input url from font like : https://fonts.adobe.com/fonts/bebas-neue-pro
http://badnoise.net/TypeRip/


