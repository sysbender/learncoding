/**
 * https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd
 * a closure is a function having access to the parent scope,
 * even after the parent function has closed
 *a closure is created when we define a function not when a function is executed.
 *
 * function remember the scope in which they were created, even after that scope has exited
 * a closure allows a function to "remember" its surrounding lexical scope, including variables and parameters,
 * even when it's executed outside that scope.
 *
 * usage:
 * 1. encapsulating data
 * 2. creating private variable
 * 3. enabling the creaion of factory functions and currying
 */
function createCounter() {
  // Private variable
  let count = 0;

  // Public methods (closures) that can access and modify the private variable
  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  // Return an object with access to the public methods
  return {
    increment,
    decrement,
    getCount,
  };
}

const counter = createCounter();

console.log(counter.getCount()); // Output: 0
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
counter.decrement();
console.log(counter.getCount()); // Output: 1
