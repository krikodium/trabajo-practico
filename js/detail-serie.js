let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal
console.log(id)


const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let url = `
https://api.themoviedb.org/3/tv/${id}?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let portada = document.querySelector('.detailImg');
        let titulo = document.querySelector('.titleMovie');
        let fecha = document.querySelector('.datePeli');
        let resumen = document.querySelector('.sinopsis');

        portada.src = IMG_URL + data.poster_path //aca
        titulo.innerHTML = data.name
        fecha.innerHTML = data.first_air_date
        resumen.innerHTML = data.overview
    })
    .catch(function (error) {
        console.log(`este es el eror : ${error}`)
    })

let seriesFavoritas = [];
let favStorage = localStorage.getItem('seriesFavoritas')

if (favStorage != null) {
    seriesFavoritas = JSON.parse(favStorage);
}

let fav = document.querySelector('.favS');

if (seriesFavoritas.includes(id)) {
    fav.innerText = "quitar de favoritos";
}

fav.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (seriesFavoritas.includes(id)) {
        let indice = seriesFavoritas.indexOf(id);
        seriesFavoritas.splice(indice, 1)
        fav.innerText = "Agregar a favoritos"
    } else {
        seriesFavoritas.push(id)
        fav.innerText = "Quitar de favoritos"
    }

    let favString = JSON.stringify(seriesFavoritas);
    localStorage.setItem('seriesFavoritas', favString);

})