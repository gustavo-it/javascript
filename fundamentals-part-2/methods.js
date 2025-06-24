const person = {
    firstName: "Maria",
    lastName: "Barbosa",
    birthYear: 2000,

    calcAge: (birthYear) => 2025 - birthYear, // Método
    completeName: function() {
        // Palavra reservada this, faz referência ao próprio objeto
        return `${this.firstName} ${this.lastName}`;
    }
};

// Um método nada mais é do que uma função dentro de um objeto.

console.log(person.calcAge(person.birthYear));
console.log(person.completeName());
