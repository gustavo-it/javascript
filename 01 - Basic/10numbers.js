let number1 = 1;
let number2 = 1.3;

// toString() -> Converte um number em string
console.log(number1.toString() + number2); // Não estou editando o tipo da variável, dessa maneira continua sendo um number.

// Alterando o tipo da variável
// number1 = number1.toString();

// Com o toString é possível ver a representação binária de um número
let number3 = 10000;
console.log(number3.toString(2));

// toFixed -> Arredondar um número, basta especificar quantas casas decimais deve ter
let number4 = 1222.989322312
console.log(number4.toFixed(2));

// isInteger -> Retorna um boolean para true se o valor é um numero inteiro
console.log(Number.isInteger(number3));

// isNan -> Retorna um boolean para true se a conta é um not a number
console.log(Number.isNaN(number1 + 'OLA'));

/* 
No JavaScript você tem uma certa imprecisão quando trabalha com número em casa decimais.
Por exemplo, imagine a seguinte conta:
let num1 = 0.7;
let num2 = 0.1;

Quando você somar os valores acima e apresentar o resultado no console, você vai ter
o seguinte resultado: 0.799999999;

E como resolver isso?
*/
let num5 = 0.7;
let num6 = 0.1;
console.log(parseFloat(num5 + num6).toFixed(2));

// Segunda maneira de resolver
console.log(Number(num5 + num6).toFixed(2));

// Uma outra maneira seria não trabalhar com números de ponto flutuantes
console.log(((num5 * 100) + (num6 * 100)) / 100);