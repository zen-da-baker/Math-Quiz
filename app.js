let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let input = document.getElementById('input');
let response = document.getElementById('response');
let questionNum = document.getElementById('questionNum');
let submit = document.getElementById('submit');

function inputTest() {
    console.log(input.value);
} 

document.getElementById('input').addEventListener('change', inputTest);

let question = 1;
questionNum.innerHTML = question;

let correct = 0;
let incorrect = 0;


let num1Value = 0;
let num2Value = 0;

function easyRand() {
    return Math.floor(Math.random() * 10);
}

function mediumRand() {
    return Math.floor(Math.random() * 100);
}

function hardRand () {
    return Math.floor(Math.random() * 1000);
}

function veryHardRand () {
    return Math.floor(Math.random() * 10000);
}

function reset() {
    response.innerHTML = '';
    input.value = '';
}

function scaleDifficulty() {
    if (correct <= 5) {
        num1Value = easyRand();
        num2Value = easyRand();
    } else if (correct > 5 && correct <= 10) {
        num1Value = mediumRand();
        num2Value = mediumRand();
    } else if (correct > 10 && correct <= 15) {
        num1Value = hardRand();
        num2Value = hardRand();
    } else if (correct > 15) {
        num1Value = veryHardRand();
        num2Value = veryHardRand();
    } else {
        num1Value = veryHardRand();
        num2Value = veryHardRand();
    }
}

function correctRes(correct, incorrect) {
    return `
        <p>Correct!</p>
        <button onclick="main(); reset()" class="btn">Would you like to play again?</button>
        <p>Correct: ${correct}</p>
        <p>Incorrect: ${incorrect}</p>
    `;
}

function incorrectRes (correct, incorrect) { 
    return `
        <p>Incorrect</p>
        <button onclick="main(); reset()" class="btn">Would you like to play again?</button>
        <p>Correct: ${correct}</p>
        <p>Incorrect: ${incorrect}</p>
    `;
}

function capture() {

    


    if (input.value == NaN) {
        input.value = parseInt(input.value);
    }

    if (input.value == num1Value + num2Value) {
        correct++;
        response.innerHTML = correctRes(correct, incorrect);
        console.log('Correct!');
    } else {
        incorrect++;
        response.innerHTML = incorrectRes(correct, incorrect);
        console.log('Incorrect!');
    }

}

function main() {
    scaleDifficulty();

    console.log("Num 1: " + num1Value);
    console.log("Num 2: " + num2Value);

    num1.innerHTML = num1Value;
    num2.innerHTML = num2Value;

    questionNum.innerHTML = question++;

    console.log("Correct: " + correct);
    console.log("Incorrect: " + incorrect);

    
    
}






