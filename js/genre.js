let urlPeli = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US';

fetch(urlPeli)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let contenedor = document.querySelector('.contentGenreM');
        let generos = data.genres;
        console.log(generos)
        let losGeneros = '';
        for (let i = 0; i < generos.length; i++) {
            losGeneros += `
            <div class="generos">
                <a href="detail-genre.html?id=${generos[i].id}&title=${generos[i].name}"><p class="genreTitle">${generos[i].name}</p></a>
            </div>
            `
        }
        contenedor.innerHTML = losGeneros;
    })
    .catch(function (error) {
        console.log('este es el error = ' + error)
    })

//generos de series

let urlSerie = 'https://api.themoviedb.org/3/genre/tv/list?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US';

fetch(urlSerie)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let contenedor = document.querySelector('.contentGenreS')
        let generos = data.genres;
        console.log(generos)
        let losGeneros = '';

        for (let i = 0; i < generos.length; i++) {
            losGeneros += `
            <div class="generosS">
                <a href="detail-genreSerie.html?id=${generos[i].id}&title=${generos[i].name}"><p class="genreTitle">${generos[i].name}</p></a>
            </div>
            `
        }
        contenedor.innerHTML = losGeneros

    })
    .catch(function (error) {
        console.log('este es el error = ' + error)
    })