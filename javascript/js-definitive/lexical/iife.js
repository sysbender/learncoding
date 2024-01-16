/**
 *  iife - is used to create a local scope to avoid pollute the global scope
 */

// the parenthsis create a function expression

//---------------------how jquery works - to avoid pollute global scope
var myscirpt1 = (function () {
  a = 5;
  function f() {
    return "f";
  }
  return { a: a, f }; // return an object
})();

console.log(myscirpt1.a);
console.log(myscirpt1.f());
