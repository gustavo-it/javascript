const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const [first, second] = restaurant.categories;
console.log(first, second);

// Array dentro de um array
const array = [1, 2, [3, 4, 5]];
const [a, b, [c, d, e]] = array;
console.log(c, d, e);

// Definindo um valor padrão
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [x = 10, y = 20] = numbers;
console.log(x, y);
