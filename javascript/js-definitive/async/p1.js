// Creating a Promise
const promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous task (e.g., fetching data from a server)
  setTimeout(() => {
    const data = { id: 1, name: "Example Data" };
    const error = null; // No error for this example
    const shouldReject = false; // Set to true to simulate a rejection

    if (shouldReject) {
      reject("An error occurred while fetching data.");
    } else {
      resolve(data);
    }
  }, 2000); // Simulate a 2-second delay
});

// Using Promise Parameters
promise
  .then((data) => {
    console.log("Resolved:", data);
    return data.name; // You can return a value for the next `then` block
  })
  .catch((error) => {
    console.error("Rejected:", error);
  })
  .finally(() => {
    console.log(
      "Promise has been settled, regardless of resolution or rejection."
    );
  });

// Chaining Promises
const anotherPromise = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Welcome back, ${name}!`);
    }, 1000);
  });
};

promise
  .then((data) => {
    console.log("Resolved:", data);
    return data.name;
  })
  .then(anotherPromise) // Chaining with another promise
  .then((greeting) => {
    console.log(greeting);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });
