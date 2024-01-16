const arr = [1, 2, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(`i am at index ${i}`);
//   }, 3000);
// }

for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(`i am at index ${arr[i]}`);
  }, 3000);
}
const arr = [1, 2, 3, 4];
for (var i = 0; i < arr.length; i++) {
  function to(pi) {
    const index = pi;
    function inner() {
      setTimeout(function () {
        console.log(`i am at index = ${index}`);
      }, 3000);
    }
    return inner;
  }
  to(i)();
}
