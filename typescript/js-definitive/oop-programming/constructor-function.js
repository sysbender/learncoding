// ES5 constructor function

// any function that call with new keyword

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  //   this.attack = function () {
  //     console.log(` ${this.name} attacks with ${this.weapon}.`);
  //   };
}

Elf.prototype.attack = function () {
  console.log(` ${this.name} attacks with ${this.weapon}.`);
};

const elf = new Elf("litter", "fire");
elf.attack();

// new Function
const Elf1 = new Function(
  "name",
  "weapon",
  `this.name = name; this.weapon =weapon`
);
const elf1a = new Elf1("elf1a", "stone");
console.log(elf1a.name);

// Person - construct function
const Person = function (name) {
  this.name = name;
};

Person.prototype.hello = function () {
  console.log(`Hello, I am ${this.name}`);
};

// inheritance - for construct function

const Student = function (name, course) {
  Person.call(this, name);
  this.course = course;
};
//Student.prototype = Person.prototype; // not correct
Student.prototype = Object.create(Person.prototype);
console.log(
  `  Student.prototype ==   Person.prototype : ${
    Student.prototype === Person.prototype
  }  `
);
Student.prototype.study = function () {
  console.log(`I study ${this.course}`);
};

const s1 = new Student("Mary", "web");
s1.hello();
s1.study();

console.log(
  ` Person is prototype of Student : ${Student.prototype.isPrototypeOf(s1)}`
);
