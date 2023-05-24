//definiamo una funzione globale che si occuperà di fare la richiesta api. Il parametro sarà la variabile surc

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






/*function search() {
    let jsonResponse = [];
    let searchButton = document.getElementById("searchField").value.toLocaleLowerCase();
    let artisti = document.getElementsByClassName("artisti");
    let serchTwo = document.getElementById(searchButton);
  
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
      .then((response) => response.json())
      .then((data) => {
        jsonResponse = data;
        for (const artists of artisti) {
          artists.classList.add("d-none");
        }
        serchTwo.classList.remove("d-none");
  
        let serching = document.getElementById(searchButton);
        
        if (jsonResponse.length > 0) {
          for (let i = 0; i < jsonResponse.length; i++) {
            let card = document.createElement("div");
            let title = document.createElement("p");
            let immage = document.createElement("img");
  
            title.innerText = jsonResponse[i].album.title;
            immage.src = jsonResponse[i].album.cover;
  
            serching.appendChild(card);
            card.appendChild(title);
            card.appendChild(immage);
          }
        } else {
          // Nessun risultato trovato, gestisci il caso in modo appropriato
          let noResultsMessage = document.createElement("p");
          noResultsMessage.innerText = "Nessun risultato trovato.";
          serching.appendChild(noResultsMessage);
        }
      })
      .catch((err) => console.log("Error detected: ", err));
  }
  
  search(); */

 /*
  function search(){
    let searchValue= document.getElementById("searchField").value.toLowerCase();
    let artistFlow=document.getElementById(searchValue);
   let artistReset = document.getElementsByClassName("artists")
   async function musicData(){
    const response = await fetch ("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue );
    const jasonData =await response.json();
    console.log(jasonData);

    // artist reset
for (const artist of artistReset) {
    artist.classList.add("d-none");

}
artistFlow.classList.remove("d-none");

//artist img
let artistRow= document.getElementById(searchValue + "Section");
for (let i = 0; i < jasonData.data.length; i++) {
    let card= document.createElement("div");
    let title =document.createElement("p");
    let imgArtist= document.createElement("img");

    imgArtist.classList.add("p-1")
    imgArtist.src= jasonData.data[i].album.cover_medium;

    title.innerText= jasonData.data[i].album.title;

    artistRow.appendChild(card);
    card.appendChild(imgArtist);
    card.appendChild(title);

}


}

musicData();
}
function listData(jasonData, searchValue) {
    let dadDiv = document.querySelector("#modal-body");
    let div = document.createElement("div");
    div.classList.add("modal-content");
    div.style.marginBottom = "10px";
    let h2 = document.createElement("h2");
    h2.innerText = searchValue;
    h2.classList.add("modaleArtist");
    div.appendChild(h2);
    for (const data of jasonData.data) {
      let p = document.createElement("p");
      p.classList.add("modaleAlbum");
      p.innerText = data.title;
      div.appendChild(p);
    }
    dadDiv.appendChild(div);
  }
  listData(jasonData); */
  