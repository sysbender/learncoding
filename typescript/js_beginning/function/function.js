const assert = require("assert");
const { create } = require("domain");

function sayHello() {
  console.log("Hello World!");
}
sayHello();
// named parameter and default value
function add(num1 = 1, num2 = 2) {
  console.log(num1 + num2);
}

add((num1 = 1));
// rest parameter
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));

// function declaration vs expression
assert.strictEqual(funcDeclaration(), "d");
assert.throws(() => funcExpression(), ReferenceError);

//============function declaration
function funcDeclaration() {
  return "d";
}
//============function expression  (need semiconlon, hoisting is different-as variable?)
const funcExpression = function () {
  return "e";
}; // semicolon

// arrow function
const fadd = (a, b) => {
  return a + b;
};

const fsubtract = (a, b) => a - b;
const fdouble = (a) => a * 2; // one param, () can leave off
const fcreateObj = () => ({
  a: "a",
}); // enclose with () when return object

assert.deepStrictEqual(fcreateObj(), { a: "a" });

// high order function
const numbers = [1, 2, 3];
numbers.forEach(function (n) {
  console.log(n);
});
// arrow function in callback
numbers.forEach((n) => console.log(n));
