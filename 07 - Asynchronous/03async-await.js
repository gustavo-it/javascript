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

