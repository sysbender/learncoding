/**
 * async functions are instances of the AsyncFunction constructor
 * async always return a promise
 *
 */

async function fetchData() {
  //return "hello";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = Math.random();
      if (data < 0.5) {
        resolve(data);
      } else reject(data);
    }, 1000);
  });
}
/**
 * await - pause the execution of a function until a Promise is resolved
 * await expression returns the resolved value of the Promise
 * you can only use await inside an async function
 */

async function processData() {
  // use the resolved data here
  try {
    const result = await fetchData(); // pause the execution until fetchData resolved
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const r = processData();
console.log(r);
