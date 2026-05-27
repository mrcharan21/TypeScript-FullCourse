// Example 1: for loop
for (let i = 1; i <= 3; i++) {
  console.log(`Round ${i}`);
}

// Example 2: while loop
let tries = 0;
while (tries < 3) {
  tries++;
  console.log(`Try ${tries}`);
}

// Example 3: for...of
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// Example 4: for...in
const user = { name: "Neha", city: "Pune" };
for (const key in user) {
  console.log(key);
}

// Example 5: forEach
const scores = [10, 20, 30];
scores.forEach((score) => console.log(score));

// Example 6: print cart items one by one
const cartItems = ["mouse", "keyboard", "monitor"];
for (const item of cartItems) {
  console.log(`Packed item: ${item}`);
}

// Example 7: calculate total marks
const marksList = [70, 85, 90];
let marksTotal = 0;
for (const mark of marksList) {
  marksTotal += mark;
}
console.log(`Total marks: ${marksTotal}`);

// Example 8: stop when target is found
const names = ["Amit", "Sara", "John", "Pooja"];
for (const currentName of names) {
  if (currentName === "John") {
    console.log("John found");
    break;
  }
}

// Example 9: skip unavailable products
const products = [
  { name: "Bag", available: true },
  { name: "Shoes", available: false },
  { name: "Watch", available: true },
];
for (const currentProduct of products) {
  if (!currentProduct.available) {
    continue;
  }
  console.log(`Showing ${currentProduct.name}`);
}

// Example 10: countdown timer
let seconds = 5;
while (seconds > 0) {
  console.log(`${seconds} seconds left`);
  seconds--;
}
