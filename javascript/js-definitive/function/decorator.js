const assert = require("assert");
/**
 * decorator - wrap a function in another function , add new capabilities
 *
 */

// ex1 - using closure to log how many times a function is called

// core function
let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

// decorator function
const callCounter = (fn) => {
  let count = 0;
  return (...args) => {
    console.log(`fn has been called ${(count += 1)} times`);
    return fn(...args);
  };
};

sum = callCounter(sum);
sum(1, 2, 3);
sum(1, 2, 4);
sum(1, 2, 5);

// check parameters

let rectangleArea = (width, height) => {
  return width * height;
};

const countParams = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of parameters for ${fn.name}`);
    }
    return fn(...params);
  };
};

const requireIntegers = (fn) => {
  return (...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`param must be an integer `);
      }
    });

    return fn(...params);
  };
};
rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);

let result = rectangleArea(2, 3);
console.log(result);

// time an async API call function

let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const dataResponseTime = (fn) => {
  return async (url) => {
    console.time("fntime");
    const data = await fn(url);
    console.timeEnd("fntime");
    return data;
  };
};

const myTestFunction = async () => {
  // decorate
  requestData = dataResponseTime(requestData);
  const data = await requestData("https://jsonplaceholder.typicode.com/posts");
  console.log(data.length);
};
myTestFunction();
