import movies from "./script/movies.js";

// display movies
function movieTemplate(movie) {
    return `<section class="movie-section">
            <h2 class="movie-title">${movie.title}</h2>
            <h3 class="release-year">${movie.releaseYear}</h3>
            <h3 class="genre">${movie.genre}</h3>
            <p class="description">${movie.description}</p>
            <img class="movie-poster" src="${movie.img}" alt="${movie.alt}">
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

//sort items 
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

//search bar stuffs
function filter(query) {
	const filtered = movies.filter(movie => {
    const name = (movie.name || '').toLowerCase();
    const releaseYear = movie.releaseYear ? movie.releaseYear.toString() : '';
    const genre = (movie.genre || '').toLowerCase();
    const description = (movie.description || '').toLowerCase();

    return name.includes(query) ||
            description.includes(query) ||
            genre.includes(query) ||
            releaseYear.includes(query);
    })

	const sorted = filtered.sort((a, b) => {
        const nameA = a.name || '';
        const nameB = b.name || ''; 
        return nameA.localeCompare(nameB);
    });
	return sorted;
}

function searchHandler(e) {
	e.preventDefault()
    const userInput = document.querySelector('.input').value;
    const userQuery = userInput.toLowerCase();

    const filteredMovies= filter(userQuery);
    renderMovies(filteredMovies);
}

document.querySelector('.search-button').addEventListener('click', searchHandler);