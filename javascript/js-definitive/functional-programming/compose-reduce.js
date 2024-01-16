const append1 = (x) => x + "1";
const append2 = (x) => x + "2";
const append3 = (x) => x + "3";
const fns = [append1, append2, append3];

const initialValue = "hello";

//const composeAppend1 = (f, g, h) => (text) => f(g(h(text)));

//const composeAppend = fns.reduce((acc, fn) => fn(acc), initialValue);

const callback = (acc, fn) => fn(acc);
composeAppend = fns.reduce(callback, initialValue);

//let result = composeAppend(fns)("hello");

//console.log(append1("hello"));

console.log(composeAppend);
