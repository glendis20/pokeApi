const API = " https://pokeapi.co/api/v2/pokemon";

const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            pintar(json);
        })
        .catch((error) => {
            console.log("Error :", error)
        })
}

const pintar = (nombre) => {

    nombre.results.forEach((pokemon) => {
        pagina(pokemon.url);
    });

}

const pagina = (url) => {

    console.log("La url de la imagen es" + url);
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {

            console.log(json.sprites.other.dream_world.front_default);
            let html = "";
            html += '<div class= "col">';
            html += '<div class="card" style="width: 14rem; m-5">';
            html += `<img class="card-img-top" src= "${json.sprites.other.dream_world.front_default}" alt="...">`;
            html += '<div class="card-body">';
            html += `<h5 class= "card-title">${json.name}</h5>`;
            html += `<p class= "card-text">Altura:${json.height}</p>`;
            html += `<p class= "card-text">Peso:${json.weight}</p>`;
            html += '</div>';
            html += '</div>';
            html += '</div>';
            document.getElementById("pokeData").innerHTML += html;

        }).catch((error) => {
            console.log("Error pagina :", error)
        })
}

getData(API);