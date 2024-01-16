const assert = require("assert");

/**
 * Higher order function - does at least one of the following:
 * takes one or more functions as an argument
 * returns a function as the result
 */

//------

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(` original string = ${str} , transformed by = ${fn.name}`);
  let result = fn(str);
  console.log("result=", result);
};

const s = "Javascript is the best!";
transformer(s, oneWord);
transformer(s, upperFirstWord);
//return a function  - used for currying

const greeter = function (greeting) {
  return function (name) {
    console.log(` ${greeting} ${name}!`);
  };
};

const heyF = greeter("Hey");
heyF("John");
greeter("hello")("world");
const fr = greeter("Bonjour");
fr("Jean");

// arrow

const greeter2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}!`);
  };
};

greeter2("Halo")("Es");

const greeter3 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greeter3("Hello3")("world3");

// using normal function
const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

// using arrow function
const addBy = (num1) => (num2) => num1 + num2;

const multiplyByTwo = multiplyBy(2);
const addByTwo = addBy(2);

assert.strictEqual(multiplyByTwo(3), 6);
assert.strictEqual(addByTwo(3), 5);

//-------------reduce and reduceRight : with or without init value

const arr = [1, 2, 3, 4];

const result = arr.reduceRight((acc, curr) => {
  console.log(curr);
  return acc + curr;
});
console.log(`sum = ${result}`);
