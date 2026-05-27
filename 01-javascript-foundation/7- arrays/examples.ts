// Example 1: create and access
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);

// Example 2: push
fruits.push("orange");
console.log(fruits);

// Example 3: map
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// Example 4: filter
const adults = [12, 18, 25, 16].filter((age) => age >= 18);
console.log(adults);

// Example 5: reduce
const total = [10, 20, 30].reduce((sum, value) => sum + value, 0);
console.log(total);

// Example 6: find a product by name
const productNames = ["phone", "laptop", "tablet"];
const foundProduct = productNames.find((item) => item === "laptop");
console.log(foundProduct);

// Example 7: check if a role exists
const roles = ["admin", "editor", "viewer"];
console.log(roles.includes("admin"));

// Example 8: remove last notification
const notifications = ["New login", "Payment received", "Order shipped"];
const latestNotification = notifications.pop();
console.log(latestNotification, notifications);

// Example 9: sort prices from low to high
const prices = [999, 299, 1499, 499];
prices.sort((a, b) => a - b);
console.log(prices);

// Example 10: convert names to labels
const learners = ["isha", "rohan", "meera"];
const labels = learners.map((learner, index) => `${index + 1}. ${learner}`);
console.log(labels);
