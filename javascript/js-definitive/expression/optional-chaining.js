/**
 * ?. if property not exist, return undefined
 * the question mark should consective used from right to left
 */

let obj = {
  x: { name: "x", value: 1 },
  y: { name: "y", value: 2 },
  hello(name) {
    return `hello ${name}`;
  },
};

console.log(obj?.z?.value); // return undefined

console.log(obj.z?.value); // return undefined
console.log("z=", obj.z?.value ?? 0); // nullish coalescing
//error: console.log(obj.z.value);

// check method
console.log(obj.helo?.("world") ?? "method not exist");
