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

console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.orderMenu()?.(0, 1) ?? "Method does not exist");
