/* 
Próximo passo : 
Criar uma função que vai receber a resposta do setMessage, a mensagem a ser exebida, e vai adicionar essa mensagem no html.
*/

const form = document.getElementById("form");
const answers = [
    "Abaixo do peso", "Peso normal", "Sobrepeso",
    "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3",
    "Altura inválida", "Peso inválido"
]

const getElements = () => {
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    return { weight, height };
};

const elements = getElements();

const formDataProcessed = (object) => {
    const weight = Number.parseInt(object.weight.value);
    const height = parseFloat(object.height.value) / 100;
    if (isNaN(height)) {
        document.getElementById("result").innerHTML = `<p>${answers[6]}</p>`;
    } else if (isNaN(weight)) {
        document.getElementById("result").innerHTML = `<p>${answers[7]}</p>`;
    }
    return { weight, height }
};

const imcCalc = (object) => {
    const weight = object.weight;
    const height = object.height;
    const imc = weight / (height * height);
    console.log(imc);
    return imc.toFixed(2);
};

const setMessage = (resultImc) => {

    const div = document.getElementById("result");

    if (resultImc < 18.5){
        console.log(answers[0])
        clearValues(elements);
        document.getElementById("result").classList.add("bad")
        return div.innerHTML = `<p>Seu imc é: ${resultImc} (${answers[0]})</p>`;
    }
     else if (resultImc >= 18.5 && resultImc <= 24.9) {
        console.log(answers[1])
        clearValues(elements);
        return div.innerHTML = `<p>Seu imc é: ${resultImc} (${answers[1]})</p>`
    } else if (resultImc >= 25 && resultImc <= 29.9) {
        console.log(answers[2]);
        return div.innerHTML = `<p>Seu imc é: ${resultImc} (${answers[2]})</p>`
    } else if (resultImc >= 30 && resultImc <= 34.9) {
        console.log(answers[3]);
        return div.innerHTML = `<p>Seu imc é: ${resultImc} (${answers[3]})</p>`
    } else if (resultImc >= 35 && resultImc <= 39.9) {
        console.log(answers[4]);
        return div.innerHTML = `<p>Seu imc é: ${resultImc} (${answers[4]})</p>`
    } else if (resultImc > 40) {
        console.log(answers[5]);
        return div.innerHTML = `<p>Seu imc é: ${resultImc} (${answers[5]})</p>`
    }
}

const clearValues = elements => {
    elements.weight.value = '';
    elements.height.value = '';
};

const preventDefault = element => {
    element.addEventListener("submit", event => {
        event.preventDefault();
        const data = formDataProcessed(elements);
        const imc = imcCalc(data);
        setMessage(imc);
    });
};

preventDefault(form);
