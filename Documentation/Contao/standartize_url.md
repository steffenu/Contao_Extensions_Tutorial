/**
 * Auto-generate the alias if it has not been set yet
 * @param mixed
 * @param \DataContainer
 * @return string
 * @throws \Exception
 */
public function generateAlias($varValue, DataContainer $dc)
{
    $autoAlias = false;
    // Generate alias if there is none
    if ($varValue == '') {
        $autoAlias = true;
        #$varValue = standardize(StringUtil::restoreBasicEntities($bereich . '-' . $dc->activeRecord->title));
        $varValue = standardize(StringUtil::restoreBasicEntities($dc->activeRecord->title));
    }
    $objAlias = $this->Database->prepare("SELECT id FROM " . $dc->table . " WHERE alias=?")
        ->execute($varValue);
    // Check whether the alias exists
    if ($objAlias->numRows > 1 && !$autoAlias)
    {
        throw new Exception(sprintf($GLOBALS['TL_LANG']['ERR']['aliasExists'], $varValue));
    }
    return $varValue;
}



IM DCA
############################


'alias' => array
(
    'label'                   => &$GLOBALS['TL_LANG'][$strName]['alias'],
    'exclude'                 => true,
    'inputType'               => 'text',
    'eval'                    => array('rgxp'=>'alias', 'unique'=>true, 'maxlength'=>128, 'tl_class' => 'w50'),
    'save_callback' => array
    (
        array('tl_recipes', 'generateAlias')
    ),
    'sql'                     => "varchar(128) COLLATE utf8_bin NOT NULL default ''"
),