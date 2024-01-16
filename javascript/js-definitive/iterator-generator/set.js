const set1 = new Set(["a", "b", "c"]);
const set2 = new Set("hello");

console.log(set2.size);
console.log(set2.has("h"));
set2.add("x");
set2.delete("o");
console.log(set2);

for (let a of set2) {
  console.log(a);
}

// set to array
const arr = [...set2];
console.log(arr);

set2.clear();
