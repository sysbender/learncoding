const assert = require("assert");
const { isAbsolute } = require("path");
// ?? - return the right side operand when the left is null or undefined

function hello(name) {
  return `Hello ${name ?? "World"}!`;
}

assert.strictEqual(hello(), "Hello World!");
assert.strictEqual(hello("John"), "Hello John!");
assert.strictEqual(hello(""), "Hello !");

// ================logical assign
// ||=  assigns the right side value only if left is falsy

let a = false;
if (!a) {
  a = 20;
}

a ||= 20;
a = a || 20;

// &&  assigns the right side value only if left is truthy
let b = true;
b = b && 20;
b &&= 20;
assert.strictEqual(b, 20);
//??= assigns the right side value only if the left is null or undefined
let c1 = null;

c1 = c1 ?? 20;
c1 ??= 20;
assert.strictEqual(c1, 20);

//=============ternary
const age = 10;
isAdule = age >= 18 ? true : false;
assert.strictEqual(isAdule, false);
