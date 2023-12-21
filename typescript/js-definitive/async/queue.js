console.log("start");
setTimeout(() => {
  console.log("timeout in 0 second");
}, 0);
// promise has high priority to execute than event callback
Promise.resolve("promise resolved in 0 second").then((res) => {
  console.log(res);
});

Promise.resolve("promise resolved in 0 second again").then((res) => {
  let i = 0;
  while (i < 3_000_000_000) {
    i++;
  }
  console.log(res);
});
console.log("end");
