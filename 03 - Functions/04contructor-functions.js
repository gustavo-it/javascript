function Person (name, lastname) {
    const id = 123; // atributo privado
    this.name = name;
    this.lastname = lastname;

    const methodIntern = () => console.log("Este método não pode ser acessedo de fora.");

    this.talkingName = () => console.log(`${this.name} ${this.lastname} talking`);
}

const person1 = new Person("Maria", "Silva");
person1.talkingName();