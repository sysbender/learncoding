function Person(name) {
  this.name = name;
}
Person.prototype.hello = function () {
  console.log(`Hello, I am ${this.name}`);
};

const p = new Person("John");
p.hello();

function prototypeChain(obj) {
  let results = [];
  let o = obj;
  let i = 0;
  while (i < 10 && o.__proto__) {
    // Object.prototype.__proto__ is null
    i++;
    //console.log(" protoname ", o.__proto__.constructor.name);
    results.push(o.__proto__.constructor.name);
    o = o.__proto__;
  }
  console.log(results);
}

prototypeChain(p);
