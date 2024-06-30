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

let correctRes = '<p>Correct!</p> <button onclick="main()">Would you like to play again?</button>';
let incorrectRes = '<p>Incorrect</p> <button onclick="main()">Would you like to play again?</button>';

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

function main() {

    response.innerHTML = '';
    input.value = '';

    let num1Value = 0;
    let num2Value = 0;

    if (question <= 5) {
        num1Value = easyRand();
        num2Value = easyRand();
    } else if (question > 5 && question < 10) {
        num1Value = mediumRand();
        num2Value = mediumRand();
    } else if (question > 10 && question < 15) {
        num1Value = hardRand();
        num2Value = hardRand();
    } else {
        num1Value = veryHardRand();
        num2Value = veryHardRand();
    }

    

    console.log("Num 1: " + num1Value);
    console.log("Num 2: " + num2Value);


    function capture() {

        if (input.value == NaN) {
            input.value = parseInt(input.value);
        }

        if (input.value == num1Value + num2Value) {
            response.innerHTML = correctRes;
            correct++;
            console.log('Correct!');
        } else {
            response.innerHTML = incorrectRes;
            incorrect++;
            console.log('Incorrect!');
        }
   
    }

    submit.addEventListener('click', capture);

    num1.innerHTML = num1Value;
    num2.innerHTML = num2Value;

    questionNum.innerHTML = question++;

    console.log("Correct: " + correct);
    console.log("Incorrect: " + incorrect);

    
    
}






