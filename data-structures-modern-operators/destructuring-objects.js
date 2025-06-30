const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  ) {
    return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`;
  },
};

const { name, openingHours, categories } = restaurant;
console.log(openingHours);
console.log(categories);

// Tornando o nome da variável diferente da propriedade do objeto
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Definindo um valor padrão para uma propriedade e pegando uma chave que contém um array
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Alterando o valor de variáveis
let a = 100;
let b = 101;
let obj = { a: 10, b: 20 };
({ a, b } = obj);
console.log(a, b);

// Obtendo a chave de um objeto que já desestruturamos acima
const { fri } = openingHours;
console.log(fri);

// Obtendo o valor exato da chave acima
const {
  sat: { open: openRestaurant, close: closeRestaurant },
} = openingHours;
console.log(openRestaurant, closeRestaurant);

// Utilizando um método dentro do objeto
console.log(
  restaurant.orderDelivery({
    time: "22:30",
    address: "Via del sole, 21",
    mainIndex: 2,
    starterIndex: 2,
  })
);
