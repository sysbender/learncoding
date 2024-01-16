// Person
const PersonProto = {
  hello() {
    console.log(`Hello, I am ${this.name}`);
  },
  // initialize property
  init(name) {
    this.name = name;
  },
};

const p1 = Object.create(PersonProto);
p1.init("John");
console.dir(p1);
p1.hello();

// Student
// prototype inheritance
const StudentProto = Object.create(PersonProto);
// override property initialization
StudentProto.init = function (name, course, score) {
  PersonProto.init.call(this, name);
  this.course = course;
  this.score = score;
};
// add a new method
StudentProto.study = function () {
  console.log(`I study ${this.course} , and got ${this.score}`);
};

const s1 = Object.create(StudentProto);
s1.init("Sam", "web", 78);
console.dir(s1);
s1.hello();
s1.study();
