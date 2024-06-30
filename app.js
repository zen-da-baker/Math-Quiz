let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let input = document.getElementById('input');
let response = document.getElementById('response');
let questionNum = document.getElementById('questionNum');

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

function randomNum() {
    return Math.floor(Math.random() * 100);
}

function main() {

    let num1Value = randomNum();
    let num2Value = randomNum();

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

    document.getElementById('submit').addEventListener('click', capture);

    num1.innerHTML = num1Value;
    num2.innerHTML = num2Value;

    questionNum.innerHTML = question++;

    console.log(correct);
    console.log(incorrect);
    
}






