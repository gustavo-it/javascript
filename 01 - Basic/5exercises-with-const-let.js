/* 
1. Apresentar as seguintes informações com o console.log, utilizando variáveis e constantes. Calculando nome, peso, IMC,
Altura, data de nascimento
calculo do imc = peso / (altura * altura);
Texto a ser apresentado: nome da pessoa tem x anos, pesa x kg, tem X de altura, seu IMC é de XXXXX, nome da pessoa
nasceu em X
*/
const nome = "Maria Nascimento";
const idade = 30;
const altura = 1.59;
const peso = 60;
let imc;
imc = peso / (altura * altura);
let dataNascimento;
dataNascimento = 2024 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} KG, tem ${altura} de altura, seu IMC é ${imc}. ${nome} nasceu em ${dataNascimento}.`);