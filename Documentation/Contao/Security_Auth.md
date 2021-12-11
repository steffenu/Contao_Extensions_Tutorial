# Getting User Object im Controller
- BackendUser (Benutzer)
- FrontendUser (Mitglied)

## Via Abstractcontroller

    <?php
    
    namespace BohnMedia\MemberStatsBundle\Controller;
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\Response;
    
    class MemberStatsController extends AbstractController
    {
    
        public function update($page): Response
        {    
        
            // Get frontend user id
            $userId = $this->getUser()->id;
    
            // Return user id
            return $this->json(['userId' => $userId]);
        }
    }

## via Security Helper

https://docs.contao.org/dev/reference/services/#security-helper

    use Contao\BackendUser;
    use Contao\FrontendUser;
    use Symfony\Component\Security\Core\Security;
    
    class Example
    {
        private $security;
    
        public function __construct(Security $security)
        {
            $this->security = $security;
        }
    
        public function execute()
        {
            // Check for admin back end user role
            if ($this->security->isGranted('ROLE_ADMIN')) {
                // …
            }
    
            // Check for regular back end user role
            if ($this->security->isGranted('ROLE_USER')) {
                // …
            }
    
            // Check for front end user role
            if ($this->security->isGranted('ROLE_MEMBER')) {
                // …
            }
    
            // Get current back end user
            if (($user = $this->security->getUser()) instanceof BackendUser) {
                // …
            }
    
            // Get current front end user
            if (($user = $this->security->getUser()) instanceof FrontendUser) {
                // …
            }
        }
    }

## PARSING TOKENS

## Simple Token Parser

https://docs.contao.org/dev/reference/services/#simpletokenparser

    use Contao\CoreBundle\Util\SimpleTokenParser;
    
    class Example
    {
        private $parser;
    
        public function __construct(SimpleTokenParser $parser)
        {
            $this->parser = $parser;
        }
    
        public function execute()
        {
            // Token replacement
            $output = $this->parser->parse(
                'I like ##cms##.',
                ['cms' => 'Contao']
            );
    
            // Conditional expressions
            $output = $this->parser->parse(
                'This is {if value>=10}big{else}small{endif}',
                ['value' => 20]
            );
        }
    }


## Simple Token Checker
https://docs.contao.org/dev/reference/services/#tokenchecker

This service let’s you query information of the Contao related security tokens, if present.  
 It allows you to check, whether a token for a front end user, back end user or the  
 preview mode is present. It also allows you to retrieve the username of the token.

    use Contao\CoreBundle\Security\Authentication\Token\TokenChecker;
    use Contao\BackendUser;
    use Contao\FrontendUser;
    
    class Example
    {
        private $tokenChecker;
    
        public function __construct(TokenChecker $tokenChecker)
        {
            $this->tokenChecker = $tokenChecker;
        }
    
        public function execute()
        {
            if ($this->tokenChecker->hasFrontendUser()) { /* … */ }
            if ($this->tokenChecker->hasBackendUser()) { /* … */ }
            if ($this->tokenChecker->isPreviewMode()) { /* … */ }
            if (null !== ($frontendUsername = $this->tokenChecker->getFrontendUsername())) { /* … */ }
            if (null !== ($backendUsername = $this->tokenChecker->getBackendUsername())) { /* … */ }
        }
    }