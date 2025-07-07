const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pizza", "Pasta"]);

console.log(new Set("Mari"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
