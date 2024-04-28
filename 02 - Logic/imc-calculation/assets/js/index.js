const form = document.querySelector("#form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const inputWeight = event.target.querySelector("#weight");
    const inputHeight = event.target.querySelector("#height");

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value) / 100;

    if (!weight) {
        setResult("Peso inválido", false);
        return;
    };

    if (!height) {
        setResult("Altura inválida", false);
        return;
    };

    const imc = getImc(weight, height);
    const levelImc = getLevelImc(imc);
    const msg = `Seu IMC é ${imc} ${levelImc}`;

    setResult(msg, true);
});

const getLevelImc = imc => {
    const level = [
        "Abaixo do peso", "Peso normal", "Sobrepeso",
        "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"
];

    if (imc >= 39.9) return level[5];
    if (imc >= 34.9) return level[4];
    if (imc >= 29.9) return level[3];
    if (imc >= 24.9) return level[2];
    if (imc >= 18.5) return level[1];
    if (imc < 18.5) return level[0];
};

const getImc = (weight, height) => {
    const imc = weight / height ** 2;
    console.log(imc)
    return imc.toFixed(2);
};

const createP = () => {
    const p = document.createElement("p");
    return p;
};

const setResult = (msg, isValid) => {
    const result = document.querySelector("#result");
    result.innerHTML = "";

    const p = createP();

    if (isValid) {
        p.classList.add("paragraph-result");
    } else {
        p.classList.add("bad");
    }

    p.innerHTML = msg;
    result.appendChild(p);
};