/**
 *
 *
 */

let arr = [1, 2, 3];
// index

console.log("last (bracet) =", arr[arr.length - 1]);

// at
console.log("last (at) =", arr.at(-1));
console.log("hello (at 1) =", "hello".at(1));
// slice  - get multiple

console.log("last (by slice) =", arr.slice(-1)[0]);

let a = ["ant", "bison", "camel", "duck", "elephant"];
console.log(a.slice(2)); // ["camel", "duck", "elephant"]
console.log(a.slice(2, 4)); // ["camel", "duck"]
