const assert = require("assert");
// expotential

let v8 = 2 ** 3;

// optional chaining operator ?. - if object attribute not exist, return undefined instead of error
let capitals = {
  ca: { city: "ottawa", population: 30 },
  us: { city: "washington", population: 50, area: 0 },
};

assert.strictEqual(capitals.ca.city, "ottawa");
assert.strictEqual(capitals?.cn?.city, undefined);
assert.throws(() => capitals.cn.city, TypeError);

// nullish coalsecing operator ?? - endof the chain
assert.strictEqual(capitals?.ca?.area || "Empty", "Empty");
// notworking when value is falsy   : assert.strictEqual(capitals?.us?.area || "Empty", 0);
assert.strictEqual(capitals?.ca?.area ?? "Empty", "Empty");
