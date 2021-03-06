let url = 'https://api.themoviedb.org/3/movie/popular?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let populares = data.results
        let contenedor = document.querySelector('.contenedorPop');
        let losPop = ''
        for (let i = 0; i < 5; i++) {
            losPop += `
                <div class="peliPopulares"> 
                    <a href="detail-movie.html?id=${populares[i].id}"><img src="${IMG_URL + populares[i].poster_path}"</a>
                    <p>${populares[i].title}</p>
                    <p class="fechaPeli">${populares[i].release_date}</p>
                </div>
            `
        }
        contenedor.innerHTML = losPop
    })