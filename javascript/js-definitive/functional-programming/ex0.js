const add100 = (x) => x + 100;
const double = (x) => x * 2;
const add2 = (x) => x + 2;
const multiplyBy3 = (x) => x * 3;
const subtract1 = (x) => x - 1;

const compose = (f, g) => (x) => {
  console.log(` -------in compose: f=${f.name}, g=${g.name}, x=${x}`);
  return f(g(x));
};

const functions = [add100, double, add2, multiplyBy3, subtract1];

const composedFunction = functions.reduce(compose);

const result = composedFunction(5); // Result is (5 - 1) * 3 + 2 = 14
console.log(result);
