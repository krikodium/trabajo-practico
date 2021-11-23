//?api_key=2a3e604f846a8507e6e6c47dd35eb5d5 vieja 
//?api_key=eff71d911bc68b6cdf67ad2d02630320 nueva
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//PELICULAS POPULARES

const url_populares = 'https://api.themoviedb.org/3/movie/popular?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&page=1'
fetch(url_populares)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let pelisPop = data.results;
        let contenedor = document.querySelector('.contenedorPrin1');
        console.log(pelisPop);
        let peliculasPop = '';
        for (let i = 0; i < 5; i++) {
            peliculasPop +=
                `
                    <div class="peliculas">
                        <a href="detail-movie.html?id=${pelisPop[i].id}"><img src= "${IMG_URL+pelisPop[i].poster_path}" alt="${pelisPop[i].title}"></a>
                        <p>${pelisPop[i].title}</p>
                        <p class="fechaPeli">${pelisPop[i].release_date}</p>
                    </div>
                `
        }

        contenedor.innerHTML = peliculasPop;
    })
    .catch(function (error) {
        console.log('el error fue ' + error)
    })


//SERIES POPULARES

const url_series = 'https://api.themoviedb.org/3/tv/popular?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&page=1';
fetch(url_series)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let contenedor = document.querySelector('.contenedorPrin2');
        let pelisPop = data.results;
        console.log(pelisPop);
        let peliculasPop = '';
        for (let i = 0; i < 5; i++) {
            peliculasPop +=
                `
                    <div class="peliculas">
                        <a href="detail-populares.html?id=${pelisPop[i].id}"><img src= "${IMG_URL+pelisPop[i].poster_path}" alt="${pelisPop[i].title}"></a>
                        <p>${pelisPop[i].name}</p>
                        <p class="fechaPeli">${pelisPop[i].first_air_date}</p>
                    </div>
                `
        }
        contenedor.innerHTML = peliculasPop;
    })
    .catch(function (error) {
        console.log('el error fue ' + error)
    })


//PELICULAS VALORADAS

let url_rated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&page=1';
fetch(url_rated)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let contenedor = document.querySelector('.contenedorPrin3');
        let pelisPop = data.results;
        console.log(pelisPop);
        let peliculasPop = '';
        for (let i = 0; i < 5; i++) {
            peliculasPop +=
                `
                    <div class="peliculas">
                        <a href="detail-movie.html?id=${pelisPop[i].id}"><img src= "${IMG_URL+pelisPop[i].poster_path}" alt="${pelisPop[i].title}"></a>
                        <p>${pelisPop[i].title}</p>
                        <p class="fechaPeli">${pelisPop[i].release_date}</p>
                    </div>
                `
        }
        contenedor.innerHTML = peliculasPop;
    })
    .catch(function (error) {
        console.log('el error fue ' + error)
    })