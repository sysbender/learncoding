// https://zhuanlan.zhihu.com/p/50539121

function fnInfo(fn) {
  if (fn instanceof Function) {
    console.log(` fn name=${fn.name}, parameter num=${fn.length}`);
  } else {
    console.log("fnInfo need a function as parameter");
  }
}
let user = {
  name: "john",
};

function original(p1, p2) {
  console.log(` name = ${this.name}, p1=${p1}, p2=${p2} `);
  return false;
}

let bound = original.bind(user, 1);
let boundResult = bound(2);
fnInfo(boundResult);

// bound function only accept one parameter
fnInfo(function (a, b) {}.bind()); // fn name=bound , parameter num=2
fnInfo(function (a, b) {}.bind); // fn name=bind, parameter num=1
console.log(function () {}.bind().name);

// implementation

// all all function use myBind
function myBind(context = window, ...outerArg) {
  console.log("outer args = ", outerArg);
  //allow other parameters
  let self = this;
  return function (...innerArg) {
    console.log("inner args= ", innerArg);
    self.call(context, ...innerArg.concat(outerArg));
  };
}

Function.prototype.myBind = myBind;

// example
function fn(p1, p2) {
  console.log(this, p1, p2);
}

fn.myBind({ a: 1 }, "x", "y")();
