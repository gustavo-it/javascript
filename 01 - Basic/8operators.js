/* 
Operadores aritmeticos, incremento e atribuição
- Operador de + (mais) é responsável por fazer adição e concatenação (unir os dois valores)
- Operador - (menos) é responsável por fazer subtração
- Operador / (divisão)
- Operador * (Multiplicação)
- Operador ** (Potenciação)
- Operador % (Retorna o resto da divisão)

Ordem da precedência
() -> O que estiver entre parênteses é executado primeiro
** -> Em segundo vem a potenciação
* -> Em terceiro é executado a multiplicação
/ -> Em quarto vem a divisão
% -> Em quinto vem o resto
+ -> Em sexto vem a soma
- -> Em sétimo vem a subtração

Operador de incremento
++ -> É possível utilizar o operador de incremento antes e pós variável. No pré, ele primeiro faz a conta e depois retorna o valor;
No caso do pós, ele executa a ação que pedimos pra ser executado e depois retorna o valor.

Operador de decremento
-- -> É possível utilizar o operador de decremento antes e pós variável. É possível utilizar o pré decremento e pós decremento, com
funcionamento igual ao operador de incremento, porém fazer o inverso (subtrair).

Operadores de atribuição
Operador aritmético e sinal de atribuição. Exemplo: += -=
É possível fazer com qualquer operador.

Realizar operações aritméticas entre dados de tipos diferentes pode causar algum tipo de erro.
NaN --> É o tipo de erro gerado quando o JS não consegue realizar uma conta.

*/

// Concatenação
const num1 = "5";
const num2 = 10;
const num3 = 2;
console.log(num1 + num2)

// Potenciação
console.log(num2 ** num2);

// Subtração
console.log(num2 - num3);

// Resto da divisão
console.log(num2 % num3);

// Multiplicação
console.log(num2 * num3);

// Precedência
console.log((num2 + num3) * num3);

// Incrementando
let counter = 1;
counter++;
counter++;
counter++;
counter++;
console.log(counter);
console.log(counter++); // Mostrando a diferença do incremento pós variável
console.log(counter); // O valor só é exibido quando chamamos novamente a variável
console.log(++counter); //Utilizando pré variável

// Decremento
counter--;
console.log(counter);
console.log(--counter);

// Atribuição. É possível fazer com qualquer operador aritmético
const passo = 50;
counter += passo;
console.log(counter);

// Resultado NaN
console.log(10 * 'teste');

// Utilizando parseInt para converter um valor em número se possível
const num4 = 10;
const num5 = parseInt('10'); // Exclui as casas decimais, caso tenha.
console.log(num4 + num5);

// Utilizando o parseFloat para converter um valor para número em ponto flutuante
const num6 = parseFloat('10.8');
console.log(num5 + num6);