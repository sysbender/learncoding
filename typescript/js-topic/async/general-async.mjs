console.log("Sync 1");

/**
 *  the function inside setTimeout is still executed asynchronously
 * after the current synchronous code has completed.
 */
setTimeout(() => console.log("Time out 2"), 0);
/**
 *  // the then callback to execute as a microtask.
 * However, it will be placed in the microtask queue,
 * which has a higher priority than the callback queue
 * (where setTimeout callbacks are placed).
 */

Promise.resolve().then(() => console.log("Promise 3"));

//follows "Sync 1" immediately and is executed accordingly.
console.log("sync 4");

// -----------------------fetch api example
import fetch from "node-fetch";
const p = fetch("https://jsonplaceholder.typicode.com/todos/1");
p.then((res) => res.json()).then((user) => console.log(user.tittle));

console.log("sync-");
