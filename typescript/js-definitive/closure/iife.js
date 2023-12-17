/**
 * Immediately Invoked Function Expression
 */

const privateCounter = (() => {
  let count = 0;
  console.log(`init count = ${count}`);
  return () => {
    count += 1;
    console.log(`increase count = ${count} `);
  };
})();

privateCounter();
privateCounter();
privateCounter();
