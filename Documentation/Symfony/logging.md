# Logging im Controller
https://symfony.com/doc/current/logging.html


    use Psr\Log\LoggerInterface;
    
    public function index(LoggerInterface $logger)
    {
        $logger->info('I just got the logger');
        $logger->error('An error occurred');
    
        $logger->critical('I left the oven on!', [
            // include extra "context" info in your logs
            'cause' => 'in_hurry',
        ]);
    
        // ...
    }

