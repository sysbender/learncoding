// https://byvoid.com/zht/blog/javascript-object-prototype/
/***
 * https://stackoverflow.com/questions/7688902/what-is-functions-proto
 * https://stackoverflow.com/questions/29155986/javascript-diagram-to-explain-inheritance-proto-and-prototype
 * https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript
 */

// const assert = require("assert");

function Foo() {}

var foo = new Foo();

var obj = new Object();

console.log(foo.__proto__ === Foo.prototype); // true
console.log(obj.__proto__ === Object.prototype); // true

console.log(Object.__proto__ === Function.prototype); // object is a function

console.log(Function.__proto__ === Object.prototype); // false
