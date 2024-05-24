const numbers = [5, 50, 100, 2, 3, 54, 1, 59, 27, 26];

const filterNumbers = numbers.filter(number => number > 10);
console.log(filterNumbers);

const people = [
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

// Retornando as pessoas cujo o nome termina com a
const peopleEndLetterA = people.filter(people => people.name.endsWith("a")); // (people => people.name.slice(-1) === "a")
console.log(peopleEndLetterA);

// Retorne as pessoas que tem o nome com 5 letras ou mais
const fiveLetterOrMore = people.filter(people => people.name.length >= 5)
console.log(fiveLetterOrMore);

// Retorne as pessoas que tem mais de 50 anos
const fiftyOrMore = people.filter(people => people.age > 50)
console.log(fiftyOrMore);