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


**Weitere wichtige Unterthemen**

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


## Beispiel DCA 


    <?php
    
    declare(strict_types=1);
    
    /*
     * This file is part of Contao My Test Bundle.
     *
     * (c) Medy 2021 <medy@gmail.com>
     * @license GPL-3.0-or-later
     * For the full copyright and license information,
     * please view the LICENSE file that was distributed with this source code.
     * @link https://github.com/medy/contao-my-test
     */
    
    /**
     * Table tl_my_test
     */
    $GLOBALS['TL_DCA']['tl_my_test'] = array(
        // Config
        'config'      => array(
            'dataContainer'    => 'Table',
            'enableVersioning' => true,
            'sql'              => array(
                'keys' => array(
                    'id' => 'primary'
                )
            ),
        ),
        'list'        => array(
            'sorting'           => array(
                'mode'        => 2,
                'fields'      => array('title'),
                'flag'        => 1,
                'panelLayout' => 'filter;sort,search,limit'
            ),
            'label'             => array(
                'fields' => array('title'),
                'format' => '%s',
            ),
            'global_operations' => array(
                'all' => array(
                    'label'      => &$GLOBALS['TL_LANG']['MSC']['all'],
                    'href'       => 'act=select',
                    'class'      => 'header_edit_all',
                    'attributes' => 'onclick="Backend.getScrollOffset()" accesskey="e"'
                )
            ),
            'operations'        => array(
                'edit'   => array(
                    'label' => &$GLOBALS['TL_LANG']['tl_my_test']['edit'],
                    'href'  => 'act=edit',
                    'icon'  => 'edit.gif'
                ),
                'copy'   => array(
                    'label' => &$GLOBALS['TL_LANG']['tl_my_test']['copy'],
                    'href'  => 'act=copy',
                    'icon'  => 'copy.gif'
                ),
                'delete' => array(
                    'label'      => &$GLOBALS['TL_LANG']['tl_my_test']['delete'],
                    'href'       => 'act=delete',
                    'icon'       => 'delete.gif',
                    'attributes' => 'onclick="if(!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\'))return false;Backend.getScrollOffset()"'
                ),
                'show'   => array(
                    'label'      => &$GLOBALS['TL_LANG']['tl_my_test']['show'],
                    'href'       => 'act=show',
                    'icon'       => 'show.gif',
                    'attributes' => 'style="margin-right:3px"'
                ),
            )
        ),
        // Palettes
        'palettes'    => array(
            '__selector__' => array('addSubpalette'),
            'default'      => '{first_legend},title,selectField,checkboxField,multitextField;{second_legend},addSubpalette;{customHtml_legend},customHtml'
        ),
        // Subpalettes
        'subpalettes' => array(
            'addSubpalette' => 'textareaField',
        ),
        // Fields
        'fields'      => array(
            'id'             => array(
                'sql' => "int(10) unsigned NOT NULL auto_increment"
            ),
            'tstamp'         => array(
                'sql' => "int(10) unsigned NOT NULL default '0'"
            ),
            'title'          => array(
                'inputType' => 'text',
                'exclude'   => true,
                'search'    => true,
                'filter'    => true,
                'sorting'   => true,
                'flag'      => 1,
                'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'w50'),
                'sql'       => "varchar(255) NOT NULL default ''"
            ),
            'selectField'    => array(
                'inputType' => 'select',
                'exclude'   => true,
                'search'    => true,
                'filter'    => true,
                'sorting'   => true,
                'reference' => $GLOBALS['TL_LANG']['tl_my_test'],
                'options'   => array('firstoption', 'secondoption'),
                'eval'      => array('includeBlankOption' => true, 'tl_class' => 'w50'),
                'sql'       => "varchar(255) NOT NULL default ''",
            ),
            'checkboxField'  => array(
                'inputType' => 'select',
                'exclude'   => true,
                'search'    => true,
                'filter'    => true,
                'sorting'   => true,
                'reference' => $GLOBALS['TL_LANG']['tl_my_test'],
                'options'   => array('firstoption', 'secondoption'),
                'eval'      => array('includeBlankOption' => true, 'chosen' => true, 'tl_class' => 'w50'),
                'sql'       => "varchar(255) NOT NULL default ''",
            ),
            'multitextField' => array(
                'inputType' => 'text',
                'exclude'   => true,
                'search'    => true,
                'filter'    => true,
                'sorting'   => true,
                'eval'      => array('multiple' => true, 'size' => 4, 'decodeEntities' => true, 'tl_class' => 'w50'),
                'sql'       => "varchar(255) NOT NULL default ''"
            ),
            'addSubpalette'  => array(
                'exclude'   => true,
                'inputType' => 'checkbox',
                'eval'      => array('submitOnChange' => true, 'tl_class' => 'w50 clr'),
                'sql'       => "char(1) NOT NULL default ''"
            ),
            'textareaField'  => array(
                'inputType' => 'textarea',
                'exclude'   => true,
                'search'    => true,
                'filter'    => true,
                'sorting'   => true,
                'eval'      => array('rte' => 'tinyMCE', 'tl_class' => 'clr'),
                'sql'       => 'text NULL'
            ),
            'customHtml' => array(
                'eval' => array('tl_class' => 'clr', 'doNotShow' => true),
            )
        )
    );





---

## RECAP






