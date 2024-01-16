function first(p1 = "100") {
  let v1 = "111";
  console.log(p1);
  second("220");
}

function second(p2 = "200") {
  let v2 = "222";
  console.log(p2);
  third();
}

function third() {
  let v3 = "333";
  console.log(v3);
}

first();
