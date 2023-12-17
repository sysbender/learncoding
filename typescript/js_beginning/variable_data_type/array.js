const assert = require("assert");

// array literal

const numbers = [1, 2, 3, 34];
// array construct
const fruits = new Array("apple", "grape", "orange");

// length - get, set
numbers.length = 3;
assert.strictEqual(numbers.length, 3);

// manipulate - append - by index, or push
let n = 456;
numbers[numbers.length] = n;
assert.strictEqual(numbers.pop(), n);

numbers.push(n);
assert.strictEqual(numbers.pop(), n);

numbers.unshift(n);
assert.strictEqual(numbers.shift(), n);

numbers.reverse();

//get value

assert.strictEqual(numbers.includes(1), true);
assert.strictEqual(numbers.indexOf(999), -1);

assert.deepStrictEqual([0, 1, 2, 3, 4, 5].slice(1, 3), [1, 2]); // not modify the array

// delete and insert
let arr = [0, 1, 2, 3, 4, 5];
let rest = arr.splice(1, 3);
assert.deepStrictEqual(arr, [0, 4, 5]);
assert.deepStrictEqual(rest, [1, 2, 3]);

arr = [0, 1, 2, 3, 4, 5];
let after = arr.splice(1, 3).reverse();
// assert.deepStrictEqual(arr, [0, 4, 5]);
// assert.deepStrictEqual(rest, [1, 2, 3]);

console.log(after);

arr = [0, 1, 2, 3, 4, 5];
arr.splice(1, 3, 11, 22, 33, 44);
console.log(arr);

// concat
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
assert.deepStrictEqual(arr3, [1, 2, 3, 4], "arr3");

// spread operator ...
assert.deepStrictEqual([...arr1, ...arr2], arr3);
// flatten arry
assert.deepStrictEqual([1, [2, 3], 4].flat(), arr3);

//-----------static method - isArray, of, from
assert.strictEqual(Array.isArray([1, 2]), true);
assert.deepStrictEqual(Array.from("12"), ["1", "2"]);
assert.deepStrictEqual(Array.of(1, 2), [1, 2]);

//destructure array
const pets = ["cat", "dog", "bird", "fish"];
const [pet1, pet2, ...otherpets] = pets;
assert.strictEqual(pet1, "cat");
assert.deepStrictEqual(otherpets, ["bird", "fish"]);
