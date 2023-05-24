/*definiamo una funzione globale che si occuperà di fare la richiesta api. 
Il parametro sarà la variabile surchButton che conterrà il valore della ricerca dell'imput e quindi la query della richiesta API. */
let data = (searchButton) => {
  let request = fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchButton)
  //promise se risolta entreremo nel then a riga 33 dove la funzione data viene richiamata.Se non viene risolta entriamo nel catch a riga 43
  let promise = new Promise((resolve, reject) => {
    resolve(request);
    reject("errore");
  })
  return promise;
}
//funzione che permette di creare l'elemento card e lo innietta nel DOM.
function card(element) {
  let route = document.getElementById("divDom");
    let card = document.createElement("div");
    //aggiunta classe Bootsrap
    card.classList.add("card");
    let immage = document.createElement("img");
    immage.classList.add("img-fluid");
    //immagine recuperata attraverso l'attributo src iterando iterando la variabile element che contiene il jaison.
    immage.src = element.album.cover_medium;
    let title = document.createElement("p");
    title = element.title;
    card.append(immage);
    card.append(title);
    route.append(card);

}
//funzione che si scatena non appena il tasto GO ciene schiacciato. 
function search () {
  let div = document.getElementById("divDom");
  div.innerHTML = "";
  //variabile surchBotton acquisisce il valore della ricerca nell'input
  let searchButton = document.getElementById("searchField").value.toLocaleLowerCase()
  /* Allo scatenarsi della funzione surch, la funzione data(che si occupa di far scatenare la chiamata Fetch, e di conseguenza la promise)
  viene richiamata e viengono definite le condizioni delle promise */
  data(searchButton)
  /*All'interno del primo .then(), 
  il parametro artisti rappresenta la risposta JSON restituita dalla chiamata API. Viene chiamato .json() 
  su artisti per convertire la risposta in un oggetto JSON*/ 
  .then((artisti)=> {
  artisti = artisti.json();
  console.log(artisti);
  return artisti
})
/*Viene utilizzato un secondo .then() per gestire la promise restituita dal primo .then(). 
Il parametro jsonData rappresenta l'oggetto JSON restituito dal primo .then(). Viene eseguito un ciclo .forEach() su jsonData.data, 
dove jsonData.data è un array contenente gli elementi che si desidera elaborare. 
All'interno del ciclo, viene eseguita una funzione card() su ciascun elemento per elaborarlo*/  
.then((jsonData) => jsonData.data.forEach((element) => {
  console.log(element)
    card(element)
}))
.catch(err => (console.log(err)))
}





