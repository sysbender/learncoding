// compose -  apply two functions on data
// going from right to left

// arrow function
const compose = (f, g) => (data) => f(g(data));

// regular function
function compose1(f, g) {
  return function (data) {
    // return a function that take data as parameter , and return num
    return f(g(data));
  };
}

function multiplyBy3(num) {
  return num * 3;
}
function abs(num) {
  return Math.abs(num);
}

const multiplyBy3AndAbs = compose(multiplyBy3, abs);

console.log(multi3abs(-50));
