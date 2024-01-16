console.log(0.1 + 0.3 === 0.4);

// convert to string
console.log(typeof +"0.4"); // use + to convert to number
console.log(typeof Number("0.4"));

// parsing

console.log("parse number : ", Number.parseInt("30px"));
console.log("parse number : ", Number.parseInt("1abc", 16)); // radix
console.log("parse float: ", Number.parseFloat("3.14abc"));

// check
console.log(Number.isNaN(+"x")); //true
console.log(Number.isNaN(23 / 0)); // false
console.log(Number.isFinite(+"20")); // true
console.log(Number.isInteger(-2)); // true

// numeric seperator
const pi = 3.145_156;
console.log(pi);

// number total 64 bit, 53 bit for numbers
console.log("biggest number = ", 2 ** 53 - 1 === Number.MAX_SAFE_INTEGER);
// bigInt

const bn1 = 9999999999999999999999999999777n;
console.log(bn1 > Number.MAX_SAFE_INTEGER);
const bn2 = BigInt(23);
