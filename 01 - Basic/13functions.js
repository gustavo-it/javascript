/*
Como criar funções:
- Utilizar a palavra reservada function
- Não pode começar com número.
- Não pode ter espaço ou traços.
- Utilizamos CamelCase em nomes compostos.

Tudo que está dentro da função pertence a função. Ou seja, o que tem dentro da função 
não pode ser acessado de fora.

Por padrão toda função em JS retorna undefined, caso a função não tenha um retorno definido por você.

Tudo que estiver depois de return não é executado.

É possível colocar valores padrões para os parâmetros.
*/

// Declarando função dessa maneira, não é necessário o ponto o vírgula no final
function helloWorld() {
    console.log("Test");
}

// chamando a função
helloWorld();

// Função com parâmetro
function talkingName(name) {
    return `Name: ${name}`;
}

console.log(talkingName("Maria Luiza"));
console.log(talkingName("Fernanda Montenegro"));

const variavel = talkingName("Ana Beatriz");
console.log(variavel);

function sum(number1 = 1, number2 = 1) {
    const resultado = number1 + number2;
    return resultado;
}

console.log(sum(10, 20));

// Criando funções anônimas. Acontece quando jogamos uma função dentro de uma variável.
// Nesse caso utilizamos ponto e vírgula no fim da função.
const raiz = function (number) {
    const result = Math.sqrt(number);
    return result;
};

console.log(raiz(10));

// Arrow functions
// Se tiver somente uma parâmetro você não precisa utilizar parênteses.
// Se tiver somente uma linha não precisa utilizar a palavra return.
const raizQuadrada = number => Math.sqrt(number);
console.log(raizQuadrada(10));

const mult = (number1, number2) => {
    const result = number1 * number2;
    return result;
}
console.log(mult(10, 10));