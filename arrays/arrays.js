//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}<li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();
//example 2
const grades = ['A', 'B', 'A']
function gradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4
    } else if (grade === "B") {
        points = 3
    }
    return points;
}
const gpaPoints = grades.map(gradeToPoints);
console.log(gpaPoints);

// example 2

//example 3
const gpaPointsTwo = grades.map(gradeToPoints);
const pointsTotal = gpaPointsTwo.reduce(calculate)
console.log(pointsTotal);
function calculate (total, item) {
    return total + item;
}
const gpa = pointsTotal /gpaPoints.length;
console.log(gpa);
//example 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filterFruit = fruits.filter(function (fruit) {
    return fruit.length < 6;
});
console.log(filterFruit[0]);
//example 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex);
let value = value(numbers[2]);
console.log(value);

