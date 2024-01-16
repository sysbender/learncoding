/**
 * every()
 * some()
 * includes()
 */

let isOver = (v) => v > 4;
let a = [1, 2, 3, 4, 5];
console.log(a.some(isOver)); // true
console.log(a.includes(isOver));
console.log(a.includes(3));
console.log(
  a.every((value) => {
    return value > 0;
  })
);
