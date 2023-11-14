//
// forEach with Maps and Sets

//Example
const currencies = new Map([
  ["USD", "United State Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Sterling"],
]);

currencies.forEach((value, key) => {
  console.log(`${key}:${value}`);
});

//Example

const currenciesUnique = new Set(["USD", "GBP", "EUR"]);

currenciesUnique.forEach((val) => console.log(`${val}`));
// there is no key in set.
