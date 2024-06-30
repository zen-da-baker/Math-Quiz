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

export {correctRes, incorrectRes };