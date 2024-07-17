function displayScore() {
    const score = localStorage.getItem('triviaScore');
    const scoreNumber = Number(score);
    document.getElementById('score').innerText = scoreNumber ? scoreNumber : "0";

    if (scoreNumber === 11)
    {
        const outputElement = document.querySelector(".score-main");
        const hundredPercent = `<p class="hundredPercent">You got 100%!!</p>`;
        outputElement.innerHTML += hundredPercent;
    }
}

document.addEventListener('DOMContentLoaded', displayScore);