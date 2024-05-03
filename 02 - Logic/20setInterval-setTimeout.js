const showHours = () => {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
    });
}

const intervalFunction = () => console.log(showHours());

const setInt = setInterval(function () {
    console.log(showHours());
}, 5000);

setTimeout(function() {
    clearInterval(setInt)
}, 10000);
