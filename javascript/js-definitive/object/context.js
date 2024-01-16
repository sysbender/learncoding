// default is globalThis
let myGlobalPi = 3.14;
console.log(this);

let obj = {
  name: "John",
  greet: function () {
    console.log(`Hello ${this.name}`);
    console.log(this);
  },
};

obj.greet();
