/**
 * array and function inherit object.
 *
 *
 *
 *
 */

// const arr = [];
// console.log(arr.__proto__); // Array
// console.log(arr.__proto__.__proto__); // object

const func = function () {};
console.log(func.__proto__); //function
console.log(func.__proto__.__proto__); // object

const obj = {};
console.log(obj.__proto__); // object
console.log(obj.__proto__.__proto__); // null -beyond the base

/**
 * 
 Here Point is a constructor function, 
 it builds an object (data structure) procedurally. 
 myPoint is an object constructed by Point() 
 so Point.prototype gets saved to myPoint.__proto__ at that time.
 */

function Point(x, y) {
  this.x = x;
  this.y = y;
}

var myPoint = new Point();

// the following are all true
console.log(myPoint.__proto__ == Point.prototype);
console.log(myPoint.__proto__.__proto__ == Object.prototype);
console.log(myPoint instanceof Point);
console.log(myPoint instanceof Object);
