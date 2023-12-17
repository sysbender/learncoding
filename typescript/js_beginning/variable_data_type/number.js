const assert = require("assert");

const n = 3.14159;
const nObj = Number(n);
/**
 * toFixed() rounds a number to a fixed number of decimal places and returns a string.
 * toPrecision() formats a number with a specified total number of significant digits and returns a string.
 */
assert.strictEqual(nObj.toFixed(4), "3.1416", "fixed"); // decimal
assert.strictEqual(nObj.toPrecision(5), "3.1416", "precision"); // significant
assert.strictEqual(nObj.toLocaleString("fr-CA"), "3,142");

// Math - ceil, floor, round , pow, random
let a = Math.floor(Math.random() * 10 + 1); // 1-10
console.log(a);
