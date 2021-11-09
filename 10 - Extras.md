
# Type Hinting





# PageModel and Request Object

In Symfony you can require the current Request 
object to be passed into your invokable controller
or action method as an argument (see the Controller
documentation). Contao also extends Symfony’s argument
value resolver and thus allows you to automatically pass
the PageModel of the page controller’s page as an argument
as well:

https://symfony.com/doc/4.4/controller.html#the-request-object-as-a-controller-argument





## The Request Object


    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\HttpFoundation\Response;
    
    public function index(Request $request): Response
    {
        $request->isXmlHttpRequest(); // is it an Ajax request?
    
        $request->getPreferredLanguage(['en', 'fr']);
    
        // retrieves GET and POST variables respectively
        $request->query->get('page');
        $request->request->get('page');
    
        // retrieves SERVER variables
        $request->server->get('HTTP_HOST');
    
        // retrieves an instance of UploadedFile identified by foo
        $request->files->get('foo');
    
        // retrieves a COOKIE value
        $request->cookies->get('PHPSESSID');
    
        // retrieves an HTTP request header, with normalized, lowercase keys
        $request->headers->get('host');
        $request->headers->get('content-type');
    }



https://symfony.com/doc/4.4/controller.html#the-request-object-as-a-controller-argument