// const assert = require("assert");

// assert.strictEqual(1, 1);

const parent = document.querySelector(".parent");
const child1 = parent.children[0];
const child2 = child1.nextElementSibling;
child2.style.color = "red";
const child3 = parent.lastElementChild;

console.log(child3.nextElementSibling);
