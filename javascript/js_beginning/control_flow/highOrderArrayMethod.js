// take a function as an argument (callback)
const assert = require("assert");

const items = ["a", "b", "c"];
console.log(items.__proto__);

items.forEach(function (item, index, arr) {
  console.log(item.toUpperCase(), index, arr);
});

items.forEach((item) => console.log(item.toUpperCase()));
// filter

const filterResult = items.filter(function (item, index, arr) {
  return item >= "b";
});
console.log(filterResult);
// map

const mapResult = items.map(function (item, index, arr) {
  return `'${item}'`;
});
console.log(mapResult);

// reduce - array down to one value : inital value, previous accumulator, current value,
const cart = [
  { name: "carrot", price: 1, quantity: 2 },
  { name: "bread", price: 3, quantity: 1 },
];

let initialValue = 0;
let total = cart.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  arr
) {
  return accumulator + currentValue.price * currentValue.quantity;
},
initialValue);

console.log(`total = ${total}`);
