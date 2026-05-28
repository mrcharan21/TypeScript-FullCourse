// 1. string formatting
const studentName: string = "Ravi";
console.log(`Hello, ${studentName.toUpperCase()}`);

// 2. number calculation
const price: number = 499;
const tax: number = price * 0.18;
console.log(price + tax);

// 3. boolean condition
const hasTicket: boolean = true;
console.log(hasTicket ? "Entry allowed" : "Buy a ticket");

// 4. bigint for large ids
const orderId: bigint = 9007199254740993n;
console.log(orderId + 7n);

// 5. symbol uniqueness
const keyA: symbol = Symbol("id");
const keyB: symbol = Symbol("id");
console.log(keyA === keyB);

// 6. null as intentional empty value
let selectedUser: string | null = null;
selectedUser = "Meera";
console.log(selectedUser);

// 7. undefined before assignment
let discountCode: string | undefined;
console.log(discountCode ?? "No discount");

// 8. number comparison
const marks: number = 82;
console.log(marks >= 40);

// 9. string length logic
const password: string = "tsMaster";
console.log(password.length >= 8 ? "Strong enough" : "Too short");

// 10. boolean toggle
let isDarkMode: boolean = false;
isDarkMode = !isDarkMode;
console.log(isDarkMode);
