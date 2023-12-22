console.log("begin - module1");

function inc(x) {
  return x + 1;
}

export function reduce(x) {
  return x - 1;
}
export { inc };
