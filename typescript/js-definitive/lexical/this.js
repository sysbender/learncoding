/**
 * this is dynamic, only assigned when the function is called.
 * there are 4 way a function is called
 * 1. as a method - this point to the object
 * 2. as a normal function - this point to global (or undefined in strict mode)
 * 3. as arrow function - lexical this, point to the surrounding execution context( not the this of surrounding function )
 * 4. event listener - this = Dom element that the handler is attached to
 * 5. constructor function with new keywork -  point to the new created object
 * 6. bind,call,apply method of object
 *
 *
 *
 *
 * this - is the object that the function is a property of
 * this - is the object that is executing the current function
 * 1. method -> obj
 * 2. constructor function -> obj
 * 3. function -> global( window in browser, global in node)
 * 3.1 Array.foreach : pass thisArg
 *
 */

const assert = require("assert");

global.name = "globalName"; // declare name in global
//=============1. method - implicit binding
let person = {
  name: "John",
  greet: function () {
    return this.name;
  },
};

assert.strictEqual(person.greet(), "John");
//2===================constructor function/ new binding

function Person(name) {
  this.name = name;
}

const p = new Person("John");
assert.strictEqual(p.name, "John");

//3. ===================normal function
function f() {
  console.log(this);
  return this.name;
}
assert.strictEqual(f(), "globalName");

// 3.0 ==================problem:
// normal functions have their own 'this' ,
// which is determined by how they are called
let coder = {
  name: "John",
  greet: function () {
    const getName = function () {
      return this.name; // will return globalName
    };
    return getName();
  },
};

assert.strictEqual(coder.greet(), "globalName");

//3.1 ==================3 solve this with:  arrow function is lecxical bound , this bound //es6
// arrow functions dont have their own 'this' context, they capture 'this' from their containing/enclosing scope
let coderArrow = {
  name: "John",
  greet() {
    const getName = () => {
      return this.name; // this inside arrow functions retains the context of the surrounding function
    };
    return getName();
  },
};

assert.strictEqual(coderArrow.greet(), "John");

//3.2 ==================4. solve this with : bind/call/apply - Function.prototype.bind
// bind - preset this and args, call or apply can specify this (apply use array as args)
let coderBound = {
  name: "John",
  greet() {
    const getName = function () {
      return this.name; // will return globalName
    };
    const boundGetName = getName.bind(this); // explicitly bind 'this' to the coder object
    return boundGetName();
  },
};

assert.strictEqual(coderBound.greet(), "John");

let coderCall = {
  name: "John",
  greet() {
    const getName = function () {
      return this.name;
    };
    return getName.call(this);
  },
};

assert.strictEqual(coderCall.greet(), "John");
//3.3  ==================5. solve this with ： save this to self variable in object
let coderSelf = {
  name: "John",
  langs: ["py", "js", "java"],
  greet() {
    let self = this; // save the this which refer to coder
    const getName = function () {
      return self.name; //          // use saved reference
    };
    return getName();
  },
};

assert.strictEqual(coderSelf.greet(), "John");

/**
 * the value of the this context inside a function can vary based on how the function is called.
 * 1. function as a method
 * 2. function as a constructor
 * 3. with .call() or .apply()
 * 4. with .bind()
 * 5. in global scope
 * 6. arrow function - lexical
 */
