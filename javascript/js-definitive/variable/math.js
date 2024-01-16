console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.PI);
// Math.max, min,

function randomInt(min, max) {
  Math.floor(Math.random() * (max - min) + 1) + min;
}

// Math.random, trunc, round, ceil/floor

// trunc and round is the sample for positive number, but not negative number
console.log(Math.trunc(-2.1)); // -2
console.log(Math.floor(-2.1)); //-3

// round decimal
console.log((2.7).toFixed(0)); //3
console.log(typeof (2.4).toFixed(0)); //2 , string
console.log((3.14159).toFixed(4)); // 3.1416
