# Custom Dropdown erstellen

## Ziel

**Bau eines Dropdown Menüs** 
- adding custom css
- adding font stylesheet to each dropdown item


**Referencen / Inspiration**

https://github.com/samuelmeuli/font-picker

https://github.com/av01d/fontpicker-jquery-plugin


### Schritt 1

**Font List from API**


## Schritt 2

** Font List einfügen in Dropdown**


## Schritt 3

**Get @font-face css snippets**

### Adobe

3. KIT LISTE anfordern ( A list of kits owned by the authenticating user )
http://typekit.com/api/v1/json/kits
	
4. KIT information anfordern
https://typekit.com/api/v1/json/kits/ndz7jwu

6. Die KIT Id in diesen link einsetzen und Font face CSS zu code erhalten
https://use.typekit.net/ndz7jwu.css

### Google

## Schritt 4

**Apply Font Face CSS to  HTML`<head>`

![](https://i.imgur.com/7rc64yw.png)


## Schritt 5

**Apply `id` to each item**

![](https://i.imgur.com/lbnTmrZ.png)


## Schritt 6

**Apply font family to iD's via  HTML`<head>`


![](https://i.imgur.com/Tt7yZbX.png)


**Zusammenfassung**

1. Font liste holen
2. Liste in Dropdown einfügen
3. Css snippets für den jeweiligen font Face von Api holen
4. Font Faces Css einbinden im <head>
5. Jedem Item eine Id vergeben
6. Im <head> die font families den ids hinzufügen über CSS




## Test Code

**Javascript**

    //console.log("SCRIPT LOADED");
    
    
    //console.log(value, " before");
    //console.log(value, " e.target.innerText");
    
    // get evailabe methods from e.target in chrome ... in firefox you dont need it 
    //console.dir(e.target);
    
    // last value of the dropdown item
    var value;
    
    function listQ(e){
      // try to find out there is a selectedoptions value via console.dir
      // https://stackoverflow.com/a/51479798
      if (value != e.target.selectedOptions[0].innerText && e.target.selectedOptions[0].innerText != "-"){
    
        value = e.target.selectedOptions[0].innerText;
        console.log(e.target.selectedOptions[0].innerText);
        console.dir(e.target);
    
        // apply ID to the item
        //e.target.selectedOptions[0].innerText = "changed";
    
        // Changing ID OF SELECTED OPTION...
        e.target.selectedOptions[0].id = "new_id";
    
      }
      else {
        // do nothing if its the same value (prevent loading assets twice)
        console.log("no change");
      }
    
    
        
      }
    
      // Adding eventlistner after DOM is fully loaded
    
      document.addEventListener("DOMContentLoaded", function(event) {
        //document.getElementById("ctrl_checkboxField_chzn").addEventListener("click",listQ);
        document.getElementById("ctrl_selectField").addEventListener("click",listQ);
        //console.log("DOM fully loaded and parsed");
      });





