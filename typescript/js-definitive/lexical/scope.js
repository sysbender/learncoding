//-----------------[[Scopes]]

/**[[Scopes]] is a private property that Chrome developer tools
 * ou can manually inspect these properties in the console, which might be helpful for debugging, but you can't access them using JavaScript
 * and you shouldn't care about them in your application code.
 */

//------------------init variable without declaration
function wired() {
  foo = "bar"; //since foo is not declared with var/let/const,
  //and is not found in any scope,
  // it will be created in global scope by javascript
  // "use strict" to avoid this behavior
}

//-----------------named function in function expression
const myfuncvar = function myfunc() {
  return "my";
};

console.log(myfuncvar()); // this works
// myfunc() - undefined

//------------------ var in function scope

function myloop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(` final i = ${i}`);
}
myloop();

/**================ lexical scope vs dynamic scope
 * lexical scope - available data + variable where the function is defined
 * dynamic scope - where function is called
 */
