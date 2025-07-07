const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23);
const array = [1, 2]
rest.set(array, "test");
console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(1));
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.get(array))
