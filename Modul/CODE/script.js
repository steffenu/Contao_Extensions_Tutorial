class Fonts {
  // Public class fields
  public_kit_objects = "ADOBE_KIT_OBJECTS";

  constructor() {
    //this.adobe_kit_ids = this.KitIds();
    this.adobe_kit_ids;
  }

  /*
   * Fetch all your availabe Adobe Kits via your API Key
   */
  async KitIds(url = "http://contao.loc/contao/api/kits") {
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });

    // response.text also return a Promise
    const text = await response.json();

    return text;
  }

  /*
   * Fetch a Single Kit with a kit id
   * z.b jwn0ykz
   * returns a single kit object
   */
  async SingleKitInfo(kit_id) {
    // returns a promise
    let url = `http://contao.loc/contao/api/kits/${kit_id}`;
    let response = await fetch(url);
    // returns a promise
    console.log("fetched a item");
    return await response.json();
  }

  // REMOVED FETCHING KITNAMES IN BACKEND INSTEAD ;)
  /*
   *  For Every Kit fetch its kitname
   * - multiple Request
   * - returns array of kitnames
   */

  /*   async KitNames() {
    let adobe_kit_ids = this.KitIds();

    console.log("adobe_kit_ids:", adobe_kit_ids["kits"]);

    let kit_ids = adobe_kit_ids["kits"];

    return new Promise(async (resolve, reject) => {
      Promise.all(kit_ids.map((item) => this.SingleKitInfo(item["id"]))).then(
        (result) => {
          let names = [];
          for (const item of result) {
            names.push(item["kit"]["name"]);
          }
          resolve(names);
        }
      );
    });
  } */

  async KitObjects() {
    let adobe_kit_ids = await this.KitIds();

    console.log("KitObjects", "adobe_kit_ids:", adobe_kit_ids["kits"]);

    let kit_ids = adobe_kit_ids["kits"];

    return new Promise(async (resolve, reject) => {
      Promise.all(kit_ids.map((item) => this.SingleKitInfo(item["id"]))).then(
        (result) => {
          let names = [];
          for (const item of result) {
            names.push(item);
          }
          resolve(names);
        }
      );
    });
  }

  async SelectedKit(selected) {
    var adobe_kit_ids = await this.KitIds();

    console.log("SelectedKit", "adobe_kit_ids:", adobe_kit_ids["kits"]);

    let kit_ids = adobe_kit_ids["kits"];
    let result = this.public_kit_objects;
    return new Promise(async (resolve, reject) => {
      let names = [];
      for (const item of result) {
        if (item["kit"]["name"] == selected) {
          console.log("matching item:", item);

          this.FontFaceCSS(item["kit"]["id"]).then((fontface_css) => {
            resolve(fontface_css);
          });
        }
      }
    });
  }

  /*
   * Fetch Kit (Font Face Css Code)
   * returns font face css for the given kit id
   */
  async FontFaceCSS(kit_id) {
    let base_url = `https://use.typekit.net/${kit_id}.css`;

    const response = await fetch(base_url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });

    // response.text also return a Promise
    const text = await response.text();

    //console.log(text);

    return text;
  }

  /*
   * Add Font Face Css to html header
   */
  async ApplyFontFaceCSS() {
    // Get Selected Item in Dropdown
    let selected =
      document.getElementById("ctrl_selectField").selectedOptions[0].innerText;

    // var adobe_kit_ids available after this
    let kit_css = await this.SelectedKit(selected);

    //console.log("ran", kit_css);

    // Creating style tag  and add to head
    var style = document.createElement("style");
    style.type = "text/css";
    let lit = `${kit_css}`;
    style.innerHTML = lit;
    document.getElementsByTagName("head")[0].appendChild(style);
  }

  /*
   * 1.Select ctrl_checkboxField
   * 2.add class to every option tag
   * <option value="Kautiva Pro" style="font-family: kautiva-pro;">Kautiva Pro</option>
   * Problem : value name ist nich immer der font-family name... fetch css_stack value of kit instead
   */
  async AddFontFamilies(childNodes) {
    console.log("childNodes:", childNodes);
    //let adobe_kit_objects = await this.KitObjects();
    let adobe_kit_objects = this.public_kit_objects;

    console.log("adobe_kit_objects:", adobe_kit_objects);

    // apply css_stack  (from kit object)
    // Für jeden item von childnodes
    // schaue was der name ist
    // dann schaue nach in der gesamten kit liste
    // wo der name ist und hole dass css_stack (den font-fontfamily namen)
    console.log("kit objects", adobe_kit_objects);
    for (const item of childNodes) {
      for (const kit_item of adobe_kit_objects) {
        for (const family of kit_item["kit"]["families"]) {
          if (family["name"] == item.innerText) {
            console.log("css_stack", family["css_stack"]);
            item.style.fontFamily = family["css_stack"];
          }
        }
      }

      // let name = this.formatName(item);

      // Css styling
      // https://www.w3schools.com/jsref/dom_obj_style.asp

      //item.classList.add(name);
    }
  }

  formatName(item) {
    let innerText = item.innerText.toLowerCase();

    // Kautiva Pro = kautiva-pro
    innerText = innerText.replace(/\s/, "-");
    console.log("innerText:", innerText);
    return innerText;
  }
}

