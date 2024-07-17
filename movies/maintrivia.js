import trivia from "./script/trivia.js";

// display movies
function triviaTemplate(trivia, index) {
    return `<h1>${trivia.title}</h1>
            <p>${trivia.question}</p>
            <input type="radio" value="answer1" name="question${index}">
            <label for="answer1">${trivia.answer1}</label>
            <input type="radio" value="answer2" name="question${index}>
            <label for="answer2">${trivia.answer2}</label>
            <input type="radio" value="answer3" name="question${index}>
            <label for="answer3">${trivia.answer3}</label>
            <input type="radio" value="answer4" name="question${index}>
            <label for="answer4">${trivia.answer4}</label>
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