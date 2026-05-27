// Example 1: arithmetic
const price = 100;
const tax = 18;
console.log(price + tax);

// Example 2: assignment
let points = 10;
points += 5;
console.log(points);

// Example 3: comparison
const hasPassed = 75 >= 40;
console.log(hasPassed);

// Example 4: logical
const hasEmail = true;
const hasPassword = true;
console.log(hasEmail && hasPassword);

// Example 5: ternary
const age = 19;
const access = age >= 18 ? "Allowed" : "Denied";
console.log(access);

// Example 6: calculate discount price
const originalPrice = 2000;
const discount = 300;
const finalPrice = originalPrice - discount;
console.log(`Final price: ${finalPrice}`);

// Example 7: check if user can login
const enteredOtp = "1234";
const correctOtp = "1234";
console.log(enteredOtp === correctOtp);

// Example 8: check free delivery eligibility
const orderAmount = 799;
const hasFreeDelivery = orderAmount >= 500;
console.log(`Free delivery: ${hasFreeDelivery}`);

// Example 9: combine conditions for exam result
const attendance = 85;
const examScore = 72;
const canPass = attendance >= 75 && examScore >= 40;
console.log(`Can pass: ${canPass}`);

// Example 10: choose default username
const typedName = "";
const displayName = typedName || "Guest";
console.log(displayName);
