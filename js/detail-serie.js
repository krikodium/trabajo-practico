let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal
console.log(id)


const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let url = `
https://api.themoviedb.org/3/tv/${id}?api_key=eff71d911bc68b6cdf67ad2d02630320&language=en-US`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let portada = document.querySelector('.detailImg');
        let titulo = document.querySelector('.titleMovie');
        let fecha = document.querySelector('.datePeli');
        let resumen = document.querySelector('.sinopsis');

        portada.src = IMG_URL + data.poster_path //aca
        titulo.innerHTML = data.name
        fecha.innerHTML = data.first_air_date
        resumen.innerHTML = data.overview





    })
    .catch(function (error) {
        console.log(`este es el eror : ${error}`)
    })

//declaro un array que iremos completando con datos a lo largo del cod
let favorites = [];

//hacer click en el link debemos capturar el elemento.
let fav = document.querySelector('.Fav');
fav.addEventListener('click', function () {
    evento.preventDefault();

    //agregar al array
    favorites.push()
    //guardar el array en el storage
})