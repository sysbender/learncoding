/**
 * 
 * Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)

returns modified target
 */

// shalow clone
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// deep clone - structuredClone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }
