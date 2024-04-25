// Para criar arrays, você utiliza colchetes, separando os valores com vírgula.
// Geralmente colocamos um único tipo de dado dentro de arrays.

const alunos = ["Maria", "Fernanda", "Otávia"];
console.log(alunos);

// As listas são indexadas, sendo que o primeiro valor é o índice 0
console.log(alunos[1]);

// Editando valores
alunos[0] = "Ana";
console.log(alunos);

// Adicionando novos valores ao array
// Através de um índice que não existe.
alunos[3] = "Maria";
console.log(alunos);

// Obtendo o tamanho do array

console.log(alunos.length);

// Sempre vai retornar a quantidade de elementos no array, então é possível utiliza-lo para
// Adicionar elementos no array
alunos[alunos.length] = "Germana";
console.log(alunos);

// Função para adicionar elementos
alunos.push("Roberta");
console.log(alunos);

// Adicionar no começo
alunos.unshift("Luíza");
console.log(alunos);

// pop() -> Remove um item do final
// Podemos salvar o valor que removemos em uma variável
alunos.pop();
console.log(alunos);

// Shifit -> remove do começo.

// delete -> Apaga o elemento, deixando um vazio em seu lugar (não remove o índice)
delete alunos[1];
console.log(alunos);

// Ao acessar um índice que não existe, será retornado o valor undefined.

// Escolhendo elementos pare serem exibidos
console.log(alunos.slice(0, 2));
console.log(alunos.slice(0, -1));

// Arrays são considerados objetos

// InstanceOf (Verificar se um valor é uma instância de algum tipo)