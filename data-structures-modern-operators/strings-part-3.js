const message = "All passengers come to boarding door 23. Boarding door 23!";
const names = ["Maria", "Ana", "Rosa"];

// Transformar uma string em um array
console.log(message.split(" "));

// Transformar um array em string
console.log(names.join(" "));

// Preenche uma string até que chegue ao tamanho desejado.
// padStart --> adiciona valores no início
console.log(message.padStart(80, "test"));

// Preenche uma string até que chegue ao tamanho desejado.
// padEnd --> adiciona valores no fim
console.log(message.padEnd(80, "test"));

// Repetir uma string
console.log(message.repeat(5));
