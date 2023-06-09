const main = document.getElementById("#main")
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const movie = localStorage.getItem("movie")
console.log(JSON.parse(movie))

const movieData = JSON.parse(movie)
console.log(movie)

getMovies()

async function getMovies(url){
    console.log(url)
    const res = await fetch(URL) 
    console.log(res)
    const data = await res.json()
    console.log(data)
    showMovies(data.results)
    
}



const movieDesc = document.createElement("div")

movieDesc.classList.add("movie_desc");

movieDesc.innerHTML = `
<div class="container">
<img src="${IMG_PATH + movie.backdrop_path}"> 
</div>
`;

main.appendChild(movieDesc);
