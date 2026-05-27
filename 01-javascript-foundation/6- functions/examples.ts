// Example 1: function declaration
function greet(name: string) {
  return `Hello, ${name}`;
}
console.log(greet("Kiran"));

// Example 2: function expression
const add = function (a: number, b: number) {
  return a + b;
};
console.log(add(4, 6));

// Example 3: arrow function
const multiply = (a: number, b: number) => a * b;
console.log(multiply(3, 5));

// Example 4: default parameter
function welcome(name = "Guest") {
  return `Welcome, ${name}`;
}
console.log(welcome());

// Example 5: function with array
function getFirstItem(items: string[]) {
  return items[0];
}
console.log(getFirstItem(["pen", "book"]));

// Example 6: calculate bill after discount
function calculateFinalBill(amount: number, discountAmount: number) {
  return amount - discountAmount;
}
console.log(calculateFinalBill(1200, 150));

// Example 7: check if a user is adult
function isAdult(userAge: number) {
  return userAge >= 18;
}
console.log(isAdult(21));

// Example 8: format a full name
function getFullName(first: string, last: string) {
  return `${first} ${last}`;
}
console.log(getFullName("Rahul", "Sharma"));

// Example 9: reusable tax calculator
function calculateTax(priceAmount: number, taxPercent: number) {
  return priceAmount + (priceAmount * taxPercent) / 100;
}
console.log(calculateTax(1000, 18));

// Example 10: send message only when text exists
function sendMessage(messageText: string) {
  if (!messageText) {
    return "Message cannot be empty";
  }
  return `Sent: ${messageText}`;
}
console.log(sendMessage("Hello team"));
