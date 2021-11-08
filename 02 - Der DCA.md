# Der DCA

> DCA steht für Data Array Container.

Was soll dir das jetzt sagen ?

Der DCA beschreibt :

        1 wie Einträge gelistet, sortiert werden sollen
        2 wie backend Formulare gerender werden sollen für diese Einträge
        3 wie diese Einträge bearbeitet werden sollen und gespeichert werden


 **Also ein Container mit Arrays ?**  
 So siehts aus.

**Was für Arrays  ?** <br>
Gute Frage ! Die wichtigsten Arrays im Container sind:


    // contao/dca/tl_example.php
    $GLOBALS['TL_DCA']['tl_example'] = [
        'config' => […],
        'list' => […],
        'palettes' => […],
        'fields' => […],

    ];


- 1.1 Config
- 1.2 SQL Relations
- 1.3 List
- 1.4 Palettes
- 1.5 Fields Array
- 1.6 Evaluation Array


A DCA consists of five main parts:

    Config
    Configuration of the table itself. ( Configurations  Arten = Table , File , Folder , CustomDriver)

    SQL Configuration
    The $GLOBALS['TL_DCA']['tl_example']['config']['sql'] part of your DCA configuration allows you to set various SQL properties for your table (and thus is only relevant for the Table data container).

    List
    Definition of how records are listed in the back end.

    Fields
    Definition of table columns.

    Palettes
    Back end form layout for editing records.

    Callbacks
    Callbacks within a Data Container Array. ( eigenes Html / Strings oder sonstiges einfügen / funktionen triggern)


---

## RECAP






