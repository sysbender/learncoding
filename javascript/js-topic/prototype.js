/**
 * share property and method between instances
 */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const p1 = new Person("John", "Doe");

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(p1.getFullName());
