/**
 * iterable and iterator-protocols
 */

const str = "world";
for (const char of str) {
  console.log(char);
}

const arr = ["1", "2", "3"];
for (const item of arr) {
  console.log(item);
}

// iteratable must have a method at the key [Symbol.iterator] with no argument
// iterator protocl : have a next() method return an object with two properties: value and done
const myit = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step < 5) {
          return {
            value: `step=${step}`,
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
    return iterator;
  },
};

for (const item of myit) {
  console.log(item);
}
