/**
 * prototype chain - if object can not find property/method ,
 * it lookup in the parent prototype
 */

// constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const p1 = new Person("John", "Doe");
console.log(p1.getFullName());

function SuperHero(firstName, lastName, filmName) {
  // call the parent constructor to set property
  Person.call(this, firstName, lastName);
  this.isSuperHero = true;
  this.filmName = filmName;
}
// set SuperHero.prototype to an instance of Person.prototype to inherit methods
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime ...");
};

const batman = new SuperHero("bat", "man", "the 1st batman film", "");
batman.fightCrime();
console.log(batman.getFullName());
console.log(batman instanceof Person);
console.log(batman instanceof SuperHero);
