# Promise All



    function crawlAll() {
      let urls = [
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      ];
    
      Promise.all(
        urls.map(item => {
          return crawlpdf(item);
        })
      )
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
    
    function crawlpdf(url) {
      return new Promise(async function(resolve, reject) {
        crawler(url).then(response => {
          resolve(response.text.length);
        });
      }).catch(err => console.log(err));
    }// FETCH in Parallel



### Fetch in Parallel

    // FETCH in Parallel
    
    // fetch single
    async function todo(id){
      // returns a promise
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      // returns a promise
      return await response.json();
    }
    
    function fetchAll() {
      let urls = [1,2,3,4];
      return new Promise(async function(resolve, reject){
      Promise.all(urls.map(item => todo(item))).then(result =>resolve(result));  
     
      });  
    }
    
    let response = fetchAll().then(result => {
      console.log(result , "final")
      console.log(response , "response");
      console.log("After Fetch");
    });
    
    // these log gets executed still runs before fetchall is finished
    console.log("IM FASTER");
    
    // to prevent this use await on fetchall 
    // you must wrap it in another async function
    
    // .then() needs to run a on a promise
    // some methods like.json() return a promise by default
    // if you have a some value (which is not a promise)
    // you must wrap it inside a ``return new Promise(async function(resolve, reject) {return mytextvalue}``
    // so the return value is a promise ...!!!
    
    // Promise.all() returns a promise
    // fetch() returns a promise
    // repsonse.json() returns a promise


Die map() (engl. abbilden) Methode wendet auf jedes Element des Arrays die bereitgestellte Funktion an und gibt das Ergebnis in einem neuen Array zurück.