/***
 * recursion occurs when a function calls itself
 *
 * any interator function (with a loop) can be recursive instead
 */

// iterator function
const counttoTen = (num = 1) => {
  while (num <= 10) {
    console.log(`count ${num} `);
    num++;
  }
};
counttoTen();

// recursion - 1. call itself, 2. condition to exit
const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(`recur ${num}`);
  num++;
  recurToTen(num);
};
recurToTen();

// fibonacci -loop
function fib1(num, arr = [0, 1]) {
  while (num > 2) {
    const [nextToLast, last] = arr.slice(-2);
    arr.push(nextToLast + last);
    num -= 1;
  }
  return arr;
}
console.log(fib1(5));

// fibonacci - recursion

function fib2(num, arr = [0, 1]) {
  if (num <= 2) {
    return arr;
  }
  const [nextToLast, last] = arr.slice(-2);
  return fib2(num - 1, [...arr, nextToLast + last]);
}

console.log(fib2(5));

// what num is in the nth position of the Fibonacci sequence?

function fibpos1(pos) {
  if (pos <= 1) {
    return pos;
  }
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
}

console.log(fibpos1(8));

function fibpos2(pos) {
  if (pos <= 1) return pos;
  return fibpos2(pos - 2) + fibpos2(pos - 1);
}
console.log(fibpos2(8));

// real-life exmaple -
// get paging query result
// parser
