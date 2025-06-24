let age = 30;
let temCarteira = true;

if (age >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bom");
} else {
  console.log("Precisa melhorar");
}

if (age >= 18 && temCarteira) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
