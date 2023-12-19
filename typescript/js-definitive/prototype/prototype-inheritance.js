// Person

function Person(name) {
  this.name = name;
}

Person.prototype.hello = function () {
  console.log(` Hello, I am ${this.name}`);
};

const p1 = new Person("John");
console.dir("p1=", p1);
p1.hello();
// Student

// Defines a constructor function Student that extends Person.
// Calls the Person constructor using Person.call(this, name) to initialize the name property.

function Student(name, course, score) {
  Person.call(this, name);
  this.score = score;
  this.course = course;
}
// Prototype inheritance
// create the prototype chain explicitly
Student.prototype = Object.create(Person.prototype);
//the constructor property is manually set to maintain the correct constructor reference.
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  console.log(`I study ${this.course}, and got ${this.score}.`);
};

const s1 = new Student("Sam", "web", 78);

console.dir("s1=", s1);
s1.hello();
s1.study();
console.log("-------------");

// verify
console.log(` s1 is Student : ${s1 instanceof Student}`);
console.log(` s1 is Person : ${s1 instanceof Person}`);
console.log(
  `Student is prototype of s1:${Student.prototype.isPrototypeOf(s1)}`
);
console.dir(Student.prototype.constructor);
