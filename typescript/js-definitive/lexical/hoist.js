/**
 * var is hoisted partially , (is declared with value of undefined)
 * let and const is not hoisted
 * function is fully hoisted
 * function expressoin and arrows - depends if using var or let/const
 *
 */

const assert = require("assert");

assert.strictEqual(sfunc(), "fff");
assert.strictEqual(svar, undefined);
assert.throws(() => sconst, ReferenceError);
assert.throws(() => slet, ReferenceError);

var svar = "vvv";
const sconst = "ccc";
let slet = "lll";
function sfunc() {
  return "fff";
}

//------example

var v = "foo";
var printv = function () {
  console.log(` 1st print   = ${v}`);
  var v = "bar";
  console.log(`2nd print = ${v}`);
};
printv();
