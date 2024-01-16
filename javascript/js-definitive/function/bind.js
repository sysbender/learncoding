/**
 * return a new function - store the 'this' and args for later use/call
 */

/**
 * use the 'Function.prototype.bind()'  method to create a new function
 * with preset value for its arguments
 *
 * The bind method allows you to set a specific value for the this context
 * and preset some of the function's arguments.
 */
//--------------------- from zhihu

function f1(n1, n2) {
  console.log(`this = ${this}, n1 = ${n2}, n2 = ${n2}`);
}
obj = { a: 1 };
f1.bind(obj, 1, 2)(); //this = [object Object], num = 1
f1.bind(obj)(1, 2);

function multiply(a, b) {
  console.log(` a=${a}, b=${b}`);
  return a * b;
}

let multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(4)); //8

// partial application
const addTax = (rate, value) => {
  console.log(` value = ${value}, rate = ${rate}`);
  return value * (1 + rate);
};
console.log(addTax(0.15, 100));
const addTaxQ = addTax.bind(null, 0.15);
console.log(addTaxQ(100));

// partial application 2 - return function

const addVAT = function (rate) {
  return (value) => {
    console.log(` value = ${value}, rate = ${rate}`);
    return value + value * rate;
  };
};

const addTaxQ2 = addVAT(0.15);
console.log("add tax for 100  =", addTaxQ2(100));
