import { easyRand, mediumRand, hardRand, veryHardRand } from './difficulties.js';
import { correctRes, incorrectRes } from './responses.js';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const input = document.getElementById('input');
const response = document.getElementById('response');
const questionNum = document.getElementById('questionNum');
const submit = document.getElementById('submit');

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






