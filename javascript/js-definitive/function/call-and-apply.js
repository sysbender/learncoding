/**
 * 1. use call with regular function
 * 2. use call with method
 */

//1--------------------- call with regular function
//it's less common to use Function.call with regular standalone functions
//(since you can simply invoke the function directly)
function greet(name) {
  console.log(`Hello ${name}!`);
}

let obj = { name: "John" };
greet.call(obj, obj.name);

//2-------------------- method with call
const person = {
  name: "John",
  greet: function (age = 18) {
    console.log(`Hello, my name is ${this.name}, I am ${age}`);
  },
};

person.greet();

const dog = { name: "Fido" };

person.greet.call(dog, 8);

// apply - can be replaced with call and using spread the arguments
person.greet.apply(dog, [8]); // apply take an array for all the real argument
