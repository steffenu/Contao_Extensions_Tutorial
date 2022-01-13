# Configuration Parameters

https://symfony.com/index.php/doc/current/configuration.html

Z.b Um Login Daten / Api Keys usw
zu speichern und dann im Controller abzurufen.

## Schritt 1
https://symfony.com/index.php/doc/current/configuration.html#configuration-parameters

In der Services.yaml parameter definieren

    # config/services.yaml
    parameters:
        # the parameter name is an arbitrary string (the 'app.' prefix is recommended
        # to better differentiate your parameters from Symfony parameters).
        app.admin_email: 'something@example.com'
    
        # boolean parameters
        app.enable_v2_protocol: true


## Schritt 2
https://symfony.com/index.php/doc/current/configuration.html#accessing-configuration-parameters

Im Controller die Parameter aufrufen :

    // src/Controller/UserController.php
    namespace App\Controller;
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\Response;
    
    class UserController extends AbstractController
    {
        // ...
    
        public function index(): Response
        {
            $projectDir = $this->getParameter('kernel.project_dir');
            $adminEmail = $this->getParameter('app.admin_email');
    
            // ...
        }
    }


# Environment variables

# Variante 1

https://symfony.com/doc/current/cloud/cookbooks/env.html#accessing-environment-variables

## Schritt 1

    in your .env file
    .env (with a leading dot) file located at the root of your project.
    APP_PARAM=paramvaluehere

## Schritt 2

Im Controller

echo $_SERVER['APP_PARAM'];

# Variante 2

## Schritt 1

    in your .env file
    APP_PARAM=paramvaluehere

## Schritt 2

    in your config/services.yaml
    
    parameters:
        app.paramname: '%env(APP_PARAM)%'

## Schritt 3

    in your controller
    
    $this->getParameter('app.paramname');



