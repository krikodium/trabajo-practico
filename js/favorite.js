const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//recupero datos del local storage
let recuperoDatos = localStorage.getItem('favoritos');
//transformo los datos de json en array
let favoritos = JSON.parse(recuperoDatos);
console.log(favoritos)

//capturando el contenedor que vamos a rellenar 
let contenedor = document.querySelector('.lista');
let pelisFav = '';

//si el storage esta vacio indicamos al usuario que no hay fav seleccionados 

if (favoritos == null || favoritos.length == 0) {
    contenedor.innerHTML = '<p class="noFav"><a href="genres.html">Que lastima, no tienen ningun favorito. Ve a seleccionarlos</a></p>'
} else {
    for (let i = 0; i < favoritos.length; i++) {
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
                <h1 class="tusFav">Tus peliculas favoritas</h1>
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
}