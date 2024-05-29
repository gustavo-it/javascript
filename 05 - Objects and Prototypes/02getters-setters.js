function Product (name, price, stock) {
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
        
        stock: {
            enumerable: true,
            get: () => stock,
            set: value => { 
                try {
                    if (typeof value !== "number") throw new Error("O valor precisa ser um número");
                    stock = value;
                } catch(error) {
                    console.log(error.message);
                }
            },
            configurable: false,
        },
    });
}

const phone = new Product("Samsung s10e", 2000, 3);
console.log(phone.stock);
phone.stock = "gagsfasdf";
