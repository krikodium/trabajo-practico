let qs = location.search;
let qst = new URLSearchParams(qs);
let id = qst.get(`id`);
console.log(id);

let qs1 = location.search;
let qst1 = new URLSearchParams(qs1);
let title = qst1.get(`title`);
console.log(title);

const IMG_URL = 'https://image.tmdb.org/t/p/w500';


let url = `https://api.themoviedb.org/3/discover/movie?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let acaTitulo = document.querySelector(`.titulos`)
        acaTitulo.innerHTML = `El genero elegido es ${title}`;
        console.log(data);

        let genero = data.results;
        let contenedor = document.querySelector(`.contenedorDetailGenre`);
        let peliGeneros = ``;

        for(let i=0; i<5; i++){
            peliGeneros += `
            <div class="generoPeli">
            <a href="detail-movie.html?id=${genero[i].id}"><img src="${IMG_URL+genero[i].poster_path}"></a>
            <p>${genero[i].title}</p>
            <p class="fechaPeli">${genero[i].release_data}</p>
            </div>
            `
        }
        contenedor.innerHTML = peliGeneros
    })
    .catch(function(error){
        console.log(`El error fue = ` + error);
    })

    let urlSerie = `https://api.themoviedb.org/3/discover/tv?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;

    fetch(urlSerie)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let acaTitulo = document.querySelector(`.titulos`);
            acaTitulo.innerHTML = `El genero elegido es ${title}`;
            console,log(data);
            let genero = data.results;
            let contenedor = document.querySelector(`.contenedorSeries`);
            let peliGeneros = ``;

            for(let i=0; i<5; i++){
                peliGeneros += `
                <div class="generoPeli>
                    <a href="detail-populares.html?id=${genero[i].id}"><img src="${IMG_URL+genero[i].poster_path}"></a>
                    <p>${genero[i].name}</p>
                    <p class"fechaPeli">${genero[i].first_air_date}</p>
                    </div>
                    `
            }
            contenedor.innerHTML = peliGeneros
        })
        .catch(function(error){
            console.log(`El error fue =` + error);
        })