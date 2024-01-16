const Person = function (name, isMarried) {
  this.name = name;
  this.isMarried = isMarried;
};
Person.prototype.hello = function () {
  console.log(` Hello, i am ${this.name}`);
};

const p1 = new Person("mary", false);
console.dir(p1);

// Person.prototype.address = { city: "NY" };
// Person.prototype.age = 18;
// const p1 = new Person("John", false);
// const p2 = new Person("Doe", false);

// p1.address = { city: "MTL" };
// p2.age = 44;
// console.log(p1.address == p2.address); // true
// console.log(Object.is(p1.address, p2.address));

// console.log(`p1.address.city = ${p1.address.city}`);
// console.log(`p2.address.city = ${p2.address.city}`);

// console.log(`p2.age = ${p2.age}`);
// console.log(`p1.age = ${p1.age}`);
