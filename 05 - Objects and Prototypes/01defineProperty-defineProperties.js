function Product (name, price, stock) {
    /* 
    Imagine que queremos forçar com que a propriedade stock seja privada. Para isso utilizamos defineProperty
    Primeiro passamos o objeto que vamos trabalhar, this indica que é o objeto Product.
    Em seguida do nome da propriedade.
    Por último passamos um property descriptor, um objeto que pode receber várias chaves.
    */
    Object.defineProperty(this, 'stock', {
        enumerable: true, // Exibe essa chave quando a chamamos.
        value: stock, // Exibe o valor dessa chave
        writable: true, // Writable --> Posso alterar o valor?
        configurable: false, // configurable --> Posso apagar a chave? Posso redefinir a configuração da chave?
    });

    /*
    O properties recebe o objeto a ser trabalhado, e em seguida recebe o property descriptor name.
    Nesse objeto você vai passar como chave o nome das propriedades que você quer alterar, e para cada
    chave, como valor você vai passar um outro objeto contendo as chaves que vimos no exemplo acima.
    */
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: false,
        },
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: false,
        },
    });
}

const glass = new Product("Cup", 20, 3);
console.log(glass);

// Exibindo as chaves do objeto em um array
console.log(Object.keys(glass));