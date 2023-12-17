// take two function as parameter,
const doub = (a) => a * 2;
const inc = (a) => ++a;

const compose = (f1, f2) => (a) => f1(f2(a));

const doubInc = compose(doub, inc);
console.log(doubInc(6)); //14 , inc first , then double
