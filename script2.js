const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const resultBox = document.getElementById("searchSection")
const searchButton = document.getElementById("button-search")
const spinner = document.getElementById("spinner")



function makeSearch () {
    let searchImput = document.getElementById("searchField");
    let searchValue = searchImput.value;
    spinner.classList.toggle("d-none");

    fetch(endPoint + searchValue)
    .then(res => res.json())
    .then(json => cycle(json.data))
    .catch(err => console.log("errore:" + err))
}




function cycle(jsonData) {
   resultBox.innerHTML = "";
   jsonData.forEach(song => {createTemplate(song)})
   document.getElementById("searchField").value = " ";
   spinner.classList.toggle("d-none")
}



function createTemplate(song){
    let songBox = document.createElement("div");
    songBox.classList.add("text-light", "p-3", "text-center");
    let img = document.createElement("img");
    img.src = song.artist.picture_medium;
    let title = document.createElement("h6");
    title.classList.add("mt-2")
    title.innerText = song.title;
    let artist = document.createElement("em");
    artist.innerText = song.artist.name;

    songBox.appendChild(img);
    songBox.appendChild(title);
    songBox.appendChild(artist);

    resultBox.appendChild(songBox);
}

