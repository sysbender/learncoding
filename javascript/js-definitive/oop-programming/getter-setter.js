class Person {
  constructor(name) {
    this.name = name;
    this._married = false;
  }

  get married() {
    return this._married;
  }

  set married(status) {
    this._married = status;
  }
}

const p = new Person("john");
console.log(p.married);
p.married = true;
console.log(p.married);
