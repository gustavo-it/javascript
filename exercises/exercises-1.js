// 1.

const names = ["Maria", "Victoria", "Joana", "Rosa", "Ana"];

const [maria, victoria, ...all] = names;

// 2.
const num = [1, 54, 64, 20, 38, 99, 18, 585, 36, 85];
const sumAll = (...numbers) => {
  let value = 0;
  for (const number of Object.values(numbers)[0]) value += number;
  return value;
};

// 3.
const a = [1, 2, 3];
const b = [4, 5, 6];
const finalArray = [...a, ...b];

// 4.
const mapToUpper = (...strings) => {
  const newArray = [];
  for (const upper of strings[0]) newArray.push(upper.toUpperCase());
  return newArray;
};

// 5.
const filterEven = (...numbers) => {
  const pairs = [];
  for (const number of numbers[0])
    number % 2 === 0 ? pairs.push(number) : "nothing";
  return pairs;
};

// 6.
const doubleAndSum = (...numbers) => {
  let doubleSum = 0;
  for (const number of numbers[0]) doubleSum += number * 2;
  return doubleSum;
};

// 7.
const person = {
  completeName: "Rosa",
  age: 50,
  city: "Belém",
};

const { completeName, age, city } = person;
const getSummary = (object) => {
  const { completeName, age, city } = object;
  return `${completeName} tem ${age} anos e é de ${city}`;
};
