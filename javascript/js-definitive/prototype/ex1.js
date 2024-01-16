Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

const result = new Date("1903-10-10").lastYear();
console.log(result);

//----------
Array.prototype.map = function (f) {
  narr = [];
  for (let i = 0; i < this.length; i++) {
    if (f == this.undefined) {
      narr.push(this[i] + "=");
    } else {
      narr.push(f(this[i], i, this));
    }
  }
  console.log(narr);
  return narr;
  //return [11, 2, 22];
};
const arr = [1, 2, 3];
console.log(
  arr.map(function (value) {
    return 2 * value;
  })
);
