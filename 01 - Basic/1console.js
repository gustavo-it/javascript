/* 
1. Ponto e vírgula é opcional no JavaScript
2. Console.log é utilizado para exibir informações no terminal, nada além disso.
3. Sempre que você for colocar um valor literal (texto) no método log, você precisa colocar esse texto
entre aspas simples, duplas ou crase (Está última sendo utilizada também para template strings).
4. Você pode concatenar valores utilizando o sinal de operação +
*/
console.log("Este é um método log que está dentro de console");
console.log('aspas simples');
console.log(`crase` + '' + 1);

/* 
5. Caso você queira utilizar aspas dentro de um valor literal, você precisa utilizar outro tipo 
de aspas, diferente do que está envolvendo o texto.
6. Javascript é uma linguagem de tipagem dinâmica.
*/
console.log("Envolvendo com aspas 'aqui'");
console.log('Envolvendo com aspas "aqui"');
console.log('Envolvendo com crase `aqui`');
console.log(`Outro exemplo 'aqui'`);
console.log(`Exemplo aqui "aqui"`);

/* 
Exibindo números
7. Você não precisa colocar os números entre aspas.
8. Você utiliza o ponto para separar as casas decimais.
9. Você pode exibir vários valores de diferentes tipos de dados separa por vírgula.
10. Números inteiros e com pontos flutuantes são numbers, não existe separação como em outras linguagens.
*/
console.log(1000);
console.log(10.78);
console.log(35, 17.80, 'Texto aqui');
