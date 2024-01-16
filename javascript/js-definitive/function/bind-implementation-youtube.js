//------------------ https://www.youtube.com/watch?v=W3mUxXVS_lU
// avoid polluting the context  - prototype chain
function mybind3(fn, context) {
  const newContext = Object.create(context);
  newContext._fn = fn;
  return function () {
    return newContext._fn();
  };
}
// use dot to call
function mybind2(fn, context) {
  return function () {
    context._fn = fn;

    return context._fn();
  };
}

// use call or apply
function mybind(fn, context) {
  return function () {
    return fn.call(context);
  };
}

let user = {
  name: "John",
  _print: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  show3: function () {
    const boundFunction3 = mybind3(this._print, this);
    setTimeout(boundFunction3, 3000);
  },
  show2: function () {
    const boundFunction2 = mybind2(this._print, this);
    setTimeout(boundFunction2, 2000);
  },
  show: function () {
    const boundFunction = mybind(this._print, this);
    setTimeout(boundFunction, 1000);
  },
  hello: function () {
    const self = this;
    function print() {
      console.log(`Hello, my name is ${this.name} or ${self.name}`);
    }
    print.bind(this)(); // change this in print function from window to parent's this
    this._print(); // when call function with dot, the object is bind to this
  },
};

user.hello(); // when call function with dot, the object is bind to this
// ----------------- bind : for function currying
user.show();
user.show2();
user.show3();
