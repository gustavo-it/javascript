/* 
- As mesmas regras que utilizamos em variáveis servem para constantes
- Constante = Não podemos modificar o valor de uma constante
- Não podemos reservar uma constante.
*/

const nome = "qualquer coisa";
console.log(nome);

// Podemos pegar o valor de uma constante e atribuir a outra constante.
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

// Função typeof é possível saber o tipo de dado de uma variável ou constante.
console.log(typeof (resultado));
console.log(typeof nome);