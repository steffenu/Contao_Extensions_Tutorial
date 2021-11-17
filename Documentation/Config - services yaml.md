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

 With this setting, you're able to `type-hint` arguments in the __construct() method of your services and the container will automatically pass you the correct arguments. 
    
    // type-hint
    public function __construct(TwigEnvironment $twig)


Wenn autowire in der defaults section auf true ist 

    services:
      _defaults:
        autowire: true

dann wird es auf allen services in der Datei angewandt


**ohne autowire**

Ohne Autowiring funktionert  `type-hint` nicht.

Wir müssen also manuell unserem Service konfigurieren:



`Prior to Symfony 3.3`, all services and (typically) arguments were explicitly configured: it was not possible to load services automatically and autowiring was much less common.

Both of these features are optional. And even if you use them, there may be some cases where you want to manually wire a service. For example, suppose that you want to register 2 services for the SiteUpdateManager class - each with a different admin email. In this case, each needs to have a unique service id:



    # config/services.yaml
    services:
        # ...
    
        # this is the service's id
        site_update_manager.superadmin:
            class: App\Service\SiteUpdateManager
            # you CAN still use autowiring: we just want to show what it looks like without
            autowire: false
            # manually wire all arguments
            arguments:
                - '@App\Service\MessageGenerator'
                - '@mailer'
                - 'superadmin@example.com'


        site_update_manager.normal_users:
            class: App\Service\SiteUpdateManager
            autowire: false
            arguments:
                - '@App\Service\MessageGenerator'
                - '@mailer'
                - 'contact@example.com'
    
        # Create an alias, so that - by default - if you type-hint SiteUpdateManager,
        # the site_update_manager.superadmin will be used
        App\Service\SiteUpdateManager: '@site_update_manager.superadmin'

: Manually Wiring : https://symfony.com/doc/current/service_container.html#services-wire-specific-service

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
    
Die folgenden Anweisungen sind obsolet.
Weil wir im oberen Beispiel definiert haben, das alle 
Klassen in unserem bundle Ordner als services genutzt werden können.

(don't quote me on this :D )  kann evtl.doch notwendig sein
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

**Beispiele** 
    
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