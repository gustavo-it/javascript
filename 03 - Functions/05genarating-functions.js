function* generate() {
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
}

const g1 = generate();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);