const p1 = {
  name: "John",
};

const p2 = p1;
p2.name = "Mary";

console.log("p1: ", p1.name);
console.log("p2: ", p2.name);
