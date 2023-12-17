/**
 *  4 ways to define method in object
 * 1 . method as a function expression
 * 2. method as a function declaration
 * 3. define methods outside the object
 * 4. method using array function
 * 5. method using ES6 method shorthand
 */

// * 1 .========== method as a function expression
const person1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
// * 2. ========== method as a function declaration

// * 3. ========= define methods outside the object
// * 4. ========== method using array function
// * 5. ========== method using ES6 method shorthand

//* 6 ========== new Function
const add = new Function("a", "b", "return a+b");
console.log(add(2, 3));
