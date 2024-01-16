/**
 * spread opreator work with all iterables
 * also works with object
 * use case:
 * 1. build new array
 * 2. pass multiple parameter
 */

const arr = [1, 2, 3];
const arr1 = [...arr, 4, 5, 6];
console.log(arr1);

// shallow copy arry

const arrCopy = [...arr];

// merge array

const arrDouble = [...arr, ...arr1];

// spread string
const s = "hello";
const sarr = [...s];
console.log(` s = ${sarr}`);

//
const point2d = { x: 1, y: 2 };
const point3d = { ...point2d, y: 22, z: 3 }; // overwrite value, add property
console.log("point3d = ", point3d);
