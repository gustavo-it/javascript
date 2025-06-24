const numbers = [0, 1, 2, 3, 4];

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Continue pode ser utilizado para pular um valor ou condição

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) continue;
    console.log(numbers[i]);
}

// Break é usado para interromper completamente o loop

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === 2) break;
    console.log(numbers[i]);
}
