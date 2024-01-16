// IIFE - immediately -invooded function expression

// with annonymous arrow function
(() => {
  //do stuff
})();

// with function keyword
(function () {
  // do stuff
})();

// with a function name - allow for recursion
(function myIIFE() {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log("finished");
})((num = 0));

// reason :
//1 - not to pollute the global object namespace
(() => {
  const x = "IIFE";
  const hello = (name) => `Hello ${name}`;
  console.log(hello(x));
})();

// 2 - create private variable and methods from closure
const increment = (() => {
  let counter = 0;
  console.log(`initial counter = ${counter}`);
  const reportCredit = () => console.log(`current credit = ${counter}`);
  return () => {
    counter++;
    reportCredit();
  };
})();

increment();
increment();

// 3 - the module patter

const Score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
    report: () => {
      console.log(` Score: count= ${count}`);
    },
  };
})();

Score.report();
Score.increment();
Score.report();
// revealing pattern

const Game = (() => {
  let count = 0;
  const current = () => {
    return count;
  };
  const increment = () => {
    count++;
  };
  const reset = () => {
    count = 0;
  };
  const report = () => {
    console.log(` Game: count= ${count}`);
  };
  return {
    increment: increment,
    reset: reset,
    report: report,
  };
})();

Game.increment();
Game.report();
// injecting a namespace object

((namespace) => {
  namespace.count = 0;
  // using function instead of arrow to access this
  namespace.report = function () {
    console.log(` namespace count = ${this.count}`);
  };
  namespace.increment = function () {
    this.count++;
  };
  namespace.reset = function () {
    this.count = 0;
  };
})((global.App = global.App || {}));

App.increment();
App.report();
//https://www.youtube.com/watch?v=8GDk8sj0YgQ&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=8
