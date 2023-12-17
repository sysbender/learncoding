function sum(a, b, c) {
  return a + b + c;
}

function avg(a, b, c) {
  return (a + b + c) / 3;
}

const curriedSum = (a) => (b) => (c) => sum(a, b, c);

function curriedAvg(a) {
  return (b) => {
    return (c) => {
      return (a + b + c) / 3;
    };
  };
}
let total = curriedSum(2)(3)(4);
let a = curriedAvg(2)(3)(4);
console.log("total=", total);
console.log("average=", a);
