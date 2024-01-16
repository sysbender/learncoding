const assert = require("assert");

// Number.MAX_SAFE_INTERGER 2**53 -1
assert.strictEqual(typeof 123n, "bigint");
console.log(typeof 123n);

console.log(Number.MAX_SAFE_INTEGER);
