// Person
class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const p1 = new Person("John");
console.dir(p1);
p1.hello();

// Student
/**
 * super must be called before using this in the constructor of a subclass.
When calling a method or accessing a property using super, 
it refers to the superclass, allowing you to invoke the corresponding method or property.
 */
class Student extends Person {
  constructor(name, course, score) {
    super(name);
    this.course = course;
    this.score = score;
  }
  study() {
    console.log(`I study ${this.course}, and got ${this.score}`);
  }
}

const s1 = new Student("Sam", "web", 78);
console.dir(s1);
s1.hello();
s1.study();
