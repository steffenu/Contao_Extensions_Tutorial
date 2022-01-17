

    
    Autowirable Types
    =================
    
     The following classes & interfaces can be used as type-hints when autowiring:
     
     Contao\CoreBundle\Config\ResourceFinderInterface (contao.resource_finder)
     
     Contao\CoreBundle\Framework\ContaoFramework (contao.framework)
     
     Contao\CoreBundle\Framework\ContaoFrameworkInterface (contao.framework)
     
     Contao\CoreBundle\Image\ImageFactoryInterface (contao.image.image_factory)
     
     Contao\CoreBundle\Image\PictureFactoryInterface (contao.image.picture_factory)
     
     Contao\CoreBundle\Picker\PickerBuilderInterface (contao.picker.builder)
     
     Contao\CoreBundle\Routing\ScopeMatcher (contao.routing.scope_matcher)
     
     Contao\CoreBundle\Security\Authentication\Token\TokenChecker (contao.security.token_checker)
     
     Contao\CoreBundle\Security\TwoFactor\Authenticator (contao.security.two_factor.authenticator)
     
     Contao\CoreBundle\Security\TwoFactor\TrustedDeviceManager (contao.security.two_factor.trusted_device_manager)
     
     Contao\CoreBundle\Slug\Slug (contao.slug)
     
     Contao\ManagerBundle\HttpKernel\JwtManager (contao_manager.jwt_manager)
     
     Interface for annotation readers.
     Doctrine\Common\Annotations\Reader (annotations.cached_reader)
     
     Doctrine\Common\Persistence\ManagerRegistry (doctrine)
     
     A wrapper around a Doctrine\DBAL\Driver\Connection that adds features like events, transaction isolation levels, configuration, emulated transaction nesting, lazy connecting and more.
     Doctrine\DBAL\Connection (doctrine.dbal.default_connection)
     Doctrine\DBAL\Connection $defaultConnection (doctrine.dbal.default_connection)
     
     Connection interface. Driver connections must implement this interface.
     Doctrine\DBAL\Driver\Connection (doctrine.dbal.default_connection)
     
     EntityManager interface
     Doctrine\ORM\EntityManagerInterface (doctrine.orm.default_entity_manager)
     Doctrine\ORM\EntityManagerInterface $defaultEntityManager (doctrine.orm.default_entity_manager)
     
     Contract covering object managers for a Doctrine persistence layer ManagerRegistry class to implement.
     Doctrine\Persistence\ManagerRegistry (doctrine)
     
     The CacheManager is a CacheInvalidator but adds symfony Route support and response tagging to the framework agnostic FOS\HttpCache\CacheInvalidator.
     FOS\HttpCacheBundle\CacheManager (fos_http_cache.cache_manager)
     
     FOS\HttpCacheBundle\Http\SymfonyResponseTagger (fos_http_cache.http.symfony_response_tagger)
     
     An HTTP caching reverse proxy client.
     FOS\HttpCache\ProxyClient\ProxyClient (fos_http_cache.proxy_client.symfony)
     
     Service for Response cache tagging.
     FOS\HttpCache\ResponseTagger (fos_http_cache.http.symfony_response_tagger)
     
     Knp\Bundle\TimeBundle\DateTimeFormatter (time.datetime_formatter)
     
     Interface implemented by the factory to create items
     Knp\Menu\FactoryInterface (knp_menu.factory)
     
     Interface implemented by the item matcher
     Knp\Menu\Matcher\MatcherInterface (knp_menu.matcher)
     
     Knp\Menu\Provider\MenuProviderInterface (knp_menu.menu_provider.chain)
     
     Knp\Menu\Util\MenuManipulator (knp_menu.manipulator)
     
     CacheItemPoolInterface generates CacheItemInterface objects.
     Psr\Cache\CacheItemPoolInterface (cache.app)
     Psr\Cache\CacheItemPoolInterface $doctrineResultCachePool (doctrine.result_cache_pool)
     Psr\Cache\CacheItemPoolInterface $doctrineSystemCachePool (doctrine.system_cache_pool)
     
     Describes the interface of a container that exposes methods to read its entries.
     Psr\Container\ContainerInterface (service_container) - deprecated
     Psr\Container\ContainerInterface $parameterBag (parameter_bag)
     
     Defines a dispatcher for events.
     Psr\EventDispatcher\EventDispatcherInterface (event_dispatcher)
     
     Psr\Http\Client\ClientInterface (psr18.http_client)
     
     Describes a logger instance.
     Psr\Log\LoggerInterface (monolog.logger)
     Psr\Log\LoggerInterface $cacheLogger (monolog.logger.cache)
     Psr\Log\LoggerInterface $consoleLogger (monolog.logger.console)
     Psr\Log\LoggerInterface $contaoLogger (monolog.logger.contao)
     Psr\Log\LoggerInterface $doctrineLogger (monolog.logger.doctrine)
     Psr\Log\LoggerInterface $httpClientLogger (monolog.logger.http_client)
     Psr\Log\LoggerInterface $lockLogger (monolog.logger.lock)
     Psr\Log\LoggerInterface $phpLogger (monolog.logger.php)
     Psr\Log\LoggerInterface $requestLogger (monolog.logger.request)
     Psr\Log\LoggerInterface $routerLogger (monolog.logger.router)
     Psr\Log\LoggerInterface $securityLogger (monolog.logger.security)
     Psr\Log\LoggerInterface $translationLogger (monolog.logger.translation)
     
     Scheb\TwoFactorBundle\Model\PersisterInterface (scheb_two_factor.persister.doctrine)
     
     Scheb\TwoFactorBundle\Security\TwoFactor\Provider\TwoFactorFormRendererInterface (scheb_two_factor.security.form_renderer)
     
     Scheb\TwoFactorBundle\Security\TwoFactor\TwoFactorFirewallContext (scheb_two_factor.firewall_context)
     
     SessionHandlerInterface (session.handler.native_file)
     
     Interface for a router that proxies routing to other routers.
     Symfony\Cmf\Component\Routing\ChainRouterInterface (cmf_routing.router)
     
     Helps manage asset URLs.
     Symfony\Component\Asset\Packages (assets.packages)
     
     Interface for adapters managing instances of Symfony's CacheItem.
     Symfony\Component\Cache\Adapter\AdapterInterface (cache.app)
     
     ContainerInterface is the interface implemented by service container classes.
     Symfony\Component\DependencyInjection\ContainerInterface (service_container) - deprecated
     
     ContainerBagInterface is the interface implemented by objects that manage service container parameters.
     Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface (parameter_bag)
     
     ParameterBagInterface is the interface implemented by objects that manage service container parameters.
     Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface (parameter_bag)
     
     Turns public and "container.reversible" services back to their ids.
     Symfony\Component\DependencyInjection\ReverseContainer (reverse_container)
     
     The EventDispatcherInterface is the central point of Symfony's event listener system. Listeners are registered on the manager and events are dispatched through the manager.
     Symfony\Component\EventDispatcher\EventDispatcherInterface (event_dispatcher)
     
     Provides basic utility to manipulate the file system.
     Symfony\Component\Filesystem\Filesystem (filesystem)
     
     Request stack that controls the lifecycle of requests.
     Symfony\Component\HttpFoundation\RequestStack (request_stack)
     
     FlashBagInterface.
     Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface (session.flash_bag)
     
     Interface for the session.
     Symfony\Component\HttpFoundation\Session\SessionInterface (session)
     
     StorageInterface.
     Symfony\Component\HttpFoundation\Session\Storage\SessionStorageInterface (session.storage.native)
     
     A helper service for manipulating URLs within and outside the request scope.
     Symfony\Component\HttpFoundation\UrlHelper (url_helper)
     
     FileLocator uses the KernelInterface to locate resources in bundles.
     Symfony\Component\HttpKernel\Config\FileLocator (file_locator)
     
     Formats debug file links.
     Symfony\Component\HttpKernel\Debug\FileLinkFormatter (debug.file_link_formatter)
     
     HttpKernelInterface handles a Request to convert it to a Response.
     Symfony\Component\HttpKernel\HttpKernelInterface (http_kernel)
     
     The Kernel is the heart of the Symfony system.
     Symfony\Component\HttpKernel\KernelInterface (kernel)
     
     Signs URIs.
     Symfony\Component\HttpKernel\UriSigner (uri_signer)
     
     Factory provides method to create locks.
     Symfony\Component\Lock\LockFactory (lock.default.factory)
     
     LockInterface defines an interface to manipulate the status of a lock.
     Symfony\Component\Lock\LockInterface (lock.default) - deprecated
     
     Symfony\Component\Lock\PersistingStoreInterface (.lock.default.store.2BORioJ) - deprecated
     
     Interface for mailers able to send emails synchronous and/or asynchronous.
     Symfony\Component\Mailer\MailerInterface (Contao\CoreBundle\Mailer\ContaoMailer)
     
     Interface for all mailer transports.
     Symfony\Component\Mailer\Transport\TransportInterface (mailer.default_transport)
     
     Guesses the MIME type of a file.
     Symfony\Component\Mime\MimeTypeGuesserInterface (mime_types)
     
     Symfony\Component\Mime\MimeTypesInterface (mime_types)
     
     Writes and reads values to/from an object/array graph.
     Symfony\Component\PropertyAccess\PropertyAccessorInterface (property_accessor)
     
     Guesses if the property can be accessed or mutated.
     Symfony\Component\PropertyInfo\PropertyAccessExtractorInterface (property_info.cache)
     
     Guesses the property's human readable description.
     Symfony\Component\PropertyInfo\PropertyDescriptionExtractorInterface (property_info.cache)
     
     Gets info about PHP class properties.
     Symfony\Component\PropertyInfo\PropertyInfoExtractorInterface (property_info.cache)
     
     Guesses if the property can be initialized through the constructor.
     Symfony\Component\PropertyInfo\PropertyInitializableExtractorInterface (property_info.cache)
     
     Extracts the list of properties available for the given class.
     Symfony\Component\PropertyInfo\PropertyListExtractorInterface (property_info.cache)
     
     Extract read information for the property of a class.
     Symfony\Component\PropertyInfo\PropertyReadInfoExtractorInterface (property_info.reflection_extractor)
     
     Type Extractor Interface.
     Symfony\Component\PropertyInfo\PropertyTypeExtractorInterface (property_info.cache)
     
     Extract write information for the property of a class.
     Symfony\Component\PropertyInfo\PropertyWriteInfoExtractorInterface (property_info.reflection_extractor)
     
     UrlGeneratorInterface is the interface that all URL generator classes must implement.
     Symfony\Component\Routing\Generator\UrlGeneratorInterface (cmf_routing.router)
     
     UrlMatcherInterface is the interface that all URL matcher classes must implement.
     Symfony\Component\Routing\Matcher\UrlMatcherInterface (cmf_routing.router)
     
     Holds information about the current request.
     Symfony\Component\Routing\RequestContext (router.request_context)
     
     Symfony\Component\Routing\RequestContextAwareInterface (cmf_routing.router)
     
     RouterInterface is the interface that all Router classes must implement.
     Symfony\Component\Routing\RouterInterface (cmf_routing.router)
     
     AuthenticationManagerInterface is the interface for authentication managers, which process Token authentication.
     Symfony\Component\Security\Core\Authentication\AuthenticationManagerInterface (security.authentication.manager)
     
     The TokenStorageInterface.
     Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface (security.token_storage)
     
     AccessDecisionManagerInterface makes authorization decisions.
     Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface (security.access.decision_manager)
     
     The AuthorizationCheckerInterface.
     Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface (security.authorization_checker)
     
     EncoderFactoryInterface to support different encoders for different accounts.
     Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface (security.encoder_factory.generic)
     
     UserPasswordEncoderInterface is the interface for the password encoder service.
     Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface (security.user_password_encoder.generic)
     
     RoleHierarchyInterface is the interface for a role hierarchy.
     Symfony\Component\Security\Core\Role\RoleHierarchyInterface (security.role_hierarchy)
     
     Helper class for commonly-needed security tasks.
     Symfony\Component\Security\Core\Security (security.helper)
     
     Manages CSRF tokens.
     Symfony\Component\Security\Csrf\CsrfTokenManagerInterface (security.csrf.token_manager)
     
     Generates CSRF tokens.
     Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface (security.csrf.token_generator)
     
     Stores CSRF tokens.
     Symfony\Component\Security\Csrf\TokenStorage\TokenStorageInterface (security.csrf.token_storage)
     
     A utility class that does much of the *work* during the guard authentication process.
     Symfony\Component\Security\Guard\GuardAuthenticatorHandler (security.authentication.guard_handler)
     
     Extracts Security Errors from Request.
     Symfony\Component\Security\Http\Authentication\AuthenticationUtils (security.authentication_utils)
     
     Firewall uses a FirewallMap to register security listeners for the given request.
     Symfony\Component\Security\Http\Firewall (security.firewall)
     
     Encapsulates the logic needed to create sub-requests, redirect the user, and match URLs.
     Symfony\Component\Security\Http\HttpUtils (security.http_utils)
     
     SessionAuthenticationStrategyInterface.
     Symfony\Component\Security\Http\Session\SessionAuthenticationStrategyInterface (security.authentication.session_strategy)
     
     Stopwatch provides a way to profile code.
     Symfony\Component\Stopwatch\Stopwatch (debug.stopwatch)
     
     Creates a URL-friendly slug from a given string.
     Symfony\Component\String\Slugger\SluggerInterface (slugger)
     
     Extracts translation messages from a directory or files to the catalogue. New found messages are injected to the catalogue using the prefix.
     Symfony\Component\Translation\Extractor\ExtractorInterface (translation.extractor)
     
     TranslationReader reads translation messages from translation files.
     Symfony\Component\Translation\Reader\TranslationReaderInterface (translation.reader)
     
     TranslationWriter writes translation messages.
     Symfony\Component\Translation\Writer\TranslationWriterInterface (translation.writer)
     
     Covers most simple to advanced caching needs.
     Symfony\Contracts\Cache\CacheInterface (cache.app)
     Symfony\Contracts\Cache\CacheInterface $doctrineResultCachePool (doctrine.result_cache_pool)
     Symfony\Contracts\Cache\CacheInterface $doctrineSystemCachePool (doctrine.system_cache_pool)
     
     Allows invalidating cached items using tags.
     Symfony\Contracts\Cache\TagAwareCacheInterface (cache.app.taggable)
     Symfony\Contracts\Cache\TagAwareCacheInterface $doctrineResultCachePool (.doctrine.result_cache_pool.taggable)
     Symfony\Contracts\Cache\TagAwareCacheInterface $doctrineSystemCachePool (.doctrine.system_cache_pool.taggable)
     
     Allows providing hooks on domain-specific lifecycles by dispatching events.
     Symfony\Contracts\EventDispatcher\EventDispatcherInterface (event_dispatcher)
     
     Provides flexible methods for requesting HTTP resources synchronously or asynchronously.
     Symfony\Contracts\HttpClient\HttpClientInterface (http_client)
     
     Symfony\Contracts\Translation\TranslatorInterface (contao.translation.translator)
     
     Stores the Twig configuration and renders templates.
     Twig\Environment (twig)
     
     Stores the Twig configuration and renders templates.
     Twig_Environment (twig)
    
     83 more concrete services would be displayed when adding the "--all" option.
    
    jannick@jannick-HP-Pavilion-Desktop-PC-570-p0xx:~/www/dev-env/volumes/application/contao.loc$ vendor/bin/contao-console debug:autowiring --all
    
    Autowirable Types
    =================
    
     The following classes & interfaces can be used as type-hints when autowiring:
     
     Acme\ContaoHelloWorldBundle\ContaoHelloWorldBundle
     
     Acme\ContaoHelloWorldBundle\Contao\BackendModule
     
     Acme\ContaoHelloWorldBundle\Controller\BackendModule\BackendController
     
     Acme\ContaoHelloWorldBundle\Controller\ContentElement\MyContentElementController
     
     Acme\ContaoHelloWorldBundle\Controller\FrontendModule\ExampleController
     
     Acme\ContaoHelloWorldBundle\Controller\FrontendModule\MyFrontendModuleController
     
     Acme\ContaoHelloWorldBundle\EventListener\BackendMenuListener
     
     Acme\ContaoHelloWorldBundle\Module\HelloWorldModule
     
     Contao\CoreBundle\Command\CronCommand
     
     Contao\CoreBundle\Command\MigrateCommand
     
     Creates a new Contao back end user.
     Contao\CoreBundle\Command\UserCreateCommand
     
     Lists Contao back end users.
     Contao\CoreBundle\Command\UserListCommand
     
     Contao\CoreBundle\Config\ResourceFinderInterface (contao.resource_finder)
     
     Contao\CoreBundle\Controller\BackendController
     
     Contao\CoreBundle\Controller\BackendCsvImportController
     
     This controller handles the back end preview call and redirects to the requested front end page while ensuring that the /preview.php entry point is used. When requested, the front end user gets authenticated.
     Contao\CoreBundle\Controller\BackendPreviewController
     
     This controller serves for the back end preview toolbar by providing the following ajax endpoints: a) Return the toolbar HTML (dispatched in an ajax request to allow lazy loading and force back end scope) b) Provide the member usernames for the datalist c) Process the switch action (i.e. log in a specific front end user).
     Contao\CoreBundle\Controller\BackendPreviewSwitchController
     
     Contao\CoreBundle\Controller\FaviconController
     
     Contao\CoreBundle\Controller\FrontendController
     
     Contao\CoreBundle\Controller\FrontendModule\TwoFactorController
     
     Contao\CoreBundle\Controller\ImagesController
     
     Custom controller to support legacy entry points.
     Contao\CoreBundle\Controller\InitializeController
     
     Contao\CoreBundle\Controller\InsertTagsController
     
     Contao\CoreBundle\Controller\RobotsTxtController
     
     Contao\CoreBundle\Controller\SitemapController
     
     Contao\CoreBundle\Cron\Cron
     
     Contao\CoreBundle\Cron\LegacyCron
     
     Contao\CoreBundle\Doctrine\Schema\SchemaProvider
     
     Contao\CoreBundle\EventListener\BackendRebuildCacheMessageListener
     
     Contao\CoreBundle\EventListener\DataContainer\ContentCompositionListener
     
     Contao\CoreBundle\EventListener\DataContainer\DisableAppConfiguredSettingsListener
     
     Contao\CoreBundle\EventListener\DataContainer\LegacyRoutingListener
     
     Contao\CoreBundle\EventListener\DataContainer\PageTypeOptionsListener
     
     Contao\CoreBundle\EventListener\DataContainer\PageUrlListener
     
     Contao\CoreBundle\EventListener\DataContainer\ResetCustomTemplateListener
     
     Contao\CoreBundle\EventListener\DataContainer\ValidateCustomRgxpListener
     
     Contao\CoreBundle\EventListener\FilterPageTypeListener
     
     Provides a {{format_date::<timestamp>::<format>}} and a {{convert_date::<date>::<source_format>::<target_format>}} insert tag.
     Contao\CoreBundle\EventListener\InsertTags\DateListener
     
     Contao\CoreBundle\EventListener\Widget\CustomRgxpListener
     
     Contao\CoreBundle\EventListener\Widget\HttpUrlListener
     
     Contao\CoreBundle\Framework\ContaoFramework (contao.framework)
     
     Contao\CoreBundle\Framework\ContaoFrameworkInterface (contao.framework)
     
     Contao\CoreBundle\Image\ImageFactoryInterface (contao.image.image_factory)
     
     Contao\CoreBundle\Image\PictureFactoryInterface (contao.image.picture_factory)
     
     Contao\CoreBundle\Image\Studio\FigureRenderer
     
     Contao\CoreBundle\Image\Studio\Studio
     
     Contao\CoreBundle\Mailer\AvailableTransports
     
     Contao\CoreBundle\Mailer\ContaoMailer
     
     Contao\CoreBundle\Migration\MigrationCollection
     
     Contao\CoreBundle\Migration\Version400\Version400Update
     
     Contao\CoreBundle\Migration\Version401\Version410Update
     
     Contao\CoreBundle\Migration\Version403\Version430Update
     
     Contao\CoreBundle\Migration\Version404\Version440Update
     
     Contao\CoreBundle\Migration\Version404\Version447Update
     
     Contao\CoreBundle\Migration\Version405\Version450Update
     
     Contao\CoreBundle\Migration\Version406\Version460Update
     
     Contao\CoreBundle\Migration\Version407\Version470Update
     
     Contao\CoreBundle\Migration\Version408\Version480Update
     
     Contao\CoreBundle\Migration\Version409\CeAccessMigration
     
     Contao\CoreBundle\Migration\Version410\DropSearchMigration
     
     Contao\CoreBundle\Migration\Version410\OrderFieldMigration
     
     Contao\CoreBundle\Migration\Version410\RoutingMigration
     
     Contao\CoreBundle\Migration\Version411\MergeWebfontsMigration
     
     Contao\CoreBundle\Migration\Version411\RemoveJsHighlightMigration
     
     Contao\CoreBundle\Migration\Version411\TwoFactorBackupCodesMigration
     
     Contao\CoreBundle\Picker\PickerBuilderInterface (contao.picker.builder)
     
     Contao\CoreBundle\Repository\CronJobRepository
     
     Contao\CoreBundle\Routing\Page\PageRegistry
     
     Contao\CoreBundle\Routing\ScopeMatcher (contao.routing.scope_matcher)
     
     Contao\CoreBundle\Security\Authentication\Token\TokenChecker (contao.security.token_checker)
     
     Contao\CoreBundle\Security\TwoFactor\Authenticator (contao.security.two_factor.authenticator)
     
     Contao\CoreBundle\Security\TwoFactor\BackupCodeManager
     
     Contao\CoreBundle\Security\TwoFactor\TrustedDeviceManager (contao.security.two_factor.trusted_device_manager)
     
     Contao\CoreBundle\Slug\Slug (contao.slug)
     
     Contao\CoreBundle\Twig\Extension\ImageExtension
     
     Contao\CoreBundle\Twig\Extension\TextExtension
     
     Twig template paths are registered at compile time but can be altered in the Contao backend at runtime. This class acts as a proxy to the original filesystem loader that ignores invalid bundle template paths if the application cache is marked dirty.
     Contao\CoreBundle\Twig\FailTolerantFilesystemLoader
     
     Contao\CoreBundle\Twig\Runtime\FigureRendererRuntime
     
     Contao\CoreBundle\Twig\Runtime\InsertTagRuntime
     
     Contao\CoreBundle\Twig\Runtime\PictureConfigurationRuntime
     
     Contao\CoreBundle\Util\SimpleTokenExpressionLanguage
     
     Contao\CoreBundle\Util\SimpleTokenParser
     
     Contao\ManagerBundle\Controller\DebugController
     
     Contao\ManagerBundle\HttpKernel\JwtManager (contao_manager.jwt_manager)
     
     Contao\NewsletterBundle\Migration\Version410\DenyListMigration
     
     Doctrine\Bundle\DoctrineBundle\Dbal\ManagerRegistryAwareConnectionProvider
     
     Interface for annotation readers.
     Doctrine\Common\Annotations\Reader (annotations.cached_reader)
     
     Doctrine\Common\Persistence\ManagerRegistry (doctrine)
     
     A wrapper around a Doctrine\DBAL\Driver\Connection that adds features like events, transaction isolation levels, configuration, emulated transaction nesting, lazy connecting and more.
     Doctrine\DBAL\Connection (doctrine.dbal.default_connection)
     Doctrine\DBAL\Connection $defaultConnection (doctrine.dbal.default_connection)
     
     Connection interface. Driver connections must implement this interface.
     Doctrine\DBAL\Driver\Connection (doctrine.dbal.default_connection)
     
     Task for executing arbitrary SQL that can come from a file or directly from the command line.
     Doctrine\DBAL\Tools\Console\Command\RunSqlCommand
     
     EntityManager interface
     Doctrine\ORM\EntityManagerInterface (doctrine.orm.default_entity_manager)
     Doctrine\ORM\EntityManagerInterface $defaultEntityManager (doctrine.orm.default_entity_manager)
     
     Contract covering object managers for a Doctrine persistence layer ManagerRegistry class to implement.
     Doctrine\Persistence\ManagerRegistry (doctrine)
     
     The CacheManager is a CacheInvalidator but adds symfony Route support and response tagging to the framework agnostic FOS\HttpCache\CacheInvalidator.
     FOS\HttpCacheBundle\CacheManager (fos_http_cache.cache_manager)
     
     FOS\HttpCacheBundle\Http\SymfonyResponseTagger (fos_http_cache.http.symfony_response_tagger)
     
     An HTTP caching reverse proxy client.
     FOS\HttpCache\ProxyClient\ProxyClient (fos_http_cache.proxy_client.symfony)
     
     Service for Response cache tagging.
     FOS\HttpCache\ResponseTagger (fos_http_cache.http.symfony_response_tagger)
     
     {@inheritdoc}
     Http\Client\HttpClient
     
     Knp\Bundle\TimeBundle\DateTimeFormatter (time.datetime_formatter)
     
     Interface implemented by the factory to create items
     Knp\Menu\FactoryInterface (knp_menu.factory)
     
     Interface implemented by the item matcher
     Knp\Menu\Matcher\MatcherInterface (knp_menu.matcher)
     
     Knp\Menu\Provider\MenuProviderInterface (knp_menu.menu_provider.chain)
     
     Knp\Menu\Util\MenuManipulator (knp_menu.manipulator)
     
     Create a lock action
     Lexik\Bundle\MaintenanceBundle\Command\DriverLockCommand
     
     Create an unlock action
     Lexik\Bundle\MaintenanceBundle\Command\DriverUnlockCommand
     
     Class Plugin.
     Medy\ContaoMyTest\ContaoManager\Plugin
     
     Medy\ContaoMyTest\DataContainer\TlMyTest
     
     Class MedyContaoMyTest.
     Medy\ContaoMyTest\MedyContaoMyTest
     
     CacheItemPoolInterface generates CacheItemInterface objects.
     Psr\Cache\CacheItemPoolInterface (cache.app)
     Psr\Cache\CacheItemPoolInterface $doctrineResultCachePool (doctrine.result_cache_pool)
     Psr\Cache\CacheItemPoolInterface $doctrineSystemCachePool (doctrine.system_cache_pool)
     
     Describes the interface of a container that exposes methods to read its entries.
     Psr\Container\ContainerInterface (service_container) - deprecated
     Psr\Container\ContainerInterface $parameterBag (parameter_bag)
     
     Defines a dispatcher for events.
     Psr\EventDispatcher\EventDispatcherInterface (event_dispatcher)
     
     Psr\Http\Client\ClientInterface (psr18.http_client)
     
     Describes a logger instance.
     Psr\Log\LoggerInterface (monolog.logger)
     Psr\Log\LoggerInterface $cacheLogger (monolog.logger.cache)
     Psr\Log\LoggerInterface $consoleLogger (monolog.logger.console)
     Psr\Log\LoggerInterface $contaoLogger (monolog.logger.contao)
     Psr\Log\LoggerInterface $doctrineLogger (monolog.logger.doctrine)
     Psr\Log\LoggerInterface $httpClientLogger (monolog.logger.http_client)
     Psr\Log\LoggerInterface $lockLogger (monolog.logger.lock)
     Psr\Log\LoggerInterface $phpLogger (monolog.logger.php)
     Psr\Log\LoggerInterface $requestLogger (monolog.logger.request)
     Psr\Log\LoggerInterface $routerLogger (monolog.logger.router)
     Psr\Log\LoggerInterface $securityLogger (monolog.logger.security)
     Psr\Log\LoggerInterface $translationLogger (monolog.logger.translation)
     
     Scheb\TwoFactorBundle\Model\PersisterInterface (scheb_two_factor.persister.doctrine)
     
     Scheb\TwoFactorBundle\Security\TwoFactor\Provider\TwoFactorFormRendererInterface (scheb_two_factor.security.form_renderer)
     
     Scheb\TwoFactorBundle\Security\TwoFactor\TwoFactorFirewallContext (scheb_two_factor.firewall_context)
     
     SessionHandlerInterface (session.handler.native_file)
     
     Redirects a request to another URL.
     Symfony\Bundle\FrameworkBundle\Controller\RedirectController
     
     TemplateController.
     Symfony\Bundle\FrameworkBundle\Controller\TemplateController
     
     Interface for a router that proxies routing to other routers.
     Symfony\Cmf\Component\Routing\ChainRouterInterface (cmf_routing.router)
     
     Helps manage asset URLs.
     Symfony\Component\Asset\Packages (assets.packages)
     
     Interface for adapters managing instances of Symfony's CacheItem.
     Symfony\Component\Cache\Adapter\AdapterInterface (cache.app)
     
     ContainerInterface is the interface implemented by service container classes.
     Symfony\Component\DependencyInjection\ContainerInterface (service_container) - deprecated
     
     ContainerBagInterface is the interface implemented by objects that manage service container parameters.
     Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface (parameter_bag)
     
     ParameterBagInterface is the interface implemented by objects that manage service container parameters.
     Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface (parameter_bag)
     
     Turns public and "container.reversible" services back to their ids.
     Symfony\Component\DependencyInjection\ReverseContainer (reverse_container)
     
     The EventDispatcherInterface is the central point of Symfony's event listener system. Listeners are registered on the manager and events are dispatched through the manager.
     Symfony\Component\EventDispatcher\EventDispatcherInterface (event_dispatcher)
     
     Provides basic utility to manipulate the file system.
     Symfony\Component\Filesystem\Filesystem (filesystem)
     
     Request stack that controls the lifecycle of requests.
     Symfony\Component\HttpFoundation\RequestStack (request_stack)
     
     FlashBagInterface.
     Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface (session.flash_bag)
     
     Interface for the session.
     Symfony\Component\HttpFoundation\Session\SessionInterface (session)
     
     StorageInterface.
     Symfony\Component\HttpFoundation\Session\Storage\SessionStorageInterface (session.storage.native)
     
     A helper service for manipulating URLs within and outside the request scope.
     Symfony\Component\HttpFoundation\UrlHelper (url_helper)
     
     FileLocator uses the KernelInterface to locate resources in bundles.
     Symfony\Component\HttpKernel\Config\FileLocator (file_locator)
     
     Formats debug file links.
     Symfony\Component\HttpKernel\Debug\FileLinkFormatter (debug.file_link_formatter)
     
     HttpKernelInterface handles a Request to convert it to a Response.
     Symfony\Component\HttpKernel\HttpKernelInterface (http_kernel)
     
     The Kernel is the heart of the Symfony system.
     Symfony\Component\HttpKernel\KernelInterface (kernel)
     
     Signs URIs.
     Symfony\Component\HttpKernel\UriSigner (uri_signer)
     
     Factory provides method to create locks.
     Symfony\Component\Lock\LockFactory (lock.default.factory)
     
     LockInterface defines an interface to manipulate the status of a lock.
     Symfony\Component\Lock\LockInterface (lock.default) - deprecated
     
     Symfony\Component\Lock\PersistingStoreInterface (.lock.default.store.2BORioJ) - deprecated
     
     Interface for mailers able to send emails synchronous and/or asynchronous.
     Symfony\Component\Mailer\MailerInterface (Contao\CoreBundle\Mailer\ContaoMailer)
     
     Interface for all mailer transports.
     Symfony\Component\Mailer\Transport\TransportInterface (mailer.default_transport)
     
     Guesses the MIME type of a file.
     Symfony\Component\Mime\MimeTypeGuesserInterface (mime_types)
     
     Symfony\Component\Mime\MimeTypesInterface (mime_types)
     
     Writes and reads values to/from an object/array graph.
     Symfony\Component\PropertyAccess\PropertyAccessorInterface (property_accessor)
     
     Guesses if the property can be accessed or mutated.
     Symfony\Component\PropertyInfo\PropertyAccessExtractorInterface (property_info.cache)
     
     Guesses the property's human readable description.
     Symfony\Component\PropertyInfo\PropertyDescriptionExtractorInterface (property_info.cache)
     
     Gets info about PHP class properties.
     Symfony\Component\PropertyInfo\PropertyInfoExtractorInterface (property_info.cache)
     
     Guesses if the property can be initialized through the constructor.
     Symfony\Component\PropertyInfo\PropertyInitializableExtractorInterface (property_info.cache)
     
     Extracts the list of properties available for the given class.
     Symfony\Component\PropertyInfo\PropertyListExtractorInterface (property_info.cache)
     
     Extract read information for the property of a class.
     Symfony\Component\PropertyInfo\PropertyReadInfoExtractorInterface (property_info.reflection_extractor)
     
     Type Extractor Interface.
     Symfony\Component\PropertyInfo\PropertyTypeExtractorInterface (property_info.cache)
     
     Extract write information for the property of a class.
     Symfony\Component\PropertyInfo\PropertyWriteInfoExtractorInterface (property_info.reflection_extractor)
     
     UrlGeneratorInterface is the interface that all URL generator classes must implement.
     Symfony\Component\Routing\Generator\UrlGeneratorInterface (cmf_routing.router)
     
     UrlMatcherInterface is the interface that all URL matcher classes must implement.
     Symfony\Component\Routing\Matcher\UrlMatcherInterface (cmf_routing.router)
     
     Holds information about the current request.
     Symfony\Component\Routing\RequestContext (router.request_context)
     
     Symfony\Component\Routing\RequestContextAwareInterface (cmf_routing.router)
     
     RouterInterface is the interface that all Router classes must implement.
     Symfony\Component\Routing\RouterInterface (cmf_routing.router)
     
     AuthenticationManagerInterface is the interface for authentication managers, which process Token authentication.
     Symfony\Component\Security\Core\Authentication\AuthenticationManagerInterface (security.authentication.manager)
     
     The TokenStorageInterface.
     Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface (security.token_storage)
     
     AccessDecisionManagerInterface makes authorization decisions.
     Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface (security.access.decision_manager)
     
     The AuthorizationCheckerInterface.
     Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface (security.authorization_checker)
     
     EncoderFactoryInterface to support different encoders for different accounts.
     Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface (security.encoder_factory.generic)
     
     UserPasswordEncoderInterface is the interface for the password encoder service.
     Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface (security.user_password_encoder.generic)
     
     RoleHierarchyInterface is the interface for a role hierarchy.
     Symfony\Component\Security\Core\Role\RoleHierarchyInterface (security.role_hierarchy)
     
     Helper class for commonly-needed security tasks.
     Symfony\Component\Security\Core\Security (security.helper)
     
     Manages CSRF tokens.
     Symfony\Component\Security\Csrf\CsrfTokenManagerInterface (security.csrf.token_manager)
     
     Generates CSRF tokens.
     Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface (security.csrf.token_generator)
     
     Stores CSRF tokens.
     Symfony\Component\Security\Csrf\TokenStorage\TokenStorageInterface (security.csrf.token_storage)
     
     A utility class that does much of the *work* during the guard authentication process.
     Symfony\Component\Security\Guard\GuardAuthenticatorHandler (security.authentication.guard_handler)
     
     Extracts Security Errors from Request.
     Symfony\Component\Security\Http\Authentication\AuthenticationUtils (security.authentication_utils)
     
     Firewall uses a FirewallMap to register security listeners for the given request.
     Symfony\Component\Security\Http\Firewall (security.firewall)
     
     Encapsulates the logic needed to create sub-requests, redirect the user, and match URLs.
     Symfony\Component\Security\Http\HttpUtils (security.http_utils)
     
     SessionAuthenticationStrategyInterface.
     Symfony\Component\Security\Http\Session\SessionAuthenticationStrategyInterface (security.authentication.session_strategy)
     
     Stopwatch provides a way to profile code.
     Symfony\Component\Stopwatch\Stopwatch (debug.stopwatch)
     
     Creates a URL-friendly slug from a given string.
     Symfony\Component\String\Slugger\SluggerInterface (slugger)
     
     Extracts translation messages from a directory or files to the catalogue. New found messages are injected to the catalogue using the prefix.
     Symfony\Component\Translation\Extractor\ExtractorInterface (translation.extractor)
     
     TranslationReader reads translation messages from translation files.
     Symfony\Component\Translation\Reader\TranslationReaderInterface (translation.reader)
     
     TranslationWriter writes translation messages.
     Symfony\Component\Translation\Writer\TranslationWriterInterface (translation.writer)
     
     Covers most simple to advanced caching needs.
     Symfony\Contracts\Cache\CacheInterface (cache.app)
     Symfony\Contracts\Cache\CacheInterface $doctrineResultCachePool (doctrine.result_cache_pool)
     Symfony\Contracts\Cache\CacheInterface $doctrineSystemCachePool (doctrine.system_cache_pool)
     
     Allows invalidating cached items using tags.
     Symfony\Contracts\Cache\TagAwareCacheInterface (cache.app.taggable)
     Symfony\Contracts\Cache\TagAwareCacheInterface $doctrineResultCachePool (.doctrine.result_cache_pool.taggable)
     Symfony\Contracts\Cache\TagAwareCacheInterface $doctrineSystemCachePool (.doctrine.system_cache_pool.taggable)
     
     Allows providing hooks on domain-specific lifecycles by dispatching events.
     Symfony\Contracts\EventDispatcher\EventDispatcherInterface (event_dispatcher)
     
     Provides flexible methods for requesting HTTP resources synchronously or asynchronously.
     Symfony\Contracts\HttpClient\HttpClientInterface (http_client)
     
     Symfony\Contracts\Translation\TranslatorInterface (contao.translation.translator)
     
     Stores the Twig configuration and renders templates.
     Twig\Environment (twig)
     
     Stores the Twig configuration and renders templates.
     Twig_Environment (twig)