const buttonCheck = document.querySelector(".check");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;

const setTextContent = (element, message) => (element.textContent = message);

buttonCheck.addEventListener("click", (event) => {
  const guess = Number(inputGuess.value);
  const divScore = document.querySelector(".score");

  if (!guess) setTextContent(message, "No number!");

  if (guess === secretNumber) {
    setTextContent(message, "Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else {
    if (score > 0) {
      setTextContent(message, guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      setTextContent(divScore, score);
    } else {
      setTextContent(message, "You lost the game!");
      setTextContent(divScore, 0);
    }
  }
});
