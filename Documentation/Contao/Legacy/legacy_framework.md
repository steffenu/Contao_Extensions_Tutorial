https://docs.contao.org/dev/reference/services/#contaoframework

    use Contao\CoreBundle\Framework\ContaoFramework;
    
    class Example
    {
        private $framework;
    
        public function __construct(ContaoFramework $framework)
        {
            $this->framework = $framework;
        }
    
        public function execute()
        {
            $this->framework->initialize();
    
            $contentElement = \Contao\ContentModel::findByPk(…);
    
            $system = $this->framework->getAdapter(\Contao\System::class);
            $system->loadLanguageFile('default');
            
            // …
        }
    }
