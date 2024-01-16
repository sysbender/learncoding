const assert = require("assert");
// window = global
global.x = 1; // use global explicitly in nodejs
const y = 2; // not add to global implicitly
function run() {
  // shadowing
  let x = 11;

  console.log(x, global.x);
  assert.strictEqual(x, 11);
  assert.strictEqual(global.x, 1);
}

run();

{
  const c = "ccc";
  var v = "vvv";
}
assert.strictEqual(v, "vvv");
assert.throws(() => {
  console.log(c, "is not defined");
}, ReferenceError);

// var is for function scope, const and let is for block scope.
