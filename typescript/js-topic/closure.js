/**
 * in js, when return a function from another function,
 * we are returning a combination of the function fefinition along with the function scope.
 *
 * that combination of the function and its scope chain is called closure
 */

function outer() {
  let counter;
  counter = 0;
  console.log(" init counter=0");
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

fn = outer();
fn();
fn();

/**
 * return inner;: The outer function returns the inner function.
 * This is where closures come into play.
 * The inner function retains access to its containing outer function's scope,
 * including the counter variable, even after outer() has finished executing.
 */
