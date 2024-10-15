

const request = object => {
    const xhr = new XMLHttpRequest(); // faz a requisição de qualquer tipo de dado
    xhr.open(object.method, object.url, true); // Primeiro você manda o método que deseja executar
    // Em segundo você manda a URL da sua aplicação, em terceiro você indica com true (para assincrono) ou false (para assincrono)

    xhr.send(); // Caso você envie os dados de algum formulário, você coloca as informações aqui. Como não é o nosso caso, pode deixar em branco

    xhr.addEventListener("load");
}