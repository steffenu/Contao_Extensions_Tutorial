# Der DCA

> DCA steht für Data Array Container.

Der DCA beschreibt :

        1 wie Einträge gelistet, sortiert werden sollen
        2 wie backend Formulare gerender werden sollen für diese Einträge
        3 wie diese Einträge bearbeitet werden sollen und gespeichert werden


 **Also ein Container mit Arrays ?**  
 So siehts aus.

**Was für Arrays  ?** <br>
Die wichtigsten Arrays im Container sind:


    // contao/dca/tl_example.php
    $GLOBALS['TL_DCA']['tl_example'] = [
        'config' => […],
        'list' => […],
        'palettes' => […],
        'fields' => […],

    ];


A DCA consists of five main parts:

    Config
    Configuration of the table itself. ( Configurations  Arten = Table , File , Folder , CustomDriver)

    List
    Definition of how records are listed in the back end.

    Fields
    Definition of table columns.

    Palettes
    Back end form layout for editing records.

    Callbacks
    Callbacks within a Data Container Array. ( eigenes Html / Strings oder sonstiges einfügen / funktionen triggern)


**Weitere Wichtige Unterthemen**

- 1.1 Config
  - 1.2 SQL Relations
- 1.2 List
  - Operations
- 1.3 Palettes
  - Arranging fields
- 1.4 Fields Array
  - 1.4.1 Evaluation Array
- 1.5 Callbacks
  - Field Callbacks




---

## RECAP






