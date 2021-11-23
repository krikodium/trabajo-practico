const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//recupero datos del local storage
//datos del array vacio de favs movies
let recuperoDatos = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoDatos);
console.log(favoritos)
//array de datos de favs series
let recuperoDatosSerie = localStorage.getItem('seriesFavoritas');
let favoritosSerie = JSON.parse(recuperoDatosSerie);
console.log(favoritosSerie)


//capturando el contenedor que vamos a rellenar 
let contenedor = document.querySelector('.lista');
let pelisFav = '';

let contenedorSerie = document.querySelector('.listaSerie')
let seriesFav = '';

//si el storage esta vacio indicamos al usuario que no hay fav seleccionados 

if (favoritos == null || favoritos.length == 0) {
    contenedor.innerHTML = '<p class="noFav"><a href="genres.html">Que lastima, no tienen ningun favorito. Ve a seleccionarlos</a></p>'
} else {
    for (let i = 0; i < favoritos.length; i++) {
        let titulos = document.querySelector('.titulo')
        titulos.innerText = 'Peliculas favoritas'
        let titulosS = document.querySelector('.tituloSerie')
        titulosS.innerText = 'Series favoritas'
        buscarYMostrarFavoritos(favoritos[i]);
    }
}


function buscarYMostrarFavoritos(id) {
    //peliculas
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            pelisFav += `
                
                <div class="favPlaylist">
                <a href="detail-movie.html?id=${id}"><img src= "${IMG_URL + data.poster_path}" alt="${data.title}"></a>
                <p>${data.title}</p>
                <p class="fechaPeli">${data.release_date}</p>
                </div>
            `
            contenedor.innerHTML = pelisFav;
        })
        .catch(function (error) {
            console.log('este es el error = ' + error)
        })
    // seccion de series favoritas 
    //debo de armar otro array para que no se agurpen las peliculas con las series. 
    //series
    let urlSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US`
    fetch(urlSerie)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            seriesFav += `
                
                <div class="favPlaylist">
                <a href="detail-movie.html?id=${id}"><img src= "${IMG_URL + data.poster_path}" alt="${data.title}"></a>
                <p>${data.title}</p>
                <p class="fechaPeli">${data.release_date}</p>
                </div>
            `
            contenedorSerie.innerHTML = seriesFav;
        })
        .catch(function (error) {
            console.log('este es el error = ' + error)
        })
}