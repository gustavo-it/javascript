const buttonCheck = document.querySelector(".check");
const inputGuess = document.querySelector(".guess");
const message = document.querySelector(".message");

buttonCheck.addEventListener("click", event => {
    const guess = Number(inputGuess.value);
    console.log(guess);
    console.log(typeof guess);
    message.textContent = "Correct Number!";

    if (!guess) {
        message.textContent = "No number!";
    }
});
