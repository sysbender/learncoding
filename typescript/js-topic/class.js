// syntax sugar of prototype

// class = person
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person("John", "Doe");
console.log(p1.getFullName());

// inheritance = extends, super
class SuperHero extends Person {
  constructor(firstName, lastName, filmName) {
    super(firstName, lastName);
    this.filmName = filmName;
  }

  fightCrime() {
    console.log("Fighting crime...");
  }
}

const batman = new SuperHero("bat", "man", "1st film");
console.log(batman);
