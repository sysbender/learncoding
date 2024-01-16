/**
 * push, pop
 * shift, unshif
 * splice
 * copyWithin
 *
 */

// copyWithin
let a = ["a", "b", "c", "d", "e"];
// target, start, end
a.copyWithin(0, 3, 5);
console.log(a); // ["d", "b", "c", "d", "e"]
