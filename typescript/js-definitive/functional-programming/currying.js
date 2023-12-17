// currying

/***
 * named after Haskell B. Curry
 * takes a function that receives more than on eparameter
 * and break it into a series of unary function
 *
 */

// ex1. build sandwich

const buildSandwich = (ingred1) => {
  return (ingred2) => {
    return (ingred3) => {
      return ` ${ingred1} +  ${ingred2} +  ${ingred3}`;
    };
  };
};

const buildSandwich2 = (ingred1) => (ingred2) => (ingred3) =>
  ` ${ingred1} +  ${ingred2} +  ${ingred3}`;

console.log(` build sandwith 1 ${buildSandwich("a")("b")("c")}`);
console.log(` build sandwith 2 ${buildSandwich2("a")("b")("c")}`);

// ex. tax calculate
function taxCalculator(taxRate) {
  return function (amount) {
    return (amount * taxRate) / 100;
  };
}

const calculateFederalTax = taxCalculator(5);
const calculateProvinceTax = taxCalculator(10);

const amount = 100;
const totalTax = calculateFederalTax(amount) + calculateProvinceTax(amount);
console.log(`amount = ${amount}, tax = ${totalTax}`);

// general curry function

const curry = (fn) => {
  return (curried = (...args) => {
    console.log(` fn length = ${fn.length} , curried= ${curried}`);
    // args.length increase everytime
    if (fn.length != args.length) {
      let newfunc = curried.bind(null, ...args); // bind create new function
      console.warn([...args]);
      return newfunc;
    }
    return fn(...args);
  });
};

const total = (x, y, z) => x + y + z;
const ct = curry(total);
console.log(ct(2)(3)(4));

// universal currying

const curry2 = (fn) => {
  let receivedArgs = [];
  return (curried = (...params) => {
    receivedArgs = [...receivedArgs, ...params];
    console.log(` received args = ${receivedArgs}`);
    if (fn.length === receivedArgs.length) {
      console.log(` enough !!!`);
      let tempArgs = [...receivedArgs];
      receivedArgs = [];

      return fn(...tempArgs);
    } else {
      return curried;
    }
  });
};

const ct2 = curry2(total);
console.log(ct2(1)(2)(3));

// clever

const curry3 = (fn) => {
  return function curried(...args) {
    if (args.length === fn.length) {
      console.log(`args = ${args}`);
      return fn(...args);
    } else {
      return function (...newArgs) {
        console.log(`args = ${args} , newArgs = ${newArgs}`);
        return curried(...args, ...newArgs);
      };
    }
  };
};

const ct3 = curry3(total);
console.log(ct3(4)(5)(6));
