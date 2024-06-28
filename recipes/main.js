import recipes from "./recipes.mjs";

function getRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

function getRandomRecipe(list) {
    const listLength = list.length;
    const randomNumber = getRandomNumber(listLength)
    return list[randomNumber]
}

function recipeTemplate(recipe) {
    return `<section class="recipe-card">
            <img class="recipe-img" src="${recipe.image}">
            <section class= "tags">
            ${tagsTemplate(recipe.tags)}
            </section>
            <h2 class="recipe-name">${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class="description">${recipe.description}</p>
        </section>  `;
}

function tagsTemplate(tags) {
    let html = "";
    tags.forEach(tag => {
        html += `<p class="tag">${tag}</p>`;
    });
	return html;
}

function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
    for (let i = 1; i < 6; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star">☆</span>`
        }
    }
	html += `</span>`
	return html
}

function renderRecipes(recipeList) {
        const outputElement = document.querySelector("main");
        const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipeHTML;
}

function init() {
    const recipe = getRandomRecipe(recipes)
    renderRecipes([recipe]);
}
init();

function filter(query) {
	const filtered = recipes.filter(recipe => {
        const name = recipe.name.toLowerCase();
        const description = recipe.description.toLowerCase();
        const tags = recipe.tags.map(tag => tag.toLowerCase());
        const ingredients = recipe.recipeIngredient.map(ingredient => ingredient.toLowerCase());

        return name.includes(query) ||
                description.includes(query) ||
                tags.includes(query) ||
                ingredients.includes(query);
    })
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
		return sorted
}



function searchHandler(e) {
	e.preventDefault()
    const userInput = document.getElementById('search-bar').value;
    const userQuery = userInput.toLowerCase();
    const filteredRecipes = filter(userQuery);
    renderRecipes(filteredRecipes);
}

document.getElementById('searchbutton').addEventListener('click', searchHandler);