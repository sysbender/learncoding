/**
 * set time
 *  1. call back function
 * 2. delay in ms
 * 3... the argument pass to call back
 */

let count = 10;
const mytimer = setTimeout(
  (name) => {
    console.log(` Hello, ${name}`);
  },
  3000,
  "world"
);

console.log("let wait...");

clearTimeout(mytimer); // cancel tmier

const myinterval = setInterval(() => {
  console.log(` counting : ${--count}`);
  if (!count > 0) {
    console.log(`cancel counting !`);
    clearInterval(myinterval);
  }
}, 1000);