async function app() {
  let fonts = new Fonts();
  console.log("fonts:", fonts);

  // Response in ein Public field packen zur weiterverwendung
  fonts.public_kit_objects = await fonts.KitObjects();
  console.log("public kit_objects:", fonts.public_kit_objects);

  var child_nodes_h1 = document.getElementById("ctrl_heading_1").childNodes;
  var child_nodes_h2 = document.getElementById("ctrl_heading_2").childNodes;
  var child_nodes_h3 = document.getElementById("ctrl_heading_3").childNodes;
  var child_nodes_h4 = document.getElementById("ctrl_heading_4").childNodes;
  var child_nodes_h5 = document.getElementById("ctrl_heading_5").childNodes;
  var child_nodes_h6 = document.getElementById("ctrl_heading_6").childNodes;
  var child_nodes_paragraph =
    document.getElementById("ctrl_paragraph").childNodes;
  var child_nodes_strong = document.getElementById("ctrl_strong").childNodes;

  let nodes = [
    child_nodes_h1,
    child_nodes_h2,
    child_nodes_h3,
    child_nodes_h4,
    child_nodes_h5,
    child_nodes_h6,
    child_nodes_paragraph,
    child_nodes_strong,
  ];

  fonts.ApplyFontFaceCSS();

  for (const item of nodes) {
    fonts.AddFontFamilies(item);
  }

  /*   all_kits = await new_kit.KitIds();
  console.log(all_kits, "all kits");

  all_kit_names = await new_kit.KitNames(all_kits);
  console.log(all_kit_names, "ALL KIT NAMES"); */
}

document.addEventListener("DOMContentLoaded", function (event) {
  //console.log("DOM fully loaded and parsed");

  // Nur auf der bearbeitungsseite das script starten ;)
  // sonst läuft es in der listenansischt ;)
  if (document.getElementById("ctrl_selectField")) {
    app();
  } else {
    console.log("Listenansicht , kein Script Start");
  }

  // FONT Picker auf Input Felder anwenden.
  $("#ctrl_heading_1").fontpicker();
  $("#ctrl_heading_2").fontpicker();
  $("#ctrl_heading_3").fontpicker();
  $("#ctrl_heading_4").fontpicker();
  $("#ctrl_heading_5").fontpicker();
  $("#ctrl_heading_6").fontpicker();
  $("#ctrl_paragraph").fontpicker();
  $("#ctrl_strong").fontpicker();
  //$("input#ctrl_unique_url").fontpicker();
});

/*
var value;

async function listQ(e){

  // try to find out there is a selectedoptions value via console.dir
  // https://stackoverflow.com/a/51479798
  if (value != e.target.selectedOptions[0].innerText && e.target.selectedOptions[0].innerText != "-"){

    value = e.target.selectedOptions[0].innerText;
    console.log(e.target.selectedOptions[0].innerText);
    console.dir(e.target);

    // apply ID to the item
    //e.target.selectedOptions[0].innerText = "changed";

    // Changing ID OF SELECTED OPTION...
    e.target.selectedOptions[0].id = "some_id";

    ApplyFontFamilyToId();

    let font_face_css = await fetchFontFace('https://use.typekit.net/ndz7jwu.css');

    // Font Face CSS that need to be applied to header
    console.log(font_face_css);

    // Creating style tag  and add to head
    var style = document.createElement('style');
    style.type = 'text/css';
    let lit = `.cssClass { ${font_face_css} }`;
    style.innerHTML = lit;
    document.getElementsByTagName('head')[0].appendChild(style);

    // apply created class to Element
    document.getElementById('ctrl_selectField').id = 'some_id';


  }
  else {
    // do nothing if its the same value (prevent loading assets twice)
    console.log("no change");
  }


function ApplyFontFamilyToId(){
  var id_style = document.createElement('style');
  id_style.type = 'text/css';
  let lit = `#some_id { font-family: "galette";font-size:20px; }`;
  id_style.innerHTML = lit;
  document.getElementsByTagName('head')[0].appendChild(id_style);
}


// Example POST method implementation:
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
async function fetchFontFace(url = '') {

  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  });

  // response.text also return a Promise
  const text = await response.text();

  //console.log(text);

  return text;


  }

  // Adding eventlistner after DOM is fully loaded

  document.addEventListener("DOMContentLoaded", function(event) {
    //document.getElementById("ctrl_checkboxField_chzn").addEventListener("click",listQ);
    document.getElementById("ctrl_selectField").addEventListener("click",listQ);
    //console.log("DOM fully loaded and parsed");
  });

}
 */
