// js is sync blocking single-threaded language

// implemented by browser
// setTimeout(() => {
//   setTimeout();
// }, timeout);
// setInterval(() => {}, interval);

function delayedMsg() {
  console.log(" This is a delayed message");
}

function repeatMsg() {
  console.log("this is a repeat message");
}

const intervalId = setInterval(repeatMsg, 500);
setTimeout(delayedMsg, 5000);

function stopInterval(intervalId) {
  clearInterval(intervalId);
  console.log(`stop interval = ${intervalId}`);
}

setTimeout(stopInterval, 10000, intervalId);
console.log("this is a immidiate message");
