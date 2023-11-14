const weekDays = ["sun", "Mon", "Thu", "Fri", "sat"];
const openingHours = {
  [weekDays[0]]: {
    open: 11,
    close: 8,
  },
  [weekDays[2]]: {
    open: 12,
    close: 6,
  },
  [weekDays[weekDays.length - 1]]: {
    open: 0,
    close: 5,
  },
};

const restaurant = {
  name: "Basirhat Restaurnat",
  place: "Basirhat Dhaba",
  catagories: ["Pizza", "Pasta", "Cock"],
  mainIndex: ["alu", "kopi", "tomato"],
  openingHours,
  orderPizza(catagories, mainIndex) {
    console.log(mainIndex);
    console.log(catagories);

    // console.log(mainIndex);
  },
};

/*
console.log(restaurant.openingHours?.mon?.open);

const days = ["sun", "Mon", "Thu", "Fri", "sat"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open || "closed";
  console.log(`We open ${day} at ${open}`);
}

//* Method

console.log(restaurant.orderPizza?.(0, 1) ?? "this method does not exist");
*/

/*
const properties = Object.keys(openingHours);
let openStart = `We are open ${properties.length} days: `;
for (const day of properties) {
  openStart = openStart + `${day} ,`;
}
console.log(openStart);

const proValue = Object.entries(openingHours);
// console.log(proValue);

for (const [day, { open, close }] of proValue) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

const staff = ["manager", "waiter", "chef", "waiter", "chef"];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
*/

const rest = new Map();

//*! set method
rest
  .set("Name", "classico Italiano")
  .set(1, "Firenze , Italy")
  .set(2, "Lisbon , Portugal")
  .set("Catagories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("Open", 11)
  .set("Close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

//*! get method
console.log(rest.get("Name"));

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);
// console.log(openingHours);

console.log(Object.entries(openingHours));
const allHours = new Map(Object.entries(openingHours));
console.log(allHours);

// quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}
const answer = Number(prompt("Put your answer"));
console.log(answer);

console.log(question.get(question.get("Correct") === answer));

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
