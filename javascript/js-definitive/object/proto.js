const person = {
  alive: true,
  greeting() {
    console.log("hello");
  },
};
const coder = { code: true };

coder.__proto__ = person;
console.log(coder.alive);

// getPrototypeOf, setPrototypeOf instead using __proto__

const coder1 = { code: true };
Object.setPrototypeOf(coder1, person); // set person as prototype of coder
console.log(coder1.alive); //true
console.log(Object.getPrototypeOf(coder1) === coder1.__proto__); // true

coder1.greeting();

// setter and getter

const car = {
  doors: 2,
  _seats: 4,
  get seats() {
    // console.log(`-- car : get seats = ${this._seats}`);
    return this._seats;
  },
  set seats(seatNum) {
    // console.log(`-- car: set seats = ${seatNum}`);
    this._seats = seatNum;
  },
};

const van = {};
Object.setPrototypeOf(van, car);

van.seats = 7;
console.log(`van seats =  ${van.seats}`);
console.log(`car seats =  ${car.seats}`);
console.log(van.valueOf());

// get keys of object
console.log(Object.keys(van)); // object keys not include inherited
for (let key in van) {
  // for in will inlucde all the inherited keys
  console.log(key);
}
