// for, dowhile, while, Array.foreach,
//for in , for of

letters = ["a", "b", "c"];

// for of loop with iterables : string, array
// object is not iterable
for (let item of letters) {
  console.log(item);
}

// for in loop with enumerable - object
// array is enuerable, the key is index
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}
