/**
 * public field
 * private field
 * public method
 * private method
 */

class Person {
  // public field - common for many instance
  city = "MTL";

  // private field - truly not accessible
  #age;
  constructor(name, age) {
    this.name = name; // instance field
    this.#age = age;
  }

  getAge() {
    console.log(`age = ${this.#age}`);
  }
  // private method
  #setAge(age) {
    this.#age = age;
  }
  setAge(age) {
    this.#setAge(age);
  }
  static getCity() {
    return Person.city;
  }
}

const p1 = new Person("John", 12);
const p2 = new Person("Mary", 23);
console.dir(p1);
p1.setAge(22);
p1.getAge();
console.log(`Person city = ${Person.city}`);
console.log(Person.getCity());
p1.city = "c1";
p2.city = "c2";

console.log(`p1 city = ${p1.city}`);
console.log(`p2 city = ${p2.city}`);
