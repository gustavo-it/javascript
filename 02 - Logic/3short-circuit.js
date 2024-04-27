/* 
Em uma condição, o primeiro valor falso que o JavaScript encontrar, será retornado por ele.
Como no exemplo abaixo, onde 0 é um valor falso, e é retornado pelo JS.

Caso ele não encontre nenhum valor falso, ele vai retornar o último valor.
Você percebe isso no segundo console.log do código.
*/
console.log("Maria" && 0 && "Fernanda");
console.log("Maria" && true && "Fernanda");

/*
Falsy Values
false
0
'' -> Strings vazias
null
undefined
NaN

qualquer coisa diferente disso, é avaliada em true.
*/

/* 
Com o operador || basta uma condição ser verdadeira para que o JS retorne este valor.
O primeiro valor true será retornado por ele.
*/

console.log(NaN || false || 0 || "" || "Maria" || "fernanda");