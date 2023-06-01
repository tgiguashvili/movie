const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const main = document.querySelector("#main")
console.log(main)
//funqcia romelsac parametrad gamovuyolet titon API Linki
getMovies(API_URL)

//jer moaqvs linki
//vaketeb dalodebas rom daifechos eg url(anu waikitxos am url is informacia)
//res= aris dafechvis shedegi(urlshi arsebuli informaciis wakitxvis shedegi)
//data= davelodo dafechvis shedegs da gamovitano JSON formatSi

async function getMovies(url){
    console.log(url)
    const res = await fetch(url) 
    console.log(res)
    const data = await res.json()
    console.log(data)
    showMovies(data.results)
}

function showMovies (movies) {
    main.innerHTML = " "

    movies.forEach(movie => {
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")

        movieEl.innerHTML = `
        <div class="movie">
        <img src="${IMG_PATH + movie.poster_path}">
        <div class="movie-content-box">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <p>${movie.original_language}</p>
        <span>
        <p>${movie.vote_average}</p>
        </span>

        </div>
        </div>
        `
        main.appendChild(movieEl)
        
    });

}
//IMG(IMG_PATH)
//async function IMG(url) {
 //   console.log(url)
  //  const ftch=await fetch(url)
  //  console.log(ftch)
  //  const dataimg = await ftch.json()
   // console.log(dataimg)
   // IMG(dataimg.results)
  //  console.log(IMG)


//}