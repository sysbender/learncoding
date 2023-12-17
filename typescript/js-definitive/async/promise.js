const p1 = new Promise(exeutorFunc);

function exeutorFunc(resolveFunc, rejectFunc) {
  setTimeout(() => {
    let r = Math.random();
    if (r < 0.5) {
      console.log(" run revole");
      resolveFunc("foo");
    } else {
      console.log(" run - rejected");
      rejectFunc("An error in executing");
    }
  }, 1000);
}

// p1.then((value) => {
//   console.log(value); // output : foo
// });

p1.catch((value) => {
  console.log("rejected = ", value); // output : foo
});
