// callback function - function as an argument of another function
// higher order function - function accept function as a parameter, or return a function

function greetCallback(name) {
  console.log(` Hello ${name}`);
}

function johnHigerOrder(fnCallback) {
  const name = "John";
  fnCallback(name);
}

johnHigerOrder(greetCallback);

// synchronous callback
// asynchronous callback - delay the execution of a function until an event has occured( setTimeout, eventListener)

//callback hell - nested multiple times, (promise is introduced to resolve this issue)
