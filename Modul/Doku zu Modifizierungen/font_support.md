# Font Support


dem jQuery Fontpicker picker
lokale fonts laden lassen



### Schritt 1
**Fonts Upload**

        'fontUpload'    => array(
            'inputType' => 'fileTree',
            'exclude'   => true,

            'reference' => $GLOBALS['TL_LANG']['tl_backend_starter'],
            'eval'      => array('tl_class' => 'w50','multiple'=>true, 'fieldType'=>'checkbox', 'files'=>true),
            'sql' => "blob NULL"

        ),


Output in Backend wenn man einen Ordner auswählt :

    files/content/schriftentool/Salsarico

Note : Es werden dann alle Dateien in dem Ordner hochgeladen


Einzelauswahl Fonts Output :

     files/content/schriftentool/Salsarico/Agenda-Medium.woff2 (21,9 KiB)
     files/content/schriftentool/Salsarico/Agenda-Semibold.woff2 (12,9 KiB)

    
    // bei Eval
    // 'fieldType'=>'checkbox', / für multiple selects
    // 'fieldType'=>'radio' für single selcts,

    //files	true/false (bool)	

    // If true files and folders will be shown. If false, only folders will be shown. Applies to file trees only.

### Schritt 2
**Ordner wird ausgewählt**

### Schritt 3
**Font Pickers schauen in nach dateien aus gewählten ordner**
z.B: 
        
     files/content/schriftentool/Salsarico/Agenda-Medium.woff2 (21,9 KiB)

### Schritt 4

Alle ausgewählten "uploaded fonts"
werden zu einer liste hinzugefügt

(submitonchange aktiv auf den upload button)

[  
0 => array:3 [▼
    "font" => "Agenda-Medium"
    "filetype" => "woff2"
  ],

1 => array:3 [▼
    "font" => "Agenda-Medium"
    "filetype" => "woff2"
  ]
]

Agenda-Medium.woff2 


### Schritt 5

Dem jQeuery Picker müssen die uploaden fonts übergeben werden 

** Fonts in jQuery Picker anzeigen zur auswahl**

-font name 
-font weight



