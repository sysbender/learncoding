// add debugger to trigger debug in brower

let counter = 0;
let interid = setInterval(() => {
  console.log("------------from interval");
}, 100);
setTimeout(() => {
  console.log("this is delay for 1 second");
}, 1000);
function repeat() {
  console.log(counter++);
  if (counter < 1000) {
    repeat();
  } else {
    counter = 0;
  }
}
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();
repeat();

clearInterval(interid);
console.log("============clear interval ");
