# CORS


https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader


you may encounter a "not allowed by Access-Control-Allow-Headers in preflight response" exception when you send requests across domains. In this situation, you need to set up the Access-Control-Allow-Headers in your response header at server side.

Sprich der Server muss CORS erlauben und du musst die richten Header schicken.



https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers


Wenn du ohne Acces Control Header einen Request schickst
kommt eine Fehlermeldung das diese Fehlt.

Wenn du dann hinzufügst Access-Control-Allow-Origin : *
wird es verweigert.

    
    Regular web pages can use the XMLHttpRequest object to send and receive data from remote servers, but they're limited by the same origin policy. 

Sprich sofern der Server nicht explizit Cors erlaubt kannst du **nichts** machen ;)



From typekit website :
in the future we plan to add delegated authentication flows allowing an app to request access to a user accounts.

Lösung : 

Du musst authenticated request über den Server machen und nicht über die javscript / HTML Seite.
Weil du sonst durch CORS aufgehalten wirst da du dich in der brwoser umgebung befindest.

Alternativ (nicht emfohlen) könntest du einen Request zu einem Server machen (welcher CORS erlaubt)
der dann für dich den request ausführt. 

oder JSONP : http://jsonp.eu/

- funktioniert nur für GET request
https://www.sitepoint.com/jsonp-examples/


var script = document.createElement('script');
script.src = 'http://typekit.com/api/v1/json/kits?token=15ca9563e40e2e928a54842da8acd664a36d7061'';

document.querySelector('head').appendChild(script);

## Empfohlene Lösung

Sofern du Zugriff auf deinen eigenen Server hast

1. Erstelle eine Route welche den Request ausführt 


    <?php
    
    // src/Controller/BackendController.php
    namespace Steffenu\StarterBundle\Controller\BackendRoutes;
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Component\HttpFoundation\Response;
    use Symfony\Contracts\HttpClient\HttpClientInterface;
    
    /**
     * @Route("/contao/kits",
     *     name=KitsController::class,
     *     defaults={"_scope": "backend"}
     * )
     */
    class KitsController extends AbstractController
    {
        
        public function __construct(HttpClientInterface $client)
        {
            $this->client = $client;
        }
    
        public function __invoke(): Response
        {
              /* 
            HTTP REQUEST
            */
            
            $response = $this->client->request(
                'GET',
                'https://typekit.com/api/v1/json/kits' , [
                    'headers' => [
                        'X-Typekit-Token' => 'YOUR_TOKEN_HERE',
                        'Content-Type' => 'application/json',
                    ]
                ]
            );
    
            $content = $response->toArray();
    
            dump($content);
    
            return new Response("Some Response");
        }
    }

2. Lass dein  Javscript den request zu deiner Route machen (dann ist es same origin)
somit hast du dann die Daten ;)

## Alternative Lösung

(nur empfohlen sofern dir egal ist ob third party den datenverkehr leitet)


Benutze ein third party service um den request auszuführen

https://allorigins.win/
