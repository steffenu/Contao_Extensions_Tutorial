# Das Manager Plugin

Jedes Bundle muss über das Manger 
Plugin geladen werden.



    namespace Vendor\SomeBundle\ContaoManager;
    
    use Contao\CoreBundle\ContaoCoreBundle;
    use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
    use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
    use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
    use Knp\Bundle\MenuBundle\KnpMenuBundle;
    
    class Plugin implements BundlePluginInterface
    {
        public function getBundles(ParserInterface $parser)
        {
            return [
                BundleConfig::create(KnpMenuBundle::class)
                    ->setLoadAfter([ContaoCoreBundle::class]),
            ];
        }
    }

Wir sagen Contao hier mit setloadafter() : lade unser Bundle nach
dem Contao Core Bundle.


In dem Code snippet oben nutzen wir
das BundlePluginInterface zum laden von Bundles.


es gibt weitere Interfaces


BundlePluginInterface
ConfigPluginInterface
ExtensionPluginInterface
DependentPluginInterface
RoutingPluginInterface


Ich gehe hier nicht ins Detail
erwähnen möchte ich an dieser Stelle folgende
Interfaces

## RoutingPluginInterface

Routing Configuration laden eigene
Routen hinzuzufügen.

Um Annotationen verwendbar zu machen.

    namespace Vendor\SomeBundle\ContaoManager;
    
    use Contao\ManagerPlugin\Routing\RoutingPluginInterface;
    use Symfony\Component\Config\Loader\LoaderResolverInterface;
    use Symfony\Component\HttpKernel\KernelInterface;
    
    class Plugin implements RoutingPluginInterface
    {
        public function getRouteCollection(LoaderResolverInterface $resolver, KernelInterface $kernel)
        {
            $file = '@VendorSomeBundle/Resources/config/routes.yaml';
    
            return $resolver->resolve($file)->load($file);
        }
    }

.

**config/routes.yaml**

    app.controller:
        resource: ../src/Controller
        type: annotation


## ConfigPluginInterface

Eigene Config Dateien laden

    namespace Vendor\SomeBundle\ContaoManager;
    
    use Contao\ManagerPlugin\Config\ConfigPluginInterface;
    use Symfony\Component\Config\Loader\LoaderInterface;
    
    class Plugin implements ConfigPluginInterface
    {
        public function registerContainerConfiguration(LoaderInterface $loader, array $config)
        {
            $loader->load('@VendorSomeBundle/Resources/config/config.yaml');
        }
    }

**config/config.yaml**

    limits:
        limit: 3


Manager Plugin : https://docs.contao.org/dev/framework/manager-plugin/

## RECAP

- Bundles laden , verfügbar machen
- configs laden
- Annotationen über das laden der routing.yaml ermöglichen.