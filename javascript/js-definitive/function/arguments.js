/**
 * arguments - is part of the execution environment
 * even if we declare the funcion without parameter, we can invoke the function with arguments and get it
 */

function add(a, b) {
  console.log(`from arguments = ${Array.from(arguments)} `); // avoid use arguments, which is not arry
}

function sum(...args) {
  // use expand operator
  console.log(`args = ${args}`);
}

add(1, 2);
sum(1, 2);

/**
 * Arrow functions do not have an arguments binding. However,
 * they have access to the arguments object of the closest non-arrow parent function.
 */

const arrayFunction = () => {
  console.log("arrow arguments = ", arguments);
};

arrayFunction(4, 5, 6);
