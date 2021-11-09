# Autoloading ``psr-4``

## Der Autoloading `psr-4` Standard

> https://getcomposer.org/doc/04-schema.md#psr-4 offical doc empfohlen ;)



#### PSR-4 mapping from namespaces to paths [OPTION 1]

    {
        "autoload": {
            "psr-4": {
                "Monolog\\": "src/",
                "Vendor\\Namespace\\": ""
            }
        }
    }


#### PSR-4 Fallback directory [OPTION 2]


If you want to have a fallback directory where any namespace will be looked for, you can use an empty prefix like:

        "psr-4": {
            "": "src/"
        },

#### PSR-4 same prefix in multiple directories [OPTION 3]

If you need to search for a same prefix in multiple directories, you can specify them as an array as such:



    {
        "autoload": {
            "psr-4": { "Monolog\\": ["src/", "lib/"] }
        }
    }




#### Classmap

Ordner oder einzelne Dateien laden.

    {
        "autoload": {
            "classmap": ["src/", "lib/", "Something.php"]
        }
    }
    
Mit wildcards
    {
        "autoload": {
            "classmap": ["src/addons/*/lib/", "3rd-party/*", "Something.php"]
        }
    }


https://www.marcosimbuerger.ch/tech-blog/php-autoloader.html

https://www.marcosimbuerger.ch/tech-blog/composer-verstehen-teil-5-autoloading.html

(Ordner Gross und kleinschreibung hier falsch ;) ... ORdnernamenGross
https://www.youtube.com/watch?v=xWgtKALpx9E


\<NamespaceName>(\<SubNamespaceNames>)*\<ClassName>

Offizielle doku(welche regeln müssen eingehalten werden) : https://www.php-fig.org/psr/psr-4/


# Contao Konventionen

> Contao  läd an mehrenen  Stellen diverse Ordner automatisch
> oder hat eigens Formatierungen.

## Template Name aus Controller Klasse

Nehmen wir folgenden Controller.
Der KlassenName ist ExampleController 
welcher AbstractContentElementController extended.

Contao macht erwartet bei dem Namen "ExampleController" ein Template
im templates Ordner<br>
-> ce_example

Der Klassenname wird lowercased und der teil "Controlle" abgeschnitten
.

    // src/Controller/ContentElement/ExampleController.php

    /**
     * @ContentElement(category="texts")
     */

    class ExampleController extends AbstractContentElementController
    {
        protected function getResponse(Template $template, ContentModel $model, Request $request): ?Response
        {
            return $template->getResponse();
        }
    }



Es ist aber auch möglich den Template Namen selbst zu bestimmen:
indem man die Annotation erweitert.

    /**
     * @ContentElement("my_example",
     *   category="texts", 
     *   template="ce_some_example",
     *   renderer="forward"
     * )
     */

## Bundle Name generierung / relative Pfade nicht nutzbar

Problem:
    
    // Controller/Backendcontroller.php
    class BackendController extends AbstractController
    {
        private $twig;
        
        public function __construct(TwigEnvironment $twig)
        {
            $this->twig = $twig;
        }
    
        public function __invoke(): Response
        {
            return new Response($this->twig->render(
                '@ContaoHelloWorld/my_backend_route.html.twig',
                []
            ));
        }
    }

Als Beispiel nehmen wir das rendern eines Twig Templates.
Eine Relative Pfadangabe (../Ressources/views/my_backend_route.twig)
wird von Contao nicht erlaubt.

Stattdessen erwartet Contao das man "Namspaced Paths"
verwendet.

**Die Frage hierbei ist wieder , wie erstellt Contao diese?**

sagen wir dein Namespace den du in deiner 
composer.json angegeben hast lautet

        "psr-4": {
            "Acme\ContaoHelloWorldBundle": "src/"
        }

Acme = **Vendor Name** <br>
HelloWorldBundle= **Bundle Name**

aus dem Bundle Namen generiert Contao
den Namespaced Bundle Name

Welcher  zu <br>
`@ContaoHelloWorld`

wird ... ( Vorsicht , der teil "Bundle wird wieder weggeschnitten")

Wo steht das in der Dokumentation ? Frag mich was leichteres :D...


    # config/services.yaml
    services:
        _defaults:
            autowire: true
            autoconfigure: true
            public: false
    
        App\:
            resource: ../src
            exclude: ../src/{Entity,Migrations,Model,Resources,Tests,Widget}
        
        App\Controller\:
            resource: ../src/Controller
            public: true

**autowire**

https://symfony.com/doc/current/service_container.html#the-autowire-option


**autoconfigure**

For example, to create a Twig extension, you need to create a class, register it as a service, and tag it with twig.extension.
But, with autoconfigure: true, you don't need the tag. 

## RECAP

- Versch. Optionen um mit psr-4 auto-zu-loaden ;)
- Contaos Konventionen kennen um Korrekt Pfadangaben zu machen