/**
 * opposite of spread - pack multiple items in an array
 */

// spread - right side of the =
const arr = [1, 2, ...[3, 4]];
// rest - left side of =
const [a, b, ...rest] = arr;
console.log(`a = ${a}, b = ${b}, rest = ${rest}`);

// function

function sum(...rest) {
  for (let x of rest) {
    console.log(`x = ${x}`);
  }
}

sum(1, 2, 3);
