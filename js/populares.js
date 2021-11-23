let url = 'https://api.themoviedb.org/3/movie/popular?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let populares = data.results;
        console.log(populares);
        let contenedor = document.querySelector(`.contenedorPop`);
        let almacenDePopulares = ``;

        for(let i=0; i<5; i++);{
        almacenDePopulares += `
        <div class="peliPopulares">
        <a href="detail-movie.html?id=${populares[i].id}"><img src="${IMG_URL+populares[i].poster_path}" alt="${populares[i].title}"></a>
        <p>${populares[i].title}</p>
        <p clas="fechaPeli">${populares[i].release_data}</p>
        </div>
        `
    }
    contenedor.innerHTML = almacenDePopulares

    })
    .catch(function(error){
        console.log(`El Error es ` + error);
    })