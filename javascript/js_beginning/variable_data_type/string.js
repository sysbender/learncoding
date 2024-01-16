const assert = require("assert");
const util = require("util");

// template literal
let name = "world";
assert.strictEqual(`hello ${name}`, "hello world");

// property - length,

// prototype

assert.strictEqual(typeof "hello", "string");
let s = new String(name);
assert.strictEqual(typeof s, "object");

// method
assert.strictEqual(s.charAt(0), "w");
assert.strictEqual(s[0], "w");
assert.strictEqual(s.substring(1, 3), "or");
assert.strictEqual(s.slice(-2, -1), "l"); // slice support negative

assert.strictEqual(typeof s.valueOf(), "string"); // get primitive value from object
// replace, includes, trim , split,

let s1 = "developer";
let s2 = s1[0].toUpperCase() + s1.substring(1);
assert.strictEqual(s2, "Developer");
