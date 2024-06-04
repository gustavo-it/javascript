/* 
Métodos de instância e estático, são métodos que você pode usar sem precisar instacia-la.
*/

class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    volumeUp () {
        this.volume += 2;
    }

    volumeDown () {
        this.volume -= 2;
    }

    // Método de instância
    static changeStack() {
        return "Trocando a pilha de todos os controles!";
    }
}

const control = new RemoteControl("LG");
control.volumeUp();
console.log(control);
console.log(RemoteControl.changeStack()); // chamando um método de instância
