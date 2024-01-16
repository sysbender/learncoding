/**
 * currying, -a technique that allows you to transform a function
 * that takes multiple arguments into a series of functions that each take one argument.
 *  function f(a,b,c) transform to f(a)(b)(c)
 */

function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum); // curriedSum holds a curried version of the sum function.
console.log(curriedSum(2)(3)(5));

/**
 * Here's how the calls work:
curriedSum(2) returns a new function that expects the next argument.
curriedSum(2)(3) returns another new function that expects the last argument.
curriedSum(2)(3)(5) finally calls the sum function with all the accumulated arguments
 */
