// https://ogzhanolguncu.com/blog/function-composition-javascript

// compose function uses the output of the functions as input for the next function.

const books = [
  {
    id: 1,
    name: "Alice's Adventures in Wonderland",
    completed: false,
  },
  {
    id: 2,
    name: "The Fellowship of the Ring",
    completed: true,
  },
  {
    id: 3,
    name: "The Return of the King",
    completed: false,
  },
  {
    id: 4,
    name: "The Golden Compass",
    completed: true,
  },
  {
    id: 5,
    name: "1984",
    completed: false,
  },
];

// find completed book
//-----------1. regular filter and map
const completedBookTitles = books
  .filter((b) => b.completed)
  .map((value) => value.name);
console.log("result1=", completedBookTitles);

//---------2. composition  - right to left , work with reduceRight
const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((acc, fn) => fn(acc), val); // val - is the previsous value passed as argument

const completedBooksFn = (books) => books.filter((book) => book.completed);
const bookNamesFn = (books) => books.map((book) => book.name);

const completedBookNames = compose(bookNamesFn, completedBooksFn);
const result2 = completedBookNames(books);
console.log("result2=", result2);

// ---------3. pipe - left to right , work with reduce
const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((acc, fn) => fn(acc), val);
let result3 = pipe(completedBooksFn, bookNamesFn)(books);
console.log("result3=", result3);

//---------
