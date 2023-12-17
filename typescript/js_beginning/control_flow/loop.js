const assert = require("assert");

for (let i = 0; i < 15; i++) {
  if (i % 2 == 0) {
    continue;
  }
  if (i > 4) {
    break;
  }

  console.log(i);
}

// FizzBuzz - multiple of 3, 5 , both
for (let i = 1; i <= 100; i++) {
  let isMultple3 = i % 3 == 0;
  let isMultple5 = i % 5 == 0;
  if (isMultple3 && isMultple5) {
    console.log("FizzBuzz");
  } else if (isMultple3) {
    console.log("Fizz");
  } else if (isMultple5) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// for of loop - array
const items = ["a", "b", "c"];
for (const item of items) {
  console.log(item);
}

const mapItems = new Map([
  ["foo", "Foo"],
  ["bar", "Bar"],
]);
const setItems = new Set(["a", "b", "c"]);
console.log(mapItems);
for (const [key, value] of mapItems) {
  console.log(key, value);
}

// for in loop - key , value
const personObj = {
  name: "John",
  age: 30,
  address: {
    city: "NY",
    country: "US",
  },
};

for (const key in personObj) {
  console.log(key, "=", personObj[key]);
}

for (const a in ["a", "b", "c"]) {
  console.log(a); // print index of array
}
