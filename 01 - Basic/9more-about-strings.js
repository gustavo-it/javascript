// Utilizando o escapa para esconder um caractere
let caractereScape = "Um 'texto'";
console.log(caractereScape);

// Utilizando uma barra invertida dentro da string
let caractereBarra = "Um \\testando";
console.log(caractereBarra);

// Strings são indexadas, começando no zero que representa o primeiro elemento (ou caractere).
let text = "Lorem ipsum";
console.log(text[1]); // valores negativos ou indíces que não existem retornam undefined

// Função charAt - Funciona do mesmo jeito que o exemplo acima. Ao acessar um índice que não existe é retornado
// um valor vazio
console.log(text.charAt(1));

// concat - Concatena valores, exatamente como o + faz.
console.log(text.concat(' ', 'lorem'));

// indexOf - Procura uma palavra ou caractere dentro de uma string e retorna o indice de onde ela começa.
console.log(text.indexOf("su"));

// lastIndexOf - Funciona como o indexOf, mas começa a contar do final da string.
console.log(text.lastIndexOf("su"));

// replace - Substituir um valor por outro. Primeiro você coloca o que deseja remover, em seguida o que deseja colocar no lugar.
// Existe diferença de letra maiúscula para minúscula.
console.log(text.replace("Lorem", "novo valor"));

// length - Informa quantos caracteres temos em uma string.
console.log(text.length);

// slice - Me permite fatiar uma string. Informo o range para que a função comece a fatiar. Posso utilizar números negativos.
console.log(text.slice(2, 5));

// split - Transforma strings em um array. Preciso informar um caractere que vai servir para dividir as palavras.
console.log(text.split(" "));

// É possível limitar quantas vezes isso vai acontecer.
console.log(text.split(" ", 1));

// toUpperCase - Transformar toda a string em letras maiúsculas
console.log(text.toUpperCase());

// toLowerCase - Transformar toda a string em letras minúsculas
console.log(text.toLowerCase());