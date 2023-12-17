// lodash , ramda have the feature for deep copy

const scores = { first: 11, second: 22, third: { a: 1, b: 2 } };

// only working with simple situation
const newScoresObj = JSON.parse(JSON.stringify(scores));

//
const deepClone = (obj) => {
  if (typeof obj != "object" || obj === null) return obj;

  // create an array or object to hold the value
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // recurive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }

  return newObject;
};

const newScores = deepClone(scores);
console.log(scores === newScores);
console.log(scores.third === newScores.third);
