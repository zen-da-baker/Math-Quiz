let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let input = document.getElementById('input').value;
let response = document.getElementById('response');

function randomNum() {
    return Math.floor(Math.random() * 100);
}

let num1Value = randomNum();
let num2Value = randomNum();

function main() {
    num1.innerHTML = num1Value;
    num2.innerHTML = num2Value;
}

function capture() {
    if (parseInt(input) == num1Value + num2Value) {
        response.innerHTML = 'Correct!';
    } else {
        response.innerHTML = 'Incorrect';
    }
}
