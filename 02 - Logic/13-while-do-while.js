/*
Utilizamos esta estrutura de repetição quando não soubermos quantas vezes o código deve ser executado.
*/
let control = 0;

while (control <= 10) {
    console.log(control);
    control++;
};

do {
    let control = 0;
    control++;
    console.log(control);
} while(control <= 10);