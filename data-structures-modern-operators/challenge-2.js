const game = {
  team1: "Bayern Munich",
  team2: "Internazionale",
  players: [
    [
      "Neuer",
      "Laimer",
      "Upamecano",
      "Tah",
      "Stanisic",
      "Goretzka",
      "Palhinha",
      "Olise",
      "Sané",
      "Coman",
      "Kane",
    ],
    [
      "Sommer",
      "Darmian",
      "Vrij",
      "Bastoni",
      "Dumfries",
      "Barella",
      "Asillani",
      "Mkhitaryan",
      "Dimarco",
      "Thuram",
      "Martinez",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2024",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (let [goal, player] of Object.entries(game.scored)) {
  goal = Number(goal);
  let numberGoal = goal + 1;
  console.log(`Goal ${goal + 1}: ${player}`);
}

// 2.
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) average += odd;

const calcAge = () => (average /= odds.length);
console.log(calcAge());

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} odd: ${odd}`);
}

// 4.
const scores = {};

for (const player of game.scored) {
  scores[player] = (scores[player] || 0) + 1;
}

console.log(scores);
