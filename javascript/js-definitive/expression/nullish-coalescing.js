/**
 * nullish = null , undefined
 */

let input = 0;

let n = input;
const result = n || 10;
console.log(`result = ${result}`); // 0 - is a valid number

let n1 = input;
const result1 = n ?? 10;
console.log(`result1 = ${result1}`);

// logicall assignment operator
let n3 = 0;
n3 ||= 10;
console.log(` n3 = ${n3}`);

let n4 = undefined;
n4 ??= 10;
console.log(`n4 = ${n4}`);
