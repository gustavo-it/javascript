/* 
Em functions que são iniciadas com a palavra functions, temos acesso a
variável arguments. Que exibe todas os argumentos passados para a function.

*/
function test () {
    console.log(arguments);
    console.log(arguments[1]);
}

test('teste', 'teste10');

// Desestruturação de object
const person = {
    nome: "Maria",
    sobrenome: "Silva",
    idade: 22,
}

const helloPerson = ({ nome, sobrenome, idade }) => {
    console.log(nome, sobrenome, idade);
}

helloPerson(person);

// Desestruturação de array
const numbers = [1, 2, 3, 4, 5, 6, 7]
function viewArray ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
viewArray(numbers);