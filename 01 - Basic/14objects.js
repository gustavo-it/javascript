/* 
Para criar um objeto utilizamos chaves.
Objetos possuem chave e valor.
*/

/* const person = {
    name: 'Maria',
    lastName: 'Silva',
    age: 32,
};

// Acessando valores
console.log(person.name);
*/ 

// Função para criação de objetos
// Os parâmetros possuem o mesmo nome das chaves do objeto, neste caso não precisamos colocar chave e valor.
// Basta fazer como o exemplo abaixo.
// Podemos ter funções dentro de objetos, que chamamos de método.
// Dentro de objetos possuímos a palavra reservada this, que serve para referenciar o próprio objeto.
// Ao usar o this.name, estou dizendo que é o name representa o objeto que está sendo refenciado.
// Arrow functions não utilizam o this.

const person = (name, lastName, age) => {
    return { 
        name, 
        lastName, 
        age, 
        fullName: () => `Full Name: ${name} ${lastName}`,
        sayAge: function() { return this.age },
    };
};

const person1 = person('Maria', 'Silva', 32);
const person2 = person('Luiza', 'Oliveira', 20);
console.log(person1.age);
console.log(person2.fullName());
console.log(person2.sayAge());
