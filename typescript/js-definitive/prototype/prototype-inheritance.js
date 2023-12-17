/**
 * don't use __proto__
 * should use Object.create(parent)
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
console.log(lizard.sing());
console.log(lizard.fight());

console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));

//---------------------Object.create-----------------------------

let person = { name: "john" };
let man = Object.create(person);

console.log(person.isPrototypeOf(man));
