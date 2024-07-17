import trivia from "./script/trivia.js";

// display movies
function triviaTemplate(trivia, index) {
    return `<h1 class="movie-title-trivia">${trivia.title}</h1>
            <p class="trivia-question">${trivia.question}</p>
            <section class="answers">
            <div class="trivia-option">            
                <input type="radio" value="answer1" name="question${index}">
                <label for="answer1" class="trivia-answer">${trivia.answer1}</label>
            </div>
            <div class="trivia-option">
                <input type="radio" value="answer2" name="question${index}">
                <label for="answer2" class="trivia-answer">${trivia.answer2}</label>
            </div>
            <div class="trivia-option">
                <input type="radio" value="answer3" name="question${index}">
                <label for="answer3" class="trivia-answer">${trivia.answer3}</label>
            </div>
            <div class="trivia-option">
                <input type="radio" value="answer4" name="question${index}">
                <label for="answer4" class="trivia-answer">${trivia.answer4}</label>
            </div>      
            </section>
            `;
}
function renderTrivia(trivia) {
    const outputElement = document.querySelector("form");
    const triviaHTML = trivia.map((triviaItem, index) => triviaTemplate(triviaItem, index)).join('');
    outputElement.innerHTML = triviaHTML;
}
function init() {
    renderTrivia(trivia);
}
init();