/* 
Primitivos (Imutáveis) -> string, number, boolean, undefined, null (bigint, symbol)
*/

let name1 = 'Maria';
name1 = 'Fernanda';
name1[0] = 'G';
console.log(name1)

/* 
Referência (mutável) -> array, object, functions
Os dois apontam para o mesmo endereço na memória
Quando você altera um, altera o outro.
*/

let numbers = [1, 2, 3, 4, 5];
let numbersB = numbers;
console.log(numbers, numbersB);
numbersB.push(2);
console.log(numbers, numbersB)

// Copiando valores com spread operator. Desta maneira o valor é copiado, e não passado como referência
let numbersC = [ ...numbers ];
numbers.push(6);
console.log(numbersC, numbers);