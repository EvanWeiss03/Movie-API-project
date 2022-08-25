function error(event) {
    event.preventDefault()
    alert("This feature has not been implemented")
}

function menuOpen() {
    setTimeout(function () {
        document.body.classList += " menu--open"
    }, 500)
}


function menuClose() {
    setTimeout(function () {
        document.body.classList.remove('menu--open')
    }, 500)
}

const movieEl = document.querySelector(".movies")
let loadingState = document.body.querySelector('.loading')
const loadingBar = document.querySelector('.bar__loading')

function searchButton() {
    window.location.href = "http://127.0.0.1:5501/browse.html";
}

searchBar.addEventListener('keyup', (e) => {
    loadingBar.classList += " display__block"
    setTimeout(function () {
        let searchString = e.target.value.toLowerCase();
        main(searchString)
    }, 500)
})

async function main(searchString) {
    const movie = await fetch(`http://www.omdbapi.com/?apikey=1a34ac4f&s=${searchString}`);
    const movieInfo = await movie.json()
    if (movieInfo.Search == null) {
        document.getElementById('search__result--img-wrapper').style.display = "flex"
        return movieEl.innerHTML = ""
    }

    setTimeout(function () {
        document.getElementById('search__result--img-wrapper').style.display = "none"
        movieEl.innerHTML = (movieInfo.Search)?.map((movie) => movieHTML(movie)).slice(0, 8).join("")
    }, 1000)

    loadingBar.classList.remove("display__block")
}

function movieHTML(movie) {
    return `<li class="movie">
    <img
   class="movie__poster"
      src="${movie.Poster}"
      alt=""
   />
   <div class="movie__text--wrapper hover">
    <h3 class="movie__title">${movie.Title}</h3>
    <h3 class="movie__date">${movie.Year}</h3>
    </div>
    
  </li>`

}

