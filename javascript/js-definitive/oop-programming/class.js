//ES6 class

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attcks with ${this.weapon}`);
  }
}

const elf = new Elf("smallelf", "fire");
elf.attack();
console.log("elf instanceof Elf=", elf instanceof Elf);
console.log(
  "Elf.prototype.isPrototypeOf elf=",
  Elf.prototype.isPrototypeOf(elf)
);
