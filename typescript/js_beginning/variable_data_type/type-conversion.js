"use strict";

const assert = require("assert");

// string to number
assert.equal(parseInt("100"), 100);
assert.equal(parseFloat("3.14"), 3.14);

let amount = +"3.14"; // unary operator
assert.equal(typeof amount, "number");

assert.equal(Number("3.14"), "3.14");
assert.notStrictEqual(Number("3.14"), "3.14");

// number to string
assert.strictEqual(amount.toString(), "3.14");
assert.strictEqual(String(3.14), "3.14");
// to boolean
let isTrue = Boolean(1);
assert.strictEqual(isTrue, true);

// NaN - 5 situation
assert.strictEqual(parseInt("hello"), NaN);
assert.strictEqual(Math.sqrt(-1), NaN);
assert.strictEqual(1 + NaN, NaN);
assert.strictEqual(undefined + undefined, NaN);
assert.strictEqual("foo" / 3, NaN);

//======== type Coercion : implicitly
// when use different type with operator

assert.strictEqual(5 + "5", "55");
assert.strictEqual(5 * "5", 25);

assert.strictEqual(5 + null, 5);
assert.strictEqual(5 + false, 5);
assert.strictEqual(5 + undefined, NaN);
