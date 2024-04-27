/* 
Operadores Lógicos

&& -> AND -> E
|| -> OR - OU
! -> NOT -> NÃO

São utilizados para checar duas ou mais comparações, com exceção do operador de negação.

*/

const condition1 = 10 > 5;
const condition2 = 10 > 20;
console.log(condition1 && condition2); // Retorna true quando as 2 condições são verdadeiras.

console.log(condition1 || condition2); // Retorna true quando uma das duas condições são verdadeiras.

console.log(!condition1); // Retorna o valor inverso do resultado.
