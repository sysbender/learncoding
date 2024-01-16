class Animal {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log(`I am ${this.name}`);
  }
}

const an = new Animal("an");
an.log();

class Dog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  attack() {
    console.log(`${this.name} bites`);
  }
}

const dog = new Dog("fido", "white");
dog.attack();

console.log(Animal.prototype.isPrototypeOf(Dog)); // false
console.log(Animal.prototype.isPrototypeOf(dog)); // true
console.log(dog instanceof Dog); //true
console.log(dog instanceof Animal); // true
