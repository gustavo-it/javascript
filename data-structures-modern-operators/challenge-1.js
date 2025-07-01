const game = {
    team1: "Bayern Munich",
    team2: "Internazionale",
    players: [
        [
            "Neuer",
            "Laimer",
            "Upamecano",
            "Tah", "Stanisic",
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

const [ players1, players2 ] = game.players;
const [ gk, ...fieldPlayers ] = players1;
const allPlayers = [...players1, ...players2 ];
const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic" ];

const { team1, x: draw, team2 } = game.odds;

const printGoals = (...players) => {
    console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win!");
