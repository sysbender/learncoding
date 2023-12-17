/**
 *
 *
 */

const dragon = {
  name: "Bao",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name} , the breath of fire`;
    }
  },
};

const lizard = {
  name: "kiki",
  fight() {
    return 1;
  },
};

const singLizard = dragon.sing.bind(lizard); // borrow a method via bind
console.log(singLizard());

lizard.__proto__ = dragon; // prototype inheritance

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(`own = ${prop}`);
  } else {
    console.log(`parent = ${prop}`);
  }
}
