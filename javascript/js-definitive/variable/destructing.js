// destruct array

const arr = ["aa", "bb", "cc"];

const [a, , c] = arr;
console.log(`a = ${a}, c=${c}`);

// swap

let x = 1;
let y = 2;

[y, x] = [x, y];

console.log(`x = ${x}, y=${y}`);

// destruct object
const obj = {
  name: "John",
  age: 33,
};

// default value
const { name, age, tall = 1.7 } = obj;
const { name: name1, age: age1 } = obj;
console.log(` name = ${name}, age= ${age} , tall=${tall}`);
console.log(` name1 = ${name1}, age1= ${age1}`);

// modify variable , need surround all with()
({ name: x, age: y } = obj);

console.log(`x = ${x}, y=${y}`);
// destruct nested object

// destruct object parameter
function ds({ name, age }) {
  console.log(` name = ${name}, age= ${age} `);
}
ds(obj);
