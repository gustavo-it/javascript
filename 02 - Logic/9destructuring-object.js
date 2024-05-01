const person = {
    name: "Maria",
    sobrenome: "Silva",
    idade: 30,
    endereco: {
        rua: "x",
        numero: 302
    }
};

const { name = "Não existe", sobrenome } = person;
console.log(name, sobrenome);
const { idade: teste } = person;
console.log(teste);
const { endereco: { rua, numero } } = person;
console.log(rua);