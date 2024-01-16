/**
 * function is object | object is function
 * Object is a function constructor, it has prototype
 *
 *
 *
 *
 */

// Object is function
console.log(typeof Object); // return function
console.log(Object.prototype); // return constructor

// Object.prototype is the base object
console.log(typeof Object.prototype); // return object

// function is object
function func() {}
console.log("func prototype = ", func.prototype); // return constructor
// only function has prototype
const obj = {};
console.log("obj prototype = ", obj.prototype); // undefined
const arr = [];
console.log("arr prototype = ", arr.prototype); // undefined
