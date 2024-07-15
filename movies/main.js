import movies from "./script/movies.js";

function movieTemplate(movie) {
    return `<section class="movie-section">
            <h2 class="movie-title">${movie.title}</h2>
            <h3 class="release-year">${movie.releaseYear}</h3>
            <h3 class="genres">${movie.genre}</h3>
            <p class="description">${movie.description}</p>
            <img class="movie-poster" src="${movie.img}">
            </section>
            `;
}

function renderMovies(movies) {
    const outputElement = document.querySelector(".movie-gallery");
    const movieHTML = movies.map(movie => movieTemplate(movie)).join('');
    outputElement.innerHTML = movieHTML;
}

function init() {
    renderMovies(movies);
}
init();