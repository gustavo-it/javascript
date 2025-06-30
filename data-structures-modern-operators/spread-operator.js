const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [0, ...numbers, 11];
console.log(newNumbers);

// Copiando arrays
const newArray = [...numbers];
console.log(newArray);

// Combinando 2 arrays
const array = [...numbers, ...newNumbers];
console.log(array);

// Posso utilizar strings em iteraveis, não em objetos
