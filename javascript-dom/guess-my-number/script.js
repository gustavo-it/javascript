const buttonCheck = document.querySelector(".check");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
let score = 20;

const secretNumber = Math.trunc(Math.random()*20) + 1;
number.textContent = secretNumber;

const setTextContent = (element, message) => element.textContent = message;

buttonCheck.addEventListener("click", event => {
    const guess = Number(inputGuess.value);
    const divScore = document.querySelector(".score");

    if (!guess) {
        setTextContent(message, "No number!");
    } else if (guess === secretNumber) { //
        setTextContent(message, "Correct number!");
        document.querySelector("body").style.backgroundColor = "#60b347"; // sempre utilizar string
        document.querySelector(".number").style.width = "30rem";
    } else if (guess > secretNumber) {
        if(score > 0) {
            setTextContent(message, "Too high!");
            score--;
            setTextContent(divScore, score);
    } else {
        setTextContent(message, "You lost the game!");
        setTextContent(divScore, 0);
    }
    } else if (guess < secretNumber) {
        if (score > 0) {
            setTextContent(message, "Too low!");
            score--;
            setTextContent(divScore, score);
        } else {
            setTextContent(message, "You lost the game!");
            setTextContent(divScore, 0);
        }
    }
});
