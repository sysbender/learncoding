// autocompletion and code hints
// custom types
interface MenuItem {
  title: string;
  cost: number;
}

function printMenuItem(item: MenuItem) {
  console.log(item.title, ":", item.cost);
}

// printMenuItem();
printMenuItem({ title: "test", cost: 123 });

// object literal
let user: { first: string; age: number; id: number } = {
  first: "a",
  age: 12,
  id: 123,
};

// type inference with object literals
