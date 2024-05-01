const elements = [
    { tag: "p", text: "Sentence 1" },
    { tag: "div", text: "Sentence 2" },
    { tag: "footer", text: "Sentence 3" },
    { tag: "section", text: "Sentence 4" },
];

const createElement = tag => {
    /*
    Essa função cria um elemento HTML especificado pelo argumento "tag" 
    fornecido e retorna esse elemento. 
    */
    const element = document.createElement(tag);
    return element;
};

const addElement = (elementSoon, elementFather) => {
    /* 
    Essa função adiciona um novo elemento HTML (definido pelo parâmetro "elementSoon") como filho 
    de um elemento HTML pai (definido pelo parâmetro "elementFather"), retornando 
    o elemento filho recém-adicionado.
    */
    const child = createElement(elementSoon);
    const father = document.querySelector(elementFather);
    return father.appendChild(child);
}

const newElement = addElement("div", ".container");

const insertElement = object => {
    /* 
    Essa função recebe um objeto como argumento contendo propriedades 'tag' para o tipo de tag HTML 
    e 'text' para o texto interno do elemento. Em seguida, ela cria um novo elemento HTML 
    usando o valor da propriedade 'tag' do objeto. 
    Posteriormente, cria um nó de texto com o valor da propriedade 'text' do objeto e o 
    anexa ao elemento HTML criado. Por fim, insere o elemento criado como filho
    na constante newElement, criada logo acima.
    */
    const element = object.tag;
    const tag = document.createElement(element);
    const textNode = document.createTextNode(object.text);
    tag.appendChild(textNode);
    return newElement.appendChild(tag);
};

const loopObjects = array => {
    // Realiza um loop no array para chamar a função insertElement.
    for (i = 0; i < array.length; i++) {
        insertElement(array[i]);
    }
};

loopObjects(elements);
