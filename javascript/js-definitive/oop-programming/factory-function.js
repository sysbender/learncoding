const elfproto = {
  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elfproto);

  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const elf = createElf("john", "fire");
elf.attack();
// --------https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9

const elfFactory = (name, weapon) =>
  Object.assign(Object.create(elfproto), { name, weapon });

const white = elfFactory("white", "snow");

white.attack();
