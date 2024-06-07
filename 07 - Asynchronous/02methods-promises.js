// Promise.all --> Recebe um array contendo valores aleatórios ou promises, e retorna um array com o resultado dessas promises.

function wait (message, time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== "string") reject("BAD VALUE");

            resolve(message + " Passei na promise");
        }, time);
    })

}

const random = (min, max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
};


const promises = [
    // "First value",
    wait("Promise 1", random(1, 4)),
    wait("Promise 2", random(1, 4)),
    wait("Promise 3", random(1, 4)),
];

Promise.all(promises)
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.log(error);
    });

// Promise.race --> Me entrega o valor da primeira promise resolvida.
Promise.race(promises)
    .then(value => console.log(value + " Primeiro valor retornado"))
    .catch(error => console.log(error));

// Promise.resolve --> Cria uma promise que já está resolvida com um valor fornecido.
const downloadPage = () => {
    const cache = true; // false

    if(cache) {
        return Promise.resolve("Cache page");
    } else {
        return wait("Download page finish", random(1, 5));
    }
}

downloadPage()
    .then(pageData => console.log(pageData))
    .catch(error => console.log(error));

// Promise.reject --> Cria promises que já estão rejeitadas.
// Coloque reject no lugar de Promise.resolve() o erro sempre será executado nesse caso.