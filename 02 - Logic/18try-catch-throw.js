/*
Sempre que formos fazer alguma ação perigosa no código, que pode vir a gerar algum erro, é recomendado
Colocar o código dentro de um bloco try.
try -> Tentar.

Em seguida do try, vem o bloco catch, que é o que vamos executar caso aconteça algum erro. O catch recebe o erro.

throw -> Lançar um erro
*/

try {
    console.log(naoExisto);
} catch (error) {
    console.log("Não existo");
}

const sum = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("X e Y precisam ser números");
    }

    return x + y;
};

try {
    console.log(sum("2", 12))
} catch(error) {
    // console.log(error);
    console.log("Algo mais amigável");
}

