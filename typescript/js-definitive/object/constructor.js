// object constructor

function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function () {
  console.log(` ${this.species}  is walking`);
};

const bear = new Animal("bear");
console.log(bear.__proto__);
console.log(bear.__proto__ === Animal.prototype); // true
