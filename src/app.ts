async function serviceWorkerRegistration() {

    const registration = await navigator.serviceWorker.register( "/build/serviceWorker.js", { scope: "/build/" } );

    if ( registration.installing ) {

        console.log( "Service worker is installing." );

    } else if ( registration.waiting ) {

        console.log( "Service worker is waiting." );

    } else if ( registration.active ) {

        console.log( "Service worker is active." );
    
    }

}

serviceWorkerRegistration();

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const input = document.querySelector('input');
const response = document.getElementById('response');
const questionNum = document.getElementById('questionNum');
const submit = document.getElementById('submit');
const card = document.getElementById('card');

function inputTest() {

    if ( input !== null ) {

        console.log( input.value );

    }

} 

document.getElementById('input').addEventListener( 'change', inputTest );

let question: number = 1;

questionNum.textContent = question.toString();

let correct: number = 0;
let incorrect: number = 0;

let num1Value: number = 0;
let num2Value: number = 0;

function reset() {

    response.textContent = '';

    input.value = '';

    card.style.height = '8rem';

}


function correctRes(correct, incorrect) {
    card.style.height = '18rem';
    return `
        <h3 class="text answer correct">Correct!</h3>
        <button onclick="main(); reset()" class="btn">Would you like to play again?</button>
        <p class="text">Correct: ${correct}</p>
        <p class="text">Incorrect: ${incorrect}</p>
    `;
}

function incorrectRes (correct, incorrect) { 

    card.style.height = '21rem';

    return `
        <h3 class="text answer incorrect">Incorrect</h3>
        <p class="text answer incorrect">The correct answer is: ${num1Value + num2Value}</p>
        <button onclick="main(); reset()" class="btn">Would you like to play again?</button>
        <p class="text">Correct: ${correct}</p>
        <p class="text">Incorrect: ${incorrect}</p>
    `;
}

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
    

    if (input.value == (num1Value + num2Value).toString() ) {
        correct++;
        response.innerHTML = correctRes(correct, incorrect);
        console.log('Correct!');
    } else {
        incorrect++;
        response.innerHTML = incorrectRes(correct, incorrect);
        console.log('Incorrect!');
    }
}

submit.onclick = capture;

function main() {

    scaleDifficulty();

    console.log("Num 1: " + num1Value);
    console.log("Num 2: " + num2Value);

    num1.innerHTML = num1Value.toString();
    num2.innerHTML = num2Value.toString();

    let newQuestionNumber = question++;

    questionNum.innerHTML = newQuestionNumber.toString();

    console.log("Correct: " + correct);
    console.log("Incorrect: " + incorrect);

}

main();

async function getAppFile() {

    const response = await fetch("/build/app.js");

    console.log( response );

}

setTimeout( getAppFile, 3000 );