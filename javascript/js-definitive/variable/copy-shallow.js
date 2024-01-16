/**
 * primitive -
 * structural - object : Object, Array, Map, set , WeakMap, Date , function
 *
 *
 *
 */
// compare reference :  Object.is( a1, a2) or ===

// shallow copy - spread operator
const a1 = [1, 2, 3];
const a2 = [...a1, 4];
console.log(a2);
// Object.assign
const a3 = Object.assign([], a1);

// Array.from
// Array.slice
// Object.freeze    - is a shallow freeze
