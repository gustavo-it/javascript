class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    };
    // Esse método é executado sempre que crio uma classe. Pode não existir caso n precise

    fullName () { return `${this.name} ${this.lastname}` }
}

const person1 = new Person("Fernanda", "Montenegro");
console.log(person1.fullName());
