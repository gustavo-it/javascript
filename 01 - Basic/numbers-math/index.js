let number = parseInt(prompt("Digite um número: "));
const raiz = Math.sqrt(number);
const inteiro = Number.isInteger(number);
const isNan = Number.isNaN(number);
const round = Math.round(number);
const ceil = Math.ceil(number);

const principal = document.getElementById("principal");
principal.innerHTML = "Texto principal";
document.body.innerHTML += `<h2> Seu número é ${number} </h2>`;
document.body.innerHTML += `<p> Raiz quadrada ${raiz} </p>`;
document.body.innerHTML += `<p>${number} é inteiro: ${inteiro}</p>`;
document.body.innerHTML += `<p> É NaN: ${isNan} </p>`;
document.body.innerHTML += `<p> Arredondado para baixo ${round} </p>`;
document.body.innerHTML += `<p> Arredondado para cima ${ceil} </p>`;
document.body.innerHTML += `<p> ${number.toFixed(2)} </p>`;