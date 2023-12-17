let value = 1;
doSomethingSync(() => {
  value = 2;
  console.log("set value to 2");
});

console.log(value);

function doSomethingSync(f) {
  f();
}

function doSomethingAsync(f) {
  setTimeout(f, 1000);
}
