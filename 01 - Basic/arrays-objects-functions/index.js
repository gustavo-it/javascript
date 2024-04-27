const form = document.querySelector(".form");
const objects = [];

const getElements = () => {
    /* 
        Obtém todos os campos do formulário e retorna em um único objeto. Estes elementos são reutilizados
        na função getValues e resultDiv.
    */
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    return { name, age, weight, height };
}

const elements = getElements(); // Instanciando a função para guardar o objeto na variável elements

const getValues = (elements) => {
    /* 
        Guarda na constante objects todos os dados do objeto recebido como parâmetro.
        Este objeto é adicionado ao array (objects).
    */

    const object = {
        name: elements.name.value, 
        age: parseInt(elements.age.value), 
        weight: Number.parseFloat(elements.weight.value), 
        height: Number.parseFloat(elements.height.value)
    }

    objects.push(object);
 
    return 200;
}

const clearValues = (elements) => {

    // Limpar os campos do formulário

    elements.name.value = '';
    elements.age.value = '';
    elements.weight.value = '';
    elements.height.value = '';

    return 200
}


const resultDiv = () => {
    /* 
        É adicionado na div .result, os dados do array para cada novo objeto que é colocado neste.
        Para obter os dados que acabaram de ser digitados pelo usuário, pegamos o tamanho do array - 1.
        Assim, quando o array tem 1 elemento, subtraímos 1 para obter o índice 0 e assim por diante.
    */
    const div = document.querySelector(".result");
    div.innerHTML += `<p>${objects[objects.length -1 ].name}
        ${objects[objects.length -1 ].age}
        ${objects[objects.length -1 ].weight}
        ${objects[objects.length -1 ].height}</p>`
}

const preventDefault = (element) => {
    /* 
        Previne o evento padrão.
        Em seguida são chamadas as demais funções para o funcionamento correto do código.
    */
    element.addEventListener("submit", event => {
        event.preventDefault()
        getValues(elements);
        clearValues(elements);
        resultDiv();
        return 200
    }
)};

preventDefault(form);