/* 
Escrever um programa que recebe uma lista de nomes de variáveis escritas em underscore_case e convertê-los para camelCase.

A entrada virá de um textarea inserido no DOM (ver código abaixo), e a conversão acontecerá quando o botão for pressionado.

ESTE TESTE DE DADOS (colado para textarea)
underscore_case
first_name
some_variable
calculo_age
delayed_departure

DEVE produzir esta saída (5 separete console.log saídas)
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

DICA 1: Lembre-se qual caractere define uma nova linha no textarea
DICA 2: A solução só precisa funcionar para uma variável feita de duas palavras, como a_b
DICA 3: Comece sem se preocupar com o. Faça isso somente depois de ter a conversão do nome da variável funcionando
DICA 4: Este desafio é difícil de propósito, então comece a ver a solução no caso de você ficar preso.
Em seguida, pause e continue.
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.body.querySelector("button").textContent = "Enviar variáveis";
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  const text = document.querySelector("textarea").value;
  const variables = text.trim().split("\n");

  for (let value of variables) {
    const pos = value.lastIndexOf("_");
    value = value.replace("_", "");
    value =
      value.slice(0, pos) + value[pos].toUpperCase() + value.slice(pos + 1);
    console.log(value);
  }
});
