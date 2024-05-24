const numbers = [5, 50, 100, 2, 3, 54, 1, 59, 27, 26];
let acumulator = 0;

const sum = numbers.forEach((value, index, array) => acumulator += value);
console.log(acumulator);