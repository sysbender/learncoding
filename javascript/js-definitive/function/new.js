// trailing commas and function parater list and call
function sum(a, b, c) {
  return a;
}

function Dog() {}

const dogNew = new Dog();
const dog = Dog();

console.log(dog); // undefined
console.log(dogNew); // Dog
console.log(dogNew.__proto__); // constructor: f
console.log(dogNew.prototype); // undefined   - objects don't have prototype, functions do
console.log(Dog.prototype); // constructor: f
