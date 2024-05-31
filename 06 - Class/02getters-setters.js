
const _speed = Symbol(); // É possível colocar uma descrição para o symbol -> Symbol("qualquer coisa")

class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0; // chamando o symbol
    }

    set speed(value) {
        if (typeof value !== "number") return;
        if (value > 100 || value < 0) return;
        return this[_speed] = value;
    }

    get speed() {
        return this[_speed];
    }

    accelerate() { 
        if (this[_speed] >= 100) return;
        return this[_speed]++;
    }

    brake() {
        if (this[_speed] <= 0) return;
        return this[_speed]--;
    }
};

const mercedes = new Car("Mercedes v100", 0);

for (let i = 0; i <= 110; i++) {
    mercedes.accelerate();
    console.log(mercedes.speed);
}
mercedes.speed = 10;
console.log(mercedes.speed);
// Symbol --> Pode ser utilizado para criar uma chave privada dentro do objeto.
// O symbol sempre gera um valor aleatório. Nunca o valor de symbol será repetido