import trivia from "./script/trivia.js";
import correctAnswers from "./script/correctanswers.js";

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
    const outputElement = document.querySelector(".trivia-questions");
    const triviaHTML = trivia.map((triviaItem, index) => triviaTemplate(triviaItem, index)).join('');
    outputElement.innerHTML = triviaHTML;
}

//get score
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    let score = 0;
    for (let i = 0; i <= 10; i++){
        const userAnswer = formData.get(`question${i}`);
        const correctAnswer = correctAnswers[`question${i}`];

        console.log(`User Answer for Question ${i}: ${userAnswer}`);
        console.log(`Correct Answer for Question ${i}: ${correctAnswer}`);

        if (userAnswer === correctAnswer) {
            score++;
        }
    }
    

    localStorage.setItem('triviaScore', score);
    console.log(score);
    window.location.href = "score.html";
}

function init() {
    renderTrivia(trivia);
    const formElement = document.querySelector('form');
    if (formElement) {
        formElement.addEventListener('submit', handleSubmit);
    } else {
        console.error("Form element not found.");
    }
}
init();

