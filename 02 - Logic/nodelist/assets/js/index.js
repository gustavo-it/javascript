const returnNodeList = (element, element2) => {
    const paragraphs = document.querySelector(element);
    const ps = paragraphs.querySelectorAll(element2);
    return ps;
}

const ps = returnNodeList(".paragraphs", "p");

const styleNodeList = element => {
    /* 
    Com a função getComputedStyle é possível pegar toda a estilização computada
    em um elemento. Neste caso, estamos obtendo a estilização do body.
    Na constante backgroundColorBody, estamos pegando do elemento body o valor da cor
    de fundo.
    Por último é adicionado a cor ao elemento.
    */
    const styleBody = getComputedStyle(document.body);
    const backgroundColorBody = styleBody.backgroundColor;
    element.style.color = backgroundColorBody;
}; 

const addClass = nodeList => {
    for (let element of nodeList) {
        element.classList.add("node-list");
        styleNodeList(element);
    }
};

addClass(ps);
