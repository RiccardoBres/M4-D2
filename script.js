function search() {
  //array d'appoggio contenitore dati Json
  let jsonResponse = [];
  // variabile contenente il valore del campo Search html
  let searchButton = document.getElementById("searchField").value.toLocaleLowerCase();
  // variabile che conterra la sezione degli artisti
  let artisti = document.getElementsByClassName("artisti");
  //variabile che permetterà di rimuovere la classe d-none allo scatenarsi dell'evento click, questa varibile contiene qualsiasi valore di searchButton
  let serchTwo = document.getElementById(searchButton);
  //la chiamata fetch non va a buon fine.
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => response.json())
    .then((data) => {
      jsonResponse = data;
      console.log(jsonResponse);
   //for attraversa ogni elemento con la classe "artisti" e aggiunge la classe "d-none" a ciascuno di essi, nascondendoli nella visualizzazione
      for (const artists of artisti) {
        artists.classList.add("d-none");
      }
   // rimuovere la classe CSS "d-none" dall'elemento serchTwo quando si verifica l'evento di click su searchButton.
      // serchTwo.classList.remove("d-none");

      let serching = document.getElementById(searchButton);
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
    })
    .catch((err) => console.log("Error detected: ", err));
}


search()  

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
  