function outer() {
  let num = Math.random();
  console.log("print in outer", num);
  function inner() {
    console.log("print in inner", num);
  }
  return inner;
}

let in1 = outer();
// let in2 = outer();
in1();
// in2();
in1();
