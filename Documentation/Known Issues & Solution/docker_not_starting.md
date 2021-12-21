 
Auf Port 80 lief ein apache server
der wohl irgendwie mitinstalliert wurde.


sudo service apache2 status
sudo service apache2 stop

sudo lsof -i -P -n | grep LISTEN


    systemd-r  790 systemd-resolve   13u  IPv4  33692      0t0  TCP 127.0.0.53:53 (LISTEN)
    container  986            root   12u  IPv4  43075      0t0  TCP 127.0.0.1:39675 (LISTEN)
    cupsd     1010            root    6u  IPv6  40822      0t0  TCP [::1]:631 (LISTEN)
    cupsd     1010            root    7u  IPv4  40823      0t0  TCP 127.0.0.1:631 (LISTEN)
    apache2   1032            root    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    apache2   1033        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    apache2   1034        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    apache2   1035        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    apache2   1036        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    apache2   1037        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    java      4845         jannick   37u  IPv6  79655      0t0  TCP 127.0.0.1:6942 (LISTEN)
    java      4845         jannick   43u  IPv6  86023      0t0  TCP 127.0.0.1:63342 (LISTEN)
    apache2   5245        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    apache2   5300        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    apache2   5301        www-data    4u  IPv6  41298      0t0  TCP *:80 (LISTEN)
    code      5388         jannick   54u  IPv4  85330      0t0  TCP 127.0.0.1:42421 (LISTEN)
    docker-pr 6858            root    4u  IPv4  99834      0t0  TCP *:3306 (LISTEN)
    docker-pr 6866            root    4u  IPv6  99840      0t0  TCP *:3306 (LISTEN)


## Lösung 

Apache stoppen  oder deinstallieren

