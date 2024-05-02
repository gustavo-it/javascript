/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = Retorno o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/
const checkNumber = number => {
    if (typeof number !== "number") return "Não é um número";
    if (number % 3 === 0 && number % 5 === 0) return "Fizz Buzz";
    else if (number % 3 === 0) return "Fizz";
    else if (number % 5 === 0) return "Buzz";
    return number;
};

for (let i = 0; i <= 100; i++) {
    console.log(i, checkNumber(i));
}