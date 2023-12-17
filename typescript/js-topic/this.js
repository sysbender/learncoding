/**
 * the value of this determined by how the function is called
 * - implit binding
 * - explicit binding
 * - new binding
 * - default binding
 *
 * precedence: new binding > explicit > implicit > default
 */

const person = {
  name: "John",
  sayName: function () {
    console.log("from method:", this.name);
  },
};

person.sayName(); //1 implicit binding - object dot : invoke function

// every function has a builtin method call
function sayName() {
  console.log("from function:", this.name);
}
sayName.call(person); // 2- invoke function with call method
//------------examplel of call
const oneperson = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const anotherPerson = {
  firstName: "Alice",
  lastName: "Smith",
};

const fullName = oneperson.fullName.call(anotherPerson);
console.log(fullName); // Outputs: "Alice Smith"

// new
function Person(name) {
  // this equals {}  empty object
  this.name = name;
}
const p1 = new Person("Newman"); // 3 - function is invoked with a new keyword
console.log("invoke with new keyword: ", p1.name);

// - not all of the three
// const name = "defaultname";  // this is for browser
globalThis.name = "defaultname"; // this is for nodejs
sayName(); // if can find in global scope, other wise 'undefined'
