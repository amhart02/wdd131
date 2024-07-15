import movies from "./script/movies.js";

// display movies
function movieTemplate(movie) {
    return `<section class="movie-section">
            <h2 class="movie-title">${movie.title}</h2>
            <h3 class="release-year">${movie.releaseYear}</h3>
            <h3 class="genre">${movie.genre}</h3>
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

//sort the items
// function sortItems() {
//     const sortOption = document.getElementById('sort-options').value;
//     const itemList = document.getElementsByClassName('movie-gallery')[0];
//     const items = Array.from(itemList.getElementsByClassName('movie-section'));

//     if (sortOption === 'Movie Title') {
//         items.sort((a, b) => a.querySelector('.movie-title').textContent.localeCompare(b.querySelector('.movie-title').textContent));
//     } else if (sortOption === 'Release Year') {
//         items.sort((a, b) => parseInt(a.querySelector('.release-year').textContent) - parseInt(b.querySelector('.release-year').textContent));
//     } else if (sortOption === 'Genre') {
//         items.sort((a, b) => a.querySelector('.genre').textContent.localeCompare(b.querySelector('.genre').textContent)); }

//     itemList.innerHTML = '';
//     items.forEach(item => itemList.appendChild(item));
// }

// document.querySelector('#sort-options').addEventListener('change', sortItems);

function sortItems() {
    const sortOption = document.getElementById('sort-options').value;
    const itemList = document.getElementsByClassName('movie-gallery')[0];
    const items = Array.from(itemList.getElementsByClassName('movie-section'));

    if (sortOption === 'Movie Title') {
        items.sort((a, b) => {
            const titleA = a.querySelector('.movie-title')?.textContent || '';
            const titleB = b.querySelector('.movie-title')?.textContent || '';
            return titleA.localeCompare(titleB);
        });
    } else if (sortOption === 'Release Year') {
        items.sort((a, b) => {
            const yearA = parseInt(a.querySelector('.release-year')?.textContent, 10) || 0;
            const yearB = parseInt(b.querySelector('.release-year')?.textContent, 10) || 0;
            return yearA - yearB;
        });
    } else if (sortOption === 'Genre') {
        items.sort((a, b) => {
            const genreA = a.querySelector('.genre')?.textContent || '';
            const genreB = b.querySelector('.genre')?.textContent || '';
            return genreA.localeCompare(genreB);
        });
    }

    itemList.innerHTML = '';
    items.forEach(item => itemList.appendChild(item));
}

document.querySelector('#sort-options').addEventListener('change', sortItems);