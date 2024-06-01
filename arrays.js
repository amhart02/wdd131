//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}<li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();
//example 2
const grades = ['A', 'B', 'A']
function gradeToPoints() {
    let points = 0;
    if (grades === "A") {
        points = 4
    } else if (grades === "B") {
        points = 3
    }
    return points;
}
const gpaPoints = grades.map(gradeToPoints);
//example 3
const gpaPointsTwo = grades.map(gradeToPoints);
const pointsTotal = gpaPointsTwo.reduce(calculate)
function calculate (total, item) {
    return total + item;
}
const gpa = pointsTotal /gpaPoints.length;
//example 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filterFruit = fruits.filter(function (fruit) {
    return fruit.length < 6;
});
//example 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);

