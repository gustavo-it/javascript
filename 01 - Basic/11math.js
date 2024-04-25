let num1 = 9.52;

// Arredondar o número para baixo
let num1Arredondado = Math.floor(num1);
console.log(num1Arredondado);

// Arredondar o número para cima
console.log(Math.ceil(num1));

// Arredondar para o mais próximo
console.log(Math.round(num1));

// Encontrar qual o maior número em determinada sequência
console.log(Math.max(1, 2, 234, 123, 29043, 10239, 31902381, 192, 239));

// Encontrar qual o menor número em determinada sequência
console.log(Math.min(123123, 9018329213, 319823, 2939, 12334));

// Gerar um número aleatório entre 0 e 1
console.log(Math.random());

// Exponenciação
console.log(Math.pow(2, 10));

// Em JavaScript você pode dividir um número por 0, então tenha cuidado.
// Quando você divide por um numero muito longo, próximo ao zero absoluto, é retornado o número infinity, que é retornado como verdadeiro.