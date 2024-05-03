const watch = document.querySelector(".watch");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

start.addEventListener("click", event => {
    alert("Botão clicado");
});

stop.addEventListener("click", event => {
    alert("Botão clicado");
});

reset.addEventListener("click", event => {
    alert("Botão clicado");
});

const returnHours = (segundos) => {
    const hours = new Date(segundos * 1000);
    return hours.toTimeString('pt-BR', {
        hours12: false,
        timeZone: "UTC",
    });
}

const data = returnHours(0);
