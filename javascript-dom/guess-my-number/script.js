console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13; // número aleatório gerado
document.querySelector(".score") .textContent = 20; // score do usuário

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value) // selecionando o input onde o usuário digita as informações
