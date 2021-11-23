<<<<<<< HEAD
//aca en estas lineas de codigo lo que haces es decirle que agarre el id del genero de peliculas elegido.
let qs = location.search;
let qst = new URLSearchParams(qs);
let id = qst.get('id');
console.log(id)
//despues volves a hacer el mismo procedimiento para sacar el "title" asi mostrarle al user el genero elegido 
let qs1 = location.search;
let qst1 = new URLSearchParams(qs1);
let title = qst1.get('title');
console.log(title)
//esta es la url que necesitas para mostrar la img, tenes que concatenar ambos link. 
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

//aca declaras la variable con la que podes sacar el listado de peliculas que coinciden con el genero ingresado mediante querystrings, aca solamente usas el id mas abajo debes de utilizar el "title"
let url = `https://api.themoviedb.org/3/discover/movie?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
//abris un fetch 
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        //aca es la seccion del title donde indicas el genero elegido 
        let acaTitulo = document.querySelector('.titulos')
        //con esta linea de codigo le decis que en el html seleccionado muestres el indicador de generos
        acaTitulo.innerHTML = `El genero elegido es ${title}`;
        console.log(data)
        //declaras variables para poder utilizar y modificar el DOM
        let genero = data.results;
        //este es el contenedor 
        let contenedor = document.querySelector('.contenedorDetailGenre')
        //aca es dde vas a ir rellenando con las informacion del bucle de la API 
        let peliGeneros = '';
        //abris el bucle para recorrer el array 
        for (let i = 0; i < 5; i++) {
            peliGeneros += `
                <div class="generoPeli">
                    <a href="detail-movie.html?id=${genero[i].id}"><img src="${IMG_URL+genero[i].poster_path}"></a>
                    <p>${genero[i].title}</p> 
                    <p class="fechaPeli">${genero[i].release_date}</p>
                </div>
            `
        }
        //con esto modificas el DOM y le decis que agruegue los datos en el contenedor. 
        contenedor.innerHTML = peliGeneros

    })
    .catch(function (error) {
        console.log('el error fue = ' + error)
    })

//series
//esta es la seccion de detail-genre series, esta en una pagina separada HTML pero el codigo opera en este JS 
let urlSerie = `https://api.themoviedb.org/3/discover/tv?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;

fetch(urlSerie)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let acaTitulo = document.querySelector('.titulos')
        acaTitulo.innerHTML = `El genero elegido es ${title}`;
        console.log(data)
        let genero = data.results;
        let contenedor = document.querySelector('.contenedorSeries')
        let peliGeneros = '';

        for (let i = 0; i < 5; i++) {
            peliGeneros += `
                <div class="generoPeli">
                    <a href="detail-populares.html?id=${genero[i].id}"><img src="${IMG_URL+genero[i].poster_path}"></a>
                    <p>${genero[i].name}</p> 
                    <p class="fechaPeli">${genero[i].first_air_date}</p>
                </div>
            `
        }
        contenedor.innerHTML = peliGeneros

    })
    .catch(function (error) {
        console.log('el error fue = ' + error)
    })
=======
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
            console.log(`El Error fue =` + error);
        })
>>>>>>> 63d3129508a4b0f9dfeaacda893e0e8a1729d70d
