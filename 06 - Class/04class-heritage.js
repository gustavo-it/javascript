class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.ligado = false; // sempre que for instanciado um device, ele iniciará como desligado.
    }

    turnOn() {
        if (this.ligado === false) return this.ligado = true;
        return "Device On";
    }

    turnOff() {
        if (this.ligado === true) return this.ligado = false;
        return "Device off";
    }
}

const device = new EletronicDevice("TV");
device.turnOn();
console.log(device.turnOn());
console.log(device);

// Extends -> Indica a herança
class Smartphone extends EletronicDevice {
    constructor(name, color) {
        super(name); // indicando os atributos que a classe pai espera receber
        this.color = color;
    }
}

const samsumg = new Smartphone("Galaxy s20 FE", "White");
console.log(samsumg);
