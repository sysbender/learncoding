const assert = require("assert");

// concat
assert.strictEqual("Foo" + "Bar", "FooBar");

let x = 1,
  y = 1;
assert.strictEqual(++x, 2);
assert.strictEqual(y++, 1);

assert.strictEqual("123" == 123, true);
assert.strictEqual("123" === 123, false);
