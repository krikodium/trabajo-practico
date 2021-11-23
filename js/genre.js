let urlPeli = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US';

fetch(urlPeli)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
<<<<<<< HEAD
        let contenedor = document.querySelector('.contentGenreM');
        let generos = data.genres;
        console.log(generos)
        let losGeneros = '';
        for (let i = 0; i < generos.length; i++) {
            losGeneros += `
            <div class="generos">
                <a href="detail-genre.html?id=${generos[i].id}&title=${generos[i].name}"><p class="genreTitle">${generos[i].name}</p></a>
            </div>
=======
        let contenedor = document.querySelector('.contentGenre')
        let generos = data.genres;
        let losGeneros = '';
        console.log(generos)
        
        for(let i = 0; i < generos.lenght; i++){
            losGeneros += `
                <div class="generos">
                    <a href="detail-genre.html?id=${generos[i].id}&title=${generos[i].name}"><p class="genreTitle">${generos[i].name}</p></a>
                </div>
>>>>>>> 63d3129508a4b0f9dfeaacda893e0e8a1729d70d
            `
        }
        contenedor.innerHTML = losGeneros;
    })
    .catch(function (error) {
        console.log('este es el error = ' + error)
    })

<<<<<<< HEAD
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
=======
    //generos de series

    let urlSerie =`https://api.themoviedb.org/3/genre/tv/list?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US`;

    fetch(urlSerie)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let contenedor = document.querySelector('.contentGenreS')
        let generos = data.genres;
        console.log(generos);
        let losGeneros = ``;

        for(let i=0; i<generos.lenght; i++){
            losGeneros += `
            <div class="generosS">
                <a href="detail-genreSeries.html?id=${generos[i].id}&title=${generos[i].name}"><p class="genreTitle">${generos[i].name}</p></a>
            </div>
            `
        }
        contenedor.innerHTML= losGeneros;
    })
    .catch(function(error){
        console.log(`Este es el error = ` + error);
    })

>>>>>>> 63d3129508a4b0f9dfeaacda893e0e8a1729d70d
