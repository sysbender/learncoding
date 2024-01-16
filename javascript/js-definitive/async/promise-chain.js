// chained promise

const pOuter = new Promise((resolveOuter) => {
  setTimeout(() => {
    console.log("------------in outer promise");
    resolveOuter(pInner);
  }, 5000);
});

const pInner = new Promise((resolveInner) => {
  setTimeout(() => {
    console.log(" --------- in inner promise");
    resolveInner("innerResult");
  }, 1000);
});

pOuter.then((value) => {
  console.log("outer is resolved", `get = ${value}`);
});
