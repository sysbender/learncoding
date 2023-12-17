// includes method
"Hello".includes("e");

// padStart
"hello".padStart(10);
// padEnd
"123".padEnd(5, " ");

"  hello  ".trimStart();

"  hello  ".trimEnd();

// replaceAll - es2021
console.log("hello world".replaceAll("l", "0"));

const s1 = "hello";
console.log(s1[1], s1.length, s1.indexOf("l"), s1.lastIndexOf("l")); //e

// substring
const s2 = "Hello World";
console.log(s2.slice(6));

// object vs primitive
console.log("string  primitive = ", typeof "hello");
console.log(" string object =", typeof new String("hello"));

// case
s2.toLowerCase();
s2.toUpperCase();

// startWith, endWith

// split
console.log(s2.split(" ").join(","));
