/**
 * concat
 * Array.of
 * Array.from()
 * .fill()  - static value
 * flat()
 */

// combine : concat, spread
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

console.log(" concat = ", a1.concat(a2));
console.log("spread = ", [...a1, ...a2]);

// flat
let arr = [1, 2, [3, 4], 5, ["a", ["b", "c"]]];
console.log(arr);
console.log(arr.flat()); // es10
console.log(arr.flat(10)); // es10
//flatMap
console.log(arr.flatMap((value) => `-${value}`));

let f = Array.from([1, 2, 3], (x) => x * 2);

//

let a5 = Array(5); // empty array with 5 element
console.log("item 0 = ", a5[0]); // undefined
a5.fill("a", 0, 5); // 0, 0 + length
console.log(a5);

/**
 * Array.from(arrayLike)
 * rray.from(arrayLike, mapFn)
 * Array.from(arrayLike, mapFn, thisArg)
 */

let b5 = Array.from({ length: 5 }, (value, index) => index);
console.log(b5);

// array from nodelist

// Array.from same as speard operator + map
