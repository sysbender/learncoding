// object property name and value

let obj = {
  first: "John",
  last: "Doe",
  hello() {
    console.log("Hello world");
  },
};

console.log(Object.keys(obj)); // list attribute and methods name
console.log(Object.values(obj)); // method will print as f

console.log(Object.entries(obj)); // return 2d array

for (let [k, v] of Object.entries(obj)) {
  console.log(`k = ${k}, v=${v}`);
}
