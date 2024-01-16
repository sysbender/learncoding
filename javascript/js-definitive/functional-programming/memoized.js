function memoized() {
  let cache = {};
  return function (input) {
    if (input in cache) {
      return cache[input];
    } else {
      console.log("calculate...");
      const result = input + 4;
      cache[input] = result;
      return result;
    }
  };
}

const memoizedFunc = memoized();

console.log(memoizedFunc(10));
console.log(memoizedFunc(2 0));
