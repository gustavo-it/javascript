let firstName = "Um nome qualquer"; // let é utilizado para criar variáveis
var name2 = "Nome qualquer"; //mais antigo

console.log(firstName, 'nasceu em 1984.');
console.log(firstName + '' + 'conheceu fulano.');

// Posso reservar um variável
let lastName;
// Ao reservar uma variável ela tem o tipo undefined atribuido
console.log(lastName);
lastName = 'Um sobrenome qualquer';
console.log(lastName);
// Alterando o valor de uma variável
lastName = 'Outro sobrenome qualquer';
console.log(lastName);

/* 
Uma coisa que você não pode fazer é redeclarar uma variável.
Ou seja, se já temos uma variável declaradas let firstName, não podemos declarar novamente
let firstName.
*/

/* 
* Não podemos criar variáveis com palavras reservadas (palavra reservada pela linguagem)
1. let
2. var
3. console
4. function
5. if
6. else
São alguns exemplos de palavra reservada.

* Variáveis precisam ter nomes significativos

* Nomes de variáveis não podem começar com número.

* Nomes de variáveis não podem conter espaços ou traços.

* Utilizamos camelCase em nome composto.

* Variáveis são Case-sensitive
*/