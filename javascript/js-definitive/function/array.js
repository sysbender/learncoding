function regularFunction() {
  console.log(arguments); // Outputs the arguments passed to the function
}

regularFunction(1, 2, 3);

const arrowFunction = () => {
  // Error: 'arguments' is not defined
  console.log(arguments);
};

arrowFunction(4, 5, 6);

function wrapperFunction() {
  const arrowFunctionInside = () => {
    console.log(arguments); // Outputs the arguments from wrapperFunction
  };

  arrowFunctionInside(7, 8, 9);
}

wrapperFunction(10, 11, 12);
