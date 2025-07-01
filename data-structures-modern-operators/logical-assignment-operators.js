const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La piazza",
  owner: "Giovanna Rossi",
};

const rest3 = {
  name: "Famiglia da Pizza",
  owner: null,
};

// Definindo um valor para caso uma variável ou chave, tenha um valor falsy.
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

// Podemos utilizar o operador de coalescência nula, funcionando da mesma maneira.
// Somente se o valor for null ou undefined, o valor passado será atribuido.
rest3.owner ??= "Frascesco Totti";
console.log(rest3);

// Operador AND, quando os dois valores são verdadeiros o último valor é retornado, nesse caso
// O último valor é atribuido a chave.
rest3.owner &&= "<ANONYMOUS>";
console.log(rest3);
