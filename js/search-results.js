<<<<<<< HEAD
let qs = location.search;
let qst = new URLSearchParams(qs);
let terminoBuscado = qst.get('buscador');

let busquedaUser = document.querySelector('.titulos')
busquedaUser.innerText = `Los resultados de la busqueda ${terminoBuscado}, son:`

//variables de url 

const IMG_URL = 'https://image.tmdb.org/t/p/w500';


//fetch de res de busqueda. 

let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&page=1&include_adult=false&query=${terminoBuscado}`;

fetch(urlSearch)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let contenedor = document.querySelector('.contentSearch');
        let search = data.results;
        let searchRes = '';
        //primer fila
        for (let i = 0; i < 5; i++) {
            searchRes += `
            <div class="peliRes">
                <a href="detail-movie.html?id=${search[i].id}"><img src="${IMG_URL+search[i].poster_path}" alt="${search[i].title}"></a>
                <p>${search[i].title}</p>
                <p class="fechaPeli">${search[i].release_date}</p>
            </div>  
            `
        }
        contenedor.innerHTML = searchRes
    })
    .catch(function (error) {
        console.log('este es el error = ' + error)
    })

//series results

let urlSerie = `https://api.themoviedb.org/3/search/tv?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&page=1&include_adult=false&query=${terminoBuscado}`

fetch(urlSerie)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let contenedor = document.querySelector('.contentSearchSerie');
        let serieSearch = data.results
        let lasSeries = '';

        for (let i = 0; i < 5; i++) {
            lasSeries += ` <div class="serieRes">
            <a href="detail-populares.html?id=${serieSearch[i].id}"><img src="${IMG_URL+serieSearch[i].poster_path}" alt="${serieSearch[i].name}"></a>
            <p>${serieSearch[i].name}</p>
            <p class="fechaPeli">${serieSearch[i].first_air_date}</p>
        </div>  `
        }
        contenedor.innerHTML = lasSeries
    })
    .catch(function (error) {
        console.log('este es el error = ' + error)
    })
=======
>>>>>>> 63d3129508a4b0f9dfeaacda893e0e8a1729d70d
