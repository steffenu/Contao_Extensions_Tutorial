# Fontpicker Plugin by av01d


https://github.com/av01d/fontpicker-jquery-plugin


![](https://i.imgur.com/rgC1CXI.png)


Ziel Code erweitern für Anzeige von Adobe Fonts.


### Vorbereitung


**lokal einbinden**

    <link href="/path/to/dist/jquery.fontpicker.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="/path/to/dist/jquery.fontpicker.min.js"></script>


**via jsdeliver**

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/av01d/fontpicker-jquery-plugin@1.4.4/dist/jquery.fontpicker.min.css" integrity="sha256-urFh3EMgi9s3j3w+TsAP1TfUQiE0yUZmmLX7JRyvjqE=" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/av01d/fontpicker-jquery-plugin@1.4.4/dist/jquery.fontpicker.min.js" integrity="sha256-+UHNQaPSVoGbGqqvjreSLWm7Zm6k+hQh2lbfwATpQEY=" crossorigin="anonymous"></script>
    

## USAGE

Example

Auf einem Input element den fontpicker via jquery anwenden.

    $('input.fonts').fontpicker([options]);
.

    <input class="fonts">

.

    $('input.fonts').fontpicker({
       lang: 'en',
       variants: true,
       lazyLoad: true,
        showClear: true,
       nrRecents: 3,
       googleFonts: 'Alegreya,Boogaloo,Coiny,Dosis,Emilys Candy,Faster One,Galindo'.split(','),
       localFonts: {
          "Arial": {
             "category": "sans-serif",
             "variants": "400,400i,600,600i"
          },
          "Georgia": {
             "category": "serif",
             "variants": "400,400i,600,600i"
          },
          "Times New Roman": {
             "category": "serif",
             "variants": "400,400i,600,600i"
          },
          "Verdana": {
             "category": "sans-serif",
             "variants": "400,400i,600,600i",
          },
          "Action Man": {},
          "Bauer": {
             "category": "display",
             "variants": "400,400i,600,600i",
             "subsets": "latin-ext,latin"
          },
          "Bubble": {
             "category": "display",
             "variants": "400,400i,600,600i",
             "subsets": "latin-ext,latin"
          }
       },
       localFontsUrl: 'fonts/' // End with a slash!
    });


## Methods

### set font

Programmatically select a font by calling `val()` on the original input element, then triggering the `change` event:
```
// Select 'Geo' font family
$('#font').val('Geo').trigger('change');
```
or
```
// Select 'Orbitron' font family, weight 900
$('#font').val('Orbitron:900').triggger('change');
```
or
```
// Select 'Open Sans' font family, weight 800, italics
$('#font').val('Open Sans:800i').triggger('change');
```

You can programmatically clear a selected font like this:
```
$('#font').val('').trigger('change');
```

### show

Show the font picker manually
```
$('#font').fontpicker('show');
```

### hide

Hide the font picker manually
```
$('#font').fontpicker('hide');
```

### destroy

Destroy the font picker, revert element back to original.
```
$('#font').fontpicker('destroy');



## Options

Fontpicker has one argument, an options object that you can customise.

### lang

- Type: `String`
- Default: `en`
- Options:
  - `en`: English
  - `de`: German
  - `es`: Spanish
  - `nl`: Dutch

The interface language.
If you need a translation in another language: take a look at the `dictionaries` variable in `jquery.fontpicker.js`, and send me the translations for your language.

### variants

- Type: `Boolean`
- Default: `true`

With `variants: true`, users can not only select a font family, but the variant (font weight and font style) of it as well, if applicable. Many fonts in the Google Repository have multiple variants (multiple font weights, normal and italic styles).
In this case, the `input` element will have a value that consists of the chosen font, followed by the font-weight and an italics indicator (see [Example](#example)).

### nrRecents

- Type: `Number`
- Default: `3`

The fontpicker component lists the last X fonts the user picked earlier first, in the *Favorite fonts* section.
The `nrRecents` option defines how many last-picked fonts to remember. Use `0` to not remember any at all.

### lazyLoad

- Type: `Boolean`
- Default: `true`

When the user scrolls the font list, each font is rendered in its own font family. This is accomplished by loading the external font on demand, as soon as the font becomes visible in the list (using an *Intersection Observer*).
The `lazyLoad` option enables or disables this functionality.
If disabled, fonts in the list will no longer be rendered in their own font family.

### googleFonts

- Type: `Array`
- Default: All available Google Fonts

An array of Google fonts to present in the font list. Shows all available Google fonts by default. Use `false` to not show Google Fonts at all.

### localFonts

The Google Fonts Repository doesn't always offer enough options. The fontpicker plugin allows you to present custom fonts as well.
The local font files have to be in `.woff` (not `.ttf`) format (for best compatibility with as many browsers as possible), and they should all be put in a single folder, under the document root folder of your site. Something like `/fonts/` makes sense.
Provide the path to this folder as the `localFontsUrl` configuration parameter.
You can convert `.otf/.ttf` fonts to `.woff` on [transfonter.org](https://transfonter.org/), it's a free service.

- Type: `Object`
- Default:
  ```
   "Arial": {
      "category": "sans-serif",
      "variants": "400,400i,600,600i"
   },
   "Courier New": {
      "category": "monospace",
      "variants": "400,400i,600,600i"
   },
   "Georgia": {
      "category": "serif",
      "variants": "400,400i,600,600i"
   },
   "Tahoma": {
      "category": "sans-serif",
      "variants": "400,400i,600,600i"
   },
   "Times New Roman": {
      "category": "serif",
      "variants": "400,400i,600,600i"
   },
   "Trebuchet MS": {
      "category": "sans-serif",
      "variants": "400,400i,600,600i"
   },
   "Verdana": {
      "category": "sans-serif",
      "variants": "400,400i,600,600i",
   }
   ```

The key of an item is the *font family*. As mentioned above, make sure that custom (non-system) fonts are available on your webserver, as `.woff` files. Make sure the name of the font files matches the *font family* name used here:
`"Action Man"` -> `/fonts/Action Man.woff`
`"Bubble"` -> `/fonts/Bubble.woff`

The value of an item is an object, containing up to 3 properties:
- `category`: A `String`, containing one of `serif, sans-serif, display, handwriting, monospace`. This allows users to filter fonts by category. If omitted, the font is listed under the `other` category.
- `variants`: A `String`, containing a comma-separated list of variants available for the font. See example below. If omitted, users cannot pick a variant for this font (the font weight will be `400`, the font style will be `normal` (non italics)).
- `subsets`: A `String`, containing a comma-separated list of language-subsets the font entails. This allows users to filter fonts by language. If omitted, the font can (only) be found under `All languages`.

Example:
```
{
   "Arial": {
      "category": "sans-serif",
      "variants": "400,400i,600,600i"
   },
   "Georgia": {
      "category": "serif",
      "variants": "400,400i,600,600i"
   },
   "Times New Roman": {
      "category": "serif",
      "variants": "400,400i,600,600i"
   },
   "Verdana": {
      "category": "sans-serif",
      "variants": "400,400i,600,600i",
   },
   "Action Man": {},
   "Bauer": {
      "category": "display",
      "variants": "400,400i,600,600i",
      "subsets": "latin-ext,latin"
   },
   "Bubble": {
      "category": "display",
      "variants": "400,400i,600,600i",
      "subsets": "latin-ext,latin"
   }
};
```

### localFontsUrl

- Type: `String`
- Default: `/fonts/`

Path to folder where local fonts are stored (in .woff format). Default: `/fonts/`. *Make sure to end with a slash!*

### parentElement

- Type: `String` or `jQuery object`
- Default: `'body'`

Parent element (jQuery selector/element) to attach the font picker to. The default `body` should suffice in pretty much all cases. Only tinker with this if you know what you're doing.

If you want to use the Fontpicker inside a Bootstrap modal, you need to attach it to the modal instead of the body, to prevent keyboard/mouse focus issues. For example:
```
$('#font').fontpicker({
   parentElement: '#myModal'
});
```

### showClear

- Type: `Boolean`
- Default: `false`

When enabled, users can clear/deselect a selected font. A *clear* icon will be rendered in the font dropdown.

### onSelect

- Type: `function`
- Default: `undefined`

By default, the Fontpicker Plugin calls `change` on the original input element.
This is sufficient in many cases, but sometimes you also need to know whether a local or Google font was selected. That's where the `onSelect` callback comes in.
This callback function is called when the user picks a font. The function is called with a single argument: an object, containing the following members:

  - `fontType`: Either `local` or `google`
  - `fontFamily`: The font family name (string)
  - `fontStyle`: Either `normal` or `italic`
  - `fontWeight`: The font weight the user selected (integer). 
  - `fontSpec`: The complete font spec. For example: `Arial:400` or `Roboto:700i`. 

### debug

- Type: `Boolean`
- Default: `false`

When enabled, the plugin shows info about fonts being loaded in the console.

[⬆ back to top](#table-of-contents)

## Methods

### set font

Programmatically select a font by calling `val()` on the original input element, then triggering the `change` event:
```
// Select 'Geo' font family
$('#font').val('Geo').trigger('change');
```
or
```
// Select 'Orbitron' font family, weight 900
$('#font').val('Orbitron:900').triggger('change');
```
or
```
// Select 'Open Sans' font family, weight 800, italics
$('#font').val('Open Sans:800i').triggger('change');
```

You can programmatically clear a selected font like this:
```
$('#font').val('').trigger('change');
```

### show

Show the font picker manually
```
$('#font').fontpicker('show');
```

### hide

Hide the font picker manually
```
$('#font').fontpicker('hide');
```

### destroy

Destroy the font picker, revert element back to original.
```
$('#font').fontpicker('destroy');