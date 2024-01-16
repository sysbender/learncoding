/** https://www.youtube.com/watch?v=DHvZLI7Db8E
 * promise is an object
 * has three state: pending, fulfilled, rejected
 */

const { rejects } = require("assert");
const { resolve } = require("path");

//create

const p = new Promise((resolve, reject) => {
  let result = false;
  if (result) {
    resolve("Mission completed");
  } else {
    reject("Mission failed");
  }
});

p.then((message) => {
  console.log("promise then =", message);
}).catch((message) => {
  console.log("promise catch =", message);
});

// real example

function handleSuccess(response) {
  console.log(" success = ", response);
}

function handleError(error) {
  console.error("error = ", error);
}

function fetchDataCallback(resolve, reject) {
  setTimeout(() => {
    let num = Math.random();
    if (Math.round(num)) {
      resolve(num);
    } else {
      reject(num);
    }
  }, 2000);
}

function fetchDataFromServer() {
  return new Promise(fetchDataCallback);
}

fetchDataFromServer().then(handleSuccess).catch(handleError);

/**
 * Promise - static methods
 * Promise.all()
 * Promise.allSettled() - wait all promise finish
 * Promise.race() - return the result from the first fulfill/reject one
 */
