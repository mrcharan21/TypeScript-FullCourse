// 1. const cannot be reassigned
const appTitle: string = "Expense Tracker";
console.log(appTitle);

// 2. let can be updated
let score: number = 10;
score += 5;
console.log(score);

// 3. variable with inferred type
const city = "Pune";
console.log(city.toLowerCase());

// 4. explicit variable type
let loginCount: number = 0;
loginCount++;
console.log(loginCount);

// 5. block scope with let
if (true) {
  let message: string = "Inside block";
  console.log(message);
}

// 6. multiple variables
const firstName: string = "Anaya";
const lastName: string = "Sharma";
console.log(`${firstName} ${lastName}`);

// 7. changing state
let cartTotal: number = 1200;
cartTotal -= 200;
console.log(cartTotal);

// 8. variable from expression
const average: number = (80 + 90 + 70) / 3;
console.log(average);

// 9. boolean variable update
let isLoggedIn: boolean = false;
isLoggedIn = true;
console.log(isLoggedIn);

// 10. variable with union for changing shape
let statusCode: number | string = 200;
statusCode = "OK";
console.log(statusCode);
