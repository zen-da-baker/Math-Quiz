## Motivation
This project was inspired by the Wordle clone for spelling created by Sabrina Cruz of [Answer in Progress](https://youtu.be/KK3mS4bQ5JM?si=TL0yxw-sdX3LVyzd).
## Build Process
### Page Creation
The base HTML page was created with the intention of the JavaScript to be used for the apps functionality. The programming file was added to a script tag at the bottom of the page.
```HTML
<script src="app.js"></script>
```
The main function of the app would be contained in a `main()` function that executes on the load of the page.
```HTML
<body onload="main()"></body>
```
### Display
The core of the app interface is in a div element with a class named card.
```HTML
<div class="card" id="card">
	<h2 class="text">Question <span id="questionNum"></span></h2>

	<label for="input" action="app.js" method="post" class="text">

		<span id="num1">num1</span><span> + </span><span id="num2">num2</span> <span> = </span>

	</label>

	<input type="number" id="input" name="input" min="1" max="200" class="input text"/>

	<button id="submit" onclick="capture()" class="input btn">Submit</button>

	<div id="response"></div>

</div>
```
The question number would be determined by the JavaScript once it is programmed.
The numbers for the math problem will also be determined by the JavaScript.
When the user is ready for submitting an answer, they will press a submit button which will execute a function called `capture()`.
### Storing DOM Elements in JavaScript
Each DOM element that will be manipulated is stored as a constant variable in JavaScript.
```JavaScript
const num1 = document.getElementById('num1');
```
### Testing Input
Next I wanted to test the user input to see if it is read by the JavaScript file.
```JS
function inputTest() {
    console.log(input.value);
}

document.getElementById('input').addEventListener('change', inputTest);
```
### Number Generation
The core of the app is the random number generation which is done in several stages. Easy problems have a single digit while more difficult problems have more digits to work with. 
```JS
function easyRand() {
    return Math.floor(Math.random() * 10);
}

num1Value = easyRand();
```
### Capture User Input
Capturing the user input for answering the problems was next and done through a capture function that executes when a submit button is pressed.
```JS
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
```
### Main Function
The main function of the app executes on the load of the page and is executed again each time the user presses a replay button. 
```JS
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
```
### Result
Depending on the answer of the user, the space below the problem is manipulated to display if the user answered correctly or incorrectly using functions with string insertions. 
```JS
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
```
### Reset for next Question
Once the user has seen the result of their answer, a reset function is executed to reset the DOM of the results back to the original settings and the main app function is executed again. 
```JS
function reset() {
    response.innerHTML = '';
    input.value = '';

    card.style.height = '8rem';
}
```
### Global Scaling
The styling of the app in minimalist with high contrasting black and whites and box shadows throughout. 
The global setting of the CSS is to set the rem calculation and set margin and padding to 0.
```CSS
* {
    padding: 0;
    margin: 0;
}

html {
    font-size: 16px;
}
```
### Text Typography
The font-family of the text and the correct and incorrect displays were set next.
```CSS
h1, h2, h3, p, label, .btn, .text {
    line-height: 1.5rem;
    margin-left: 0.75rem;
    font-family: Arial, Helvetica, sans-serif;
}

.correct {
    color: hsl(150, 50%, 30%);
    background-color: hsl(150, 50%, 80%);
}

.incorrect {
    color: hsl(10, 50%, 30%);
    background-color: hsl(10, 50%, 80%);
}
```
### Containers
The body of the UI is in a container class using Flexbox and the information within that container is in cards.
```CSS
.container {
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
}

.card {
    border-radius: 0.5rem;
    border: 0.25rem solid black;
    box-shadow: 0.5rem 0.5rem;
    width: 22rem;
    height: 8rem;
    margin: 3rem;
}
```
### Components
Finally, the components of the app which are the buttons and text fields were set to follow the minimalist design of the rest of the UI.
```CSS
.input {
    border-radius: 0.5rem;
    padding: 0.5rem;
}

.btn {
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;

    color: black;
    background-color: white;

    box-shadow: 0.25rem 0.25rem;
}

.btn:hover {
    color: white;
    background-color: black;
}
```