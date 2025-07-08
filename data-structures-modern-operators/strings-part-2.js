const airline = "Tap Air Portugal";

// Alterando todos os caracteres para minúscula
console.log(airline.toLowerCase());

// Alterando todos os caracteres para maiusculo
console.log(airline.toUpperCase());

const email = "  hello@gmail.com \n";

// Removendo espaços vazios de uma string
console.log(email.trim());

// Substituindo 1 caractere
// O primeiro parâmetro é o caractere que você deseja substituir, o segundo é o caractere que vai substitui-lo.
const price = "288,97?";
const priceFormated = price.replace(",", ".").replace("?", "$");
console.log(priceFormated);

// replaceAll substitui todas as partes da string que contém aquele caractere específico
const message = "All passengers come to boarding door 23. Boarding door 23!";
console.log(message.replaceAll("door", "gate"));

// Expressão regular
console.log(message.replace(/door/g, "gate"));

// Checando se existe determinados caracteres naquela string
// Retorna true ou false
console.log(message.includes("teste"));

// Verificar se uma string começar com determinados caracteres
// Retorna true ou false
console.log(message.startsWith("All"));
console.log(message.startsWith("teste"));

// Verificar se uma string termina com determinados caracteres
// Retorna true ou false
console.log(message.endsWith("23!"))
