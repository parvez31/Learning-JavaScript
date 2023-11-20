//
// forEach with Maps and Sets

//Example
/*
const currencies = new Map([
  ["USD", "United State Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Sterling"],
]);

currencies.forEach((value, key) => {
  console.log(`${key}:${value}`);
});
*/
//Example

/*
const currenciesUnique = new Set(["USD", "GBP", "EUR"]);

currenciesUnique.forEach((val) => console.log(`${val}`));
// there is no key in set.

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (juliaD, kateD) {
  const julia = juliaD.slice();
  console.log(julia);
  julia.splice(0, 1);
  julia.splice(-2);
  console.log(julia);
  const juliaKate = julia.concat(kateD);
  console.log(juliaKate);

  juliaKate.forEach(function (age, i) {
    const elAge =
      age >= 3
        ? `Dog number ${i + 1} 
is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(elAge);
  });
};

checkDogs(dogsJulia, dogsKate);
*/

// Map

const arr = [5, 2, 3, 7, 8];

const double = function (x) {
  return x * 2;
};

const output = arr.map(double);

console.log(output);

// Another Example

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map((x) => x * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// Another Example

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1} : You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
