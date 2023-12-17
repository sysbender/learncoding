/**
 * ES6 enhanced object literal
 * 1. property name = variable name
 * 2. function keyword is optional in method definition
 * 3. computer property name
 */

// property name = variable name
let x = 1;
let y = 2;
const obj = {
  x,
  y,
  //computer property name , by surronding in braket
  ["z" + "z"]: 3,
  hello: function () {
    console.log("hello");
  },
  // in method : function keyword is optional
  hello2() {
    console.log("hello2");
  },
}; // {x:x, y:y}
console.log(obj);
