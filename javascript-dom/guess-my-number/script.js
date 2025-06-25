const buttonCheck = document.querySelector(".check");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const spanHighscore = document.querySelector(".highscore");
let gameWon = false;
let highscore = [];
let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;

const setTextContent = (element, message) => (element.textContent = message);

again.addEventListener("click", event => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    const divScore = document.querySelector(".score");
    number.textContent = secretNumber;
    setTextContent(message, "Start guessing...");
    setTextContent(divScore, 20)
    inputGuess.value = '';
    score = 20;
    gameWon = false;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});

buttonCheck.addEventListener("click", (event) => {
  let guess = Number(inputGuess.value);
  const divScore = document.querySelector(".score");

  if (!guess) setTextContent(message, "No number!");

  if (guess === secretNumber) {
    setTextContent(message, "Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    highscore.push(score);
    let max = Math.max.apply(null, highscore);
    setTextContent(spanHighscore, max);
    gameWon = true;
  } 
  if (gameWon) return;
  else {
    if (score > 0) {
      setTextContent(message, guess > secretNumber && guess !== secretNumber ? "Too high!" : "Too low!");
      console.log(guess, secretNumber)
      score--;
      setTextContent(divScore, score);
    }
     else {
      setTextContent(message, "You lost the game!");
      setTextContent(divScore, 0);
    }
  }
});
