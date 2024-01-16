/**
 * 
In summary, the code demonstrates the creation of arrays and the concept of closures. 
getItem creates an array each time it is called, 
while getItem2 creates an array only once and returns a function (inner) 
that retains access to the array. 
The inner function can be called multiple times to access elements from the array.
 */
function getItem(index) {
  const items = new Array(7000).fill("hello");
  console.log(`create------------array  `);
  return items[index];
}

const a = getItem(688);
getItem(6818);
getItem(6881);
console.log(a);

const getItem2f = getItem2();
getItem2f(688);
getItem2f(688);
getItem2f(688);

function getItem2() {
  const items = new Array(7000).fill("hello");
  console.log("create array 2");
  function inner(index) {
    return items[index];
  }
  return inner;
}
