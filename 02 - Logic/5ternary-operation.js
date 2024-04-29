/* 
? : -> Operador ternário

É útil para substituir um bloco if e else.

Você inicia a expressão informando a condição que vai ser analisada, em seguida vem a interrogação com o que será feito
caso a condição seja verdadeira. Por último temos os dois pontos, seguido do que vai ser feito caso o valor seja false.

*/

const userPoints = 999;

console.log(userPoints >= 1000 ? "vip user" : "not vip");

// Settar valor padrão para uma variável
const color = userPoints || "black";