let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let input = document.getElementById('input');
let response = document.getElementById('response');
let questionNum = document.getElementById('questionNum');

function inputTest() {
    console.log(input.value);
} 

document.getElementById('input').addEventListener('change', inputTest);

 

questionNum.innerHTML = 1;

function randomNum() {
    return Math.floor(Math.random() * 100);
}

let num1Value = randomNum();
let num2Value = randomNum();

console.log("Num 1: " + num1Value);
console.log("Num 2: " + num2Value);

function main() {
    num1.innerHTML = num1Value;
    num2.innerHTML = num2Value;

    
}

function capture() {

    if (input.value == NaN) {
        input.value = parseInt(input.value);
    }
    
    if (input.value == num1Value + num2Value) {
        response.innerHTML = 'Correct!';
        console.log('Correct!');
    } else {
        response.innerHTML = 'Incorrect';
        console.log('Incorrect!');
    }
    questionNum.innerHTML++;
}


