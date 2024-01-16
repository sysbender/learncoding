const assert = require("assert");

const obj = { name: "John", age: 30 };

console.log(Object.values(obj));

const entries = [
  ["name", "John"],
  ["age", 30],
];
console.log(Object.entries(obj)); //es8
assert.deepStrictEqual(entries, Object.entries(obj));

let obj1 = Object.fromEntries(entries);
assert.deepStrictEqual(obj1, obj);

console.log(Object.keys(obj)); //es8
