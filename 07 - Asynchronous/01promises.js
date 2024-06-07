function wait (message, time) {

    // Resolve -> esse código executou com sucesso, resolve para mim;
    // Reject -> esse código deu erro, ajeita para mim.

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== "string") reject("BAD VALUE");

            resolve(message); // Só posso mandar 1 parâmetro em resolve
        }, time);
    })

}

const random = (min, max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
};

// then -> executado quando a promise for resolvida.
// catch -> executado quando acontecer um erro (reject).

wait("Estabelecendo a conexão", random(1, 3))
    .then(response => {
        console.log(response);
        return wait(404, random(4, 6));
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log("error", error));
