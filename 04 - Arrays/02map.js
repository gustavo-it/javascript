const numbers = [5, 50, 100, 2, 3, 54, 1, 59, 27, 26];

// Dobrar os números
const doubleNumbers = numbers.map(number => number * 2)
console.log(doubleNumbers);

const peoples = [
    { name: "Maria", age: 30 },
    { name: "Gustavo", age: 24 },
    { name: "Letícia", age: 19 },
    { name: "Fernanda", age: 23 },
    { name: "Renato", age: 41 },
    { name: "Robson", age: 40 },
    { name: "Joana", age: 52 },
    { name: "Ivo", age: 56 },
    { name: "Pou", age: 30 },
];

// Retorne apenas uma string com o nome da pessoa
const name = peoples.map(people => `${people.name}`);
console.log(name);

// Remova apenas a chave "name" do objeto
const age = peoples.map(people => people.age);
console.log(age);

// Adicione uma chave id em cada objeto
const getRandom = (min, max) => { // Gerando um número aleatório
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addId = peoples.map(people => {
    const newPeople = { ...people };
    newPeople.id = getRandom(1, 100);
    return newPeople;
});
console.log(addId);