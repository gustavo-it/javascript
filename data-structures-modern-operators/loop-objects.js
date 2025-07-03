const weekDays = ["mon", "tue", "wed", "sat"];

const openingHours = {
    [weekDays[3]]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, menuIndex) { return (starterMenu[menuIndex], starterMenu[starterIndex]) }
};

// Object.keys() retorna um array com as chaves de um objeto
for (const day of Object.keys(openingHours)) {
    console.log(day);
};

// Object.values() retorna um array com os valores de um objeto.
for (const values of Object.values(openingHours)) {
    console.log(values);
}

// Object.entries() retorna um array com chave e valores de um objeto.
for (const [ key, { open, close } ] of Object.entries(openingHours)) {
    console.log(key, open, close);
}
