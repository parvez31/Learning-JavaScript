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
