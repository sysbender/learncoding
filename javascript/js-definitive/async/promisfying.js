// promisify timeout

function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

wait(3)
  .then(() => {
    console.log("waited 3 seconds");
    return wait(2);
  })
  .then(() => {
    console.log("waited 2");
    return wait(1);
  })
  .then(() => {
    console.log("waited 1");
  });
