/**
 * entries()
 * values()
 * keys()
 * join()
 * toString()
 * toLocaleString()
 * flat()
 * */

// flat - one level
let arr = [1, 2, [3, 4]];
let deepArr = [1, [2, [3, 4]]];

console.log(arr.flat()); // [1,2,3,4]
console.log(deepArr.flat()); // [1,2, [3,4]]
console.log(deepArr.flat(2)); // [1,2, 3,4]
