const assert = require("assert");

// object literal
const person = { name: "John", age: 30, isAdmin: true };

// add/del property
person.city = "NY";
delete person.age;
person.greet = function () {
  return `Hello, my name is ${this.name}`;
};

console.log(person.greet());

// object constructor
const todo = new Object();
todo.id = 1;

// spread
const obj1 = { ...person, ...todo };

// assign = spread
const obj2 = Object.assign({}, person, todo);

assert.deepStrictEqual(obj1, obj2);
// keys , values, entires , hasOwnProperty - get all properties in an array
console.log(obj1.hasOwnProperty("name"));

// key and value variable are the same
let first = "John";
let last = "Doe";
const p = {
  first,
  last,
};

console.log(p);
//destructuring and rename
const p1 = { firstname: "john", lastname: "doe", address: { city: "NY" } };
const {
  firstname: fname,
  lastname,
  address: { city: acity },
} = p1;
assert.strictEqual(acity, "NY");

//json
// jsonv vs object : the key name needs quote
const p1json = JSON.stringify(p1);

let p1obj = JSON.parse(p1json);
