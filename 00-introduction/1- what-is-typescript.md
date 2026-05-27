1. What is TypeScript?

TypeScript is an open-source programming language developed by Microsoft. It is a strict syntactical superset of JavaScript.
It adds optional static typing to the language, which allows developers to catch bugs early during development.

Key Features:

1. Static Typing: You can define the types of variables, function parameters, and return values. This allows the TypeScript compiler to catch type-related errors at compile-time rather than at runtime.

2. Better IDE Support: Because the code is strictly typed, code editors and IDEs can provide much better autocompletion, code navigation, and refactoring tools.

3. Advanced Features: It introduces features from classical object-oriented programming that don't exist (or are less strict) in native JavaScript, such as Interfaces, Enums, Generics, and access modifiers (public, private, protected).

4. Compilation: Browsers and Node.js cannot run TypeScript natively. TypeScript code is transpiled (compiled) down into plain JavaScript so it can be executed anywhere JavaScript runs.


// Defining an interface to strictly shape our data
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Creating a function that expects a 'User' object
function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

// This will work perfectly
const validUser: User = { id: 1, name: "Alice", isActive: true };
console.log(greetUser(validUser));

// TypeScript will throw an error here during development!
// Error: Object literal may only specify known properties, and 'isOnline' does not exist in type 'User'.
const invalidUser = { id: 2, name: "Bob", isOnline: true };
console.log(greetUser(invalidUser)); 
