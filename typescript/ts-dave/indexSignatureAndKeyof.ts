// index signature - when you don't know the name of the object keys - but you know type of key and value

// access object property dynamically

// interface TranscationObject {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// index signature
interface TransactionObject {
  [index: string]: number;
}

const tran: TransactionObject = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(tran.Pizza);
console.log(tran["Pizza"]);

let prop: string = "Pizza";
console.log(tran[prop]);

const todayNet = (transactions: TransactionObject): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

//------------------------------ matt
// https://www.youtube.com/watch?v=plsnFfbqVEo

// type aliases with indexed access types
interface ColorVariants {
  primary: "blue";
  secondary: "red";
  tertiary: "green";
}

type PrimaryColor = ColorVariants["primary"];
type NonPrimaryColor = ColorVariants["secondary" | "tertiary"];
type EveryColor = ColorVariants[keyof ColorVariants];

// tuple and indexed access types
type Letters = ["a", "b", "c"];
type AorB = Letters[0 | 1];
type Letter = Letters[number];
