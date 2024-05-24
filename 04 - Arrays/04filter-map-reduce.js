const numbers = [5, 50, 100, 2, 3, 54, 1, 59, 27, 26];

// Filtrar pares
// Dobras os valores
// Somar tudo
// Encadeando todas as funções que vimos nessa seção
const pairs = numbers.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((acumulator, value) => acumulator += value, 0);
console.log(pairs);