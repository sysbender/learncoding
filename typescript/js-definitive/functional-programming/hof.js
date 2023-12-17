// higher order function

const hof = (fn) => fn(5);
let result = hof(function a(x) {
  return x * 10;
});

console.log(result);
