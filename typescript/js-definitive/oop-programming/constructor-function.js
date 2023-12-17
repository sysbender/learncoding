// ES5 constructor function

// any funciton that call with new keyword

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  //   this.attack = function () {
  //     console.log(` ${this.name} attacks with ${this.weapon}.`);
  //   };
}

Elf.prototype.attack = function () {
  console.log(` ${this.name} attacks with ${this.weapon}.`);
};

const elf = new Elf("litter", "fire");
elf.attack();

// new Function
const Elf1 = new Function(
  "name",
  "weapon",
  `this.name = name; this.weapon =weapon`
);
const elf1a = new Elf1("elf1a", "stone");
console.log(elf1a.name);
