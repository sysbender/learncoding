/**
 * filter
 * map(),  * flatMap()
 * reduce(), reduceRight()
 * forEach()
 */

// for each
let arr = [1, 2, 3];
arr.forEach((value, index, a) => {
  console.log(`index = ${index} value =${value}`);
});

let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
map.forEach((v, k, a) => {
  console.log(`value = ${v} key =${k}`);
});

let set = new Set(["aa", "bb", "cc"]);
set.forEach((value, _, set) => {
  console.log(` value = ${value}   `);
});

// filer
console.log(
  "filter  =",
  arr.filter((v) => v % 2 === 1)
);

// map

let double = arr.map((value, index) => {
  return value * 2;
});
console.log("map(double)=", double);

// flatmap  - call map then flat , function return array
let flatMap = [1, 2, 3].flatMap((value) => {
  return [value, value + 100];
});
console.log("flatmap = ", flatMap); //[1, 101, 2, 102, 3, 103]

// reduce - return a value
let a = [1, 2, 3, 4];
let b = a.reduce((acc, v) => {
  return acc + v;
});

console.log(b); // 10

// reduce right

console.log(
  "reduceRight = ",
  arr.reduceRight((acc, v) => acc.concat(v), "")
); // 10
console.log(
  "reduce  = ",
  arr.reduce((acc, v) => acc.concat(v), "")
); // 10
// reduce return an object
let a1 = [1, 2, 3, 4];
let b1 = a.reduce((acc, v, i, arr) => {
  console.log(`i = ${i}, v =${v} , acc = ${JSON.stringify(acc)}`);
  return { [v]: v, ...acc }; //The [v] is a computed property name
}, {});
console.log(b1); // {"1": 1,"2": 2,"3": 3,"4": 4}
