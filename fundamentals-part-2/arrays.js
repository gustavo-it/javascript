const fruits = ["Apple", "Banana", "Orange"];

// Acessando os índices de um array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Verificando quantos elementos o array possui
console.log(fruits.length);

// Alterando o valor de determinado índice
fruits[2] = "Grape";
console.log(fruits);

// Adicionando elementos ao fim do array
fruits.push("pineapple");
console.log(fruits);

// Adicionando ao início do array
fruits.unshift("strawberry");
console.log(fruits);

// Removendo do fim
fruits.pop();
console.log(fruits);

// Removendo do início
fruits.shift();
console.log(fruits);

// Verificando em qual índice determinado elemento está
console.log(fruits.indexOf("Banana"));

// Verificando se um valor está ou não no array (Retorna true ou false)
console.log(fruits.includes("Apple"));
