/**
 * 7 primitive  - string, number, boolean, undefined, null(object), Symbol, object
 */

const assert = require("assert");

// primitive
assert.strictEqual(typeof 5, "number");
assert.strictEqual(typeof "hello", "string");
assert.strictEqual(typeof true, "boolean");
assert.strictEqual(typeof undefined, "undefined"); // default value
assert.strictEqual(typeof null, "object"); // absence of value
assert.strictEqual(typeof Symbol("justMe"), "symbol");

// non-primitive
assert.strictEqual(typeof {}, "object"); // Array and Function are objects
assert.strictEqual(typeof [], "object");
assert.strictEqual(typeof function () {}, "function");

// auto wrap primitive to object
"hello".toUpperCase();
