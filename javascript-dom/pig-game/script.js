const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const secPlayer0 = document.querySelector(".player--0");
const sectPlayer1 = document.querySelector(".player--1");

let scores = [];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = () => {
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  score0El.textContent = 0;
  current1El.textContent = 0;
  score1El.textContent = 0;

  scores = [0, 0];

  diceEl.classList.add("hidden");
  secPlayer0.classList.remove("player--winner");
  sectPlayer1.classList.remove("player--winner");
  secPlayer0.classList.add("player--active");
  sectPlayer1.classList.remove("player--active");
};

init();

const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  secPlayer0.classList.toggle("player--active");
  sectPlayer1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", (event) => {
  if (playing === true) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", (event) => {
  if (playing) {
    scores[activePlayer] = currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", event => {
  init();
});
