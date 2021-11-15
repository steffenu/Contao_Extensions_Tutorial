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



https://www.udemy.com/course/symfony-4-web-development-from-beginner-to-advanced/learn/lecture/13666312#overview
**autowire**

https://symfony.com/doc/current/service_container.html#the-autowire-option
Automatically injects dependencies in your services.

Makes this obsolete -->

    App\Services\Myservice:
        arguments:
            $second_service: '@App\Services\MysecondService'

**autoconfigure**

For example, to create a Twig extension, you need to create a class, register it as a service, and tag it with twig.extension.
But, with autoconfigure: true, you don't need the tag. 

Automaticlly registers yours services as commands , event subscribers, etc


**public**

By default all services are private 
public = false ... kann man auch weglassen

wenn public = true

dann kann man services direkt in controllern ansteuern...
ist aber nicht empfohlen ... sonder autowiring und denpendency injection


https://symfony.com/doc/current/controller/service.html


## DEFAULT SERVICES YAML

This is the default services yaml of a smyfony project

    # config/services.yaml
    services:
        # default configuration for services in *this* file
        _defaults:
            autowire: true      # Automatically injects dependencies in your services.
            autoconfigure: true # Automatically registers your services as commands, event subscribers, etc.
    
        # makes classes in src/ available to be used as services
        # this creates a service per class whose id is the fully-qualified class name
        App\:
            resource: '../src/*'
            exclude: '../src/{DependencyInjection,Entity,Tests,Kernel.php}'
    
        # ...

          # controllers are imported separately to make sure services can be injected
          # as action arguments even if you don't extend any base controller class


Thanks to this configuration, you can automatically use any classes from the src/ directory as a service, without needing to manually configure it. Later, you'll learn more about this in Service Container.


## Contao Example YAML

    services:
        _defaults:
            autoconfigure: true
            autowire: true
    
        Acme\ContaoHelloWorldBundle\:
            resource: ../../
            exclude: ../../{DependencyInjection,Resources,Model}
    
Die als nächstes folgende anweisungen sind obsolete.
Weil wir im oberen Beispiel definert haben das alle 
klassen in unserem bundle ordner als services genutzt werden können.

(dont quote me on this :D )  kann evtl doch Notwending sein
für action arguments wie oben beschrieben...)

If your controllers don't extend the AbstractController class, you must explicitly mark your controller services as public
   
    # controllers are imported separately to make sure services can be injected
    # as action arguments even if you don't extend any base controller class
    App\Controller\:
       resource: '../src/Controller/'
       tags: ['controller.service_arguments']


        Acme\ContaoHelloWorldBundle\Controller\:
            resource: ../../Controller
            public: true
    
        Acme\ContaoHelloWorldBundle\EventListener\:
            resource: ../../EventListener
            public: true


Registering your controller as a service is the first step, but you also need to update your routing config to reference the service properly, so that Symfony knows to use it.
Beispiele : 
    
    # config/routes.yaml
    automation:
      path: /automation
      controller: \Acme\ContaoHelloWorldBundle\Controller\BackendController::getContent
    
    # config/routes.yaml
    app.controller:
        resource: ../../Controller
        type: annotation

    # config/routes.yaml
    hello:
        path:     /hello
        controller: App\Controller\HelloController::index
        methods: GET