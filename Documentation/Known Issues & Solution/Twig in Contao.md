# Twig Template im Frontend Rendern


### Twig Extenden in Modulen

https://docs.contao.org/dev/framework/templates/twig/#namespace-magic

Es müssen mal wieder namesapced Paths Verwended werden
@BundleName  (Ohne "Bundle" am Ende)

    {% extends '@SteffenuStarter/MyCustom/base.html.twig' %} {% block stylesheets %}

### Css einbinden

    <link
      rel="stylesheet"
      href="{{ asset('bundles/steffenustarter/css/my.css') }}"
    />