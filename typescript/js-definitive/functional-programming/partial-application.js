// partial application - first apply one parameter, second time apply the rest parameter
// currying - apply one parameter each time

function taxCalculator(taxRate, amount) {
  console.log(` tax rate = ${taxRate}, amount=${amount}`);
  return (taxRate / 100) * amount;
}

const calculateFederalTax = taxCalculator.bind(null, 5);
const calculateProvinceTax = taxCalculator.bind(null, 10);

let amount = 100;
let federalTax = calculateFederalTax(amount);
let provinceTax = calculateProvinceTax(amount);

console.log(
  `amount = ${amount}, tax federal = ${federalTax}, province = ${provinceTax}`
);
