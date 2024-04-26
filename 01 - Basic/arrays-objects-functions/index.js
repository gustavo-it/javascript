const form = document.querySelector(".form");
const objects = [];

const preventDefault = (element) => {
    element.addEventListener("submit", event => {
        event.preventDefault()
        const values = getValues();
        clearValues();
        resultDiv();
        console.log(values)
        return values
    }
)};

const getValues = () => {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    const object = {
        name: name.value, 
        age: age.value, 
        weight: weight.value, 
        height: height.value
    }

    objects.push(object);
 
    return objects;
}

const clearValues = () => {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    name.value = '';
    age.value = '';
    weight.value = '';
    height.value = '';
}

const resultDiv = () => {
    const div = document.querySelector(".result");
    div.innerHTML += `<p>${objects[0].name}</p>`
}

preventDefault(form);