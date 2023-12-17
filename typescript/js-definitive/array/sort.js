/**
 * sort()
 * reverse()
 */

let arr = [3, -1, -12];
console.log(arr.sort()); //[-1, -12, 3]   sort by string by default
console.log(arr.sort((a, b) => a - b)); // sort by value : <0, ab; >0 ba

console.log(arr.sort().reverse());
