// Example 1: const value
const courseName = "TypeScript Mastery";
console.log(courseName);

// Example 2: let value can change
let lessonNumber = 1;
lessonNumber = 2;
console.log(lessonNumber);

// Example 3: block scope
if (true) {
  const message = "Inside block";
  console.log(message);
}

// Example 4: update a counter
let count = 0;
count += 1;
count += 1;
console.log(count);

// Example 5: multiple variables
const firstName = "Aarav";
const age = 22;
console.log(`${firstName} is ${age} years old`);

// Example 6: shopping cart total
const itemPrice = 499;
let quantity = 2;
const cartTotal = itemPrice * quantity;
console.log(`Cart total is ${cartTotal}`);

// Example 7: wallet balance after spending
let walletBalance = 1000;
const teaPrice = 20;
walletBalance = walletBalance - teaPrice;
console.log(`Remaining balance: ${walletBalance}`);

// Example 8: changing user status
let userStatus = "offline";
userStatus = "online";
console.log(`User is now ${userStatus}`);

// Example 9: storing app settings
const appTheme = "dark";
const notificationsEnabled = true;
console.log(`Theme: ${appTheme}, Notifications: ${notificationsEnabled}`);

// Example 10: score update in a game
let playerScore = 0;
playerScore += 10;
playerScore += 5;
console.log(`Final score: ${playerScore}`);
