const _course = Symbol();

class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this[_course] = "";
    }

    set course(value) {
        if(typeof value !== "string") return;
        return this[_course] = value;
    }

    get course() {
        return this[_course];
    }

    fullName() {
        return `${this.name} ${this.lastname}`
    }
}

const person = new Person("Maria", "Luiza", 30);
person.course = "Python, Django";
console.log(person.course);
