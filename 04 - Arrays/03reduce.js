const numbers = [5, 50, 100, 2, 3, 54, 1, 59, 27, 26];

// Some todos os números (reduce)
const total = numbers.reduce((acumulator, value) => acumulator + value);
console.log(total);

// Retorne um array com pares (filter)
const pairs = numbers.reduce((acumulator, value) => {
    if(value % 2 === 0) acumulator.push(value);
    return acumulator;    
}, []);
console.log(pairs);

// Retorne um array com o dobro dos valores (map)
const doubleValues = numbers.reduce((acumulator, value) => {
    value = value * 2;
    acumulator.push(value);
    return acumulator;
}, []);
console.log(doubleValues);

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

// Retorne a pessoa mais velha
const oldestPerson = peoples.reduce((acumulator, value) => {
    if (acumulator.age > value.age) return acumulator;
    return value;
});
console.log(oldestPerson);