let randomNumber = parseInt(Math.random() * 100 + 1); // Number between 1 and 100
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Function to enable or disable the submit button based on input value
const toggleSubmitButton = () => {
    if (userInput.value === '') {
        submit.setAttribute("disabled", '');
    } else {
        submit.removeAttribute("disabled");
    }
};

// Add an event listener to the input field to check its value on each change
userInput.addEventListener('input', toggleSubmitButton);

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert("Please enter a valid guess");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game is over. The random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low.`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high.`);
    }
};

const displayGuess = (guess) => {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
};

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
    userInput.value = '';
    userInput.setAttribute("disabled", '');
    submit.setAttribute("disabled", '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

const newGame = () => {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        toggleSubmitButton(); // Recheck the input field value
    });
};

// Initial call to set the submit button state based on the initial input value
toggleSubmitButton();
