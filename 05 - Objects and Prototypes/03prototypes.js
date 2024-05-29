function Person (name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

Person.prototype.fullName = function () {
    return `${this.name} ${this.lastName}`;
};

const people1 = new Person("Maria", "Montenegro");
console.log(people1.fullName());
