const numbers = [1, 2, 3, 4, 5];

for (let i in numbers) {
    console.log(i, numbers[i]);
}

const person = {
    name: "Maria",
    idade: 22,
}

for (let i in person) {
    console.log(i, person[i]);
}