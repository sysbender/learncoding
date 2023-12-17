let view;
function initialize() {
  view = "hello";
  console.log("view is set");
}

initialize();
initialize();
console.log(view);

const init2 = initialize2();
init2();
init2();

function initialize2() {
  let view;
  let called = 0;

  function inner() {
    if (called < 1) {
      called++;
      view = "hello";
      console.log("set view");
    } else {
      called++;
      console.log("view already set");
      return;
    }
  }
  return inner;
}
