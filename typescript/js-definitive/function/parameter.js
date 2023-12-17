/**
 * parameter defult value
 */
function calc(price, num = 1, tax = 0.15) {
  return price * num * (1 + tax);
}

console.log(calc(10));

console.log(calc(10, 2));

console.log(calc(10, 2, 0.1));
console.log(calc(10, undefined, 0.1)); // use undefine to skip

/**
 * pass by reference, by value
 */

let name1 = "foo";
let obj1 = { value: "bar" };
let arr1 = ["a", "b"];

let obj2 = Object.assign({}, obj1); // shallow clone object
let obj3 = { ...obj1 }; // shallow clone object another way
let arr2 = [].concat(arr1); //shallow clone array
// use JSON for deep clone
JSON.parson(JSON.stringify(obj));

append(name1);
console.log("name1=", name1);

append(obj1);
append(arr1);
console.log("obj1=", obj1);
console.log("obj1=", obj2);

console.log("arr1=", arr1);
console.log("arr2=", arr2);

function append(p) {
  if (typeof p === "object") {
    if (Array.isArray(p)) {
      p = p.push("_new");
      console.log(p);
    } else {
      p.value = p.value + "_new";
    }
  } else {
    p = p + "_new";
  }
}

//even when an array is passed by reference, if you reassign the parameter to a new array within the function, it will not affect the original array:
