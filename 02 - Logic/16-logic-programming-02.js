/*
Escreva uma função que recebe dois argumentos, largura e altura de uma imagem (number). 
Retorne true se a imagem estiver no modo paisagem.
*/

const landscape = (width, height) => width > height ? true : false;

console.log(landscape(300, 600));