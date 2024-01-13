/* 
1. Dados com aspas é considerado string
2. Números sendo de ponto flutuante ou não, são do tipo Number
3. Variáveis que são reservadas são do tipo undefined, estas que não apontam para lugar nenhum na memória
4. Tipo Null = Não aponta para lugar nenhum na memória, este tipo de dado é utilizado pelo programador, para zerar
uma variável/constante. Null é considerado um object pelo JavaScript, o que é um bug.
5. Dados boolean = Verdadeiro ou Falso (Valor lógico)
*/

// 3
let numero;
console.log(typeof (numero));

// 4;
let sobrenome = "sobrenome";
sobrenome = null;

// 5
const checar = 10 > 9;
const checar2 = 10 < 2;
console.log(checar, checar2);
console.log(typeof (checar));
