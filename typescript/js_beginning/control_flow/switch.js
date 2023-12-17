let x = Math.floor(Math.random() * 7);
switch (x) {
  case 0:
    console.log("sunday");
    break;
  case 6:
    console.log("satday");
    break;
  default:
    console.log("weekday");
}

switch (true) {
  case x === 0:
    console.log("sunday");
    break;
  case x === 6:
    console.log("satday");
    break;
  default:
    console.log("weekday");
}
