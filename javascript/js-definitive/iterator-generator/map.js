const m = new Map();
//get
m.set("a", 1).set("b", 2).set("c", 3); // map.set chainning
//get
console.log(m.get("a"));
// check
console.log(m.has("a"));
console.log(m.delete("b"));

// key can be object, but can only retrive by the same object reference, not by object value

// create map from array , same format as Object.entries
const m1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(m1.has("c"));

// convert object to map
const obj = { a: 1, b: 2, c: 3 };
const m2 = new Map(Object.entries(obj));
console.log(m2.has("c"));

// iterate

for (const [k, v] of m2) {
  console.log(`k=${k}, v=${v}`);
}

// map to array
console.log([...m2.entries()]);
console.log(m2.entries()); // return MapIterator
console.log([...m2]); // 2d array
