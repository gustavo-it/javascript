// Funções dentro de objetos são chamadas de métodos.
// This -> se refere ao objeto que está chamando ele. Não existe this em arrow function

const createPerson = (name, lastName, height, weight) => {
    return {
        name,
        lastName,
        height,
        weight,
        talking: function(subject) {
            return `${this.name} ${this.lastName} is ${subject}`;
        },
        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        },
        set completeName(value) {
            value = value.split(" ");
            this.nome = value.shift();
            this.lastName = value.join(" ");
        }
    }
}
const person1 = createPerson("Maria", "Silva", 1.8, 60);
person1.completeName = "Maria Oliveira da Silva";
console.log(person1.talking("Talking about JS"));
console.log(person1.imc);