# CORS
##  What is CORS?

If you intend to use our API from your website you will encounter an issue with security; namely CORS Cross-Origin Resource Sharing.

There are security mechanisms in place by all major browsers to stop websites from accessing other domains without getting explicit permission. This is done through HTTP headers. So, for example, amazinggameswebsite.com cannot access api.igdb.com without us explicitly stating in the HTTP headers (Access-Control-Allow-Origin) that they have permission.

We do not offer the configuration of these headers as a service, so any browser-based javascript and mobile javascript frameworks like Ionic will not be able to communicate directly with the IGDB API.

### Fazit

Solltest du via Javscript was im Browser läuft auf **externe** API's zugreifen.
Müssen diese dies explizit erlauben.

MIt dem ``Access-Control-Allow-Origin`` header.

Dort kann der Api betreiber zb die wildcard * eintragen, um alle Origins zu erlauben.
Oder nur bestimmte urls wie meineseite.de.

Public apis ohne Authentifizierung sind oftmals offen und problemlos
via javscript auf der seite benutzbar.

Man will halt nicht das jedes dahergelaufene script  
Zugriff hat /Requests machen kann.



