/**
 * use like a property, but actually run a method
 */

const person = {
  name: "john",
  _married: false,
  get married() {
    return this._married;
  },
  set married(status) {
    this._married = status;
  },
};

console.log(person.married);
person.married = true;
console.log(person.married);
