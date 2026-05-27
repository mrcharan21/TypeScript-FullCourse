```javascript
Why TypeScript?

TypeScript exists to make JavaScript safer, easier to maintain, and scalable for large applications.

The Core Problem With JavaScript

JavaScript is dynamically typed.

That means variables can change type anytime.

Example:

let age = 20

age = "hello"

JavaScript allows this.

This can create bugs.

Real Problem Example
function add(a, b) {
return a + b
}

console.log(add(10, 20))
console.log(add("10", 20))

Output:

30
1020

Why?

Because JavaScript automatically converts values.

This causes:

unexpected behavior
hidden bugs
runtime errors
TypeScript Fixes This

TypeScript adds type checking.

function add(a: number, b: number): number {
return a + b
}

add("10", 20)

TypeScript error:

Argument of type 'string' is not assignable to parameter of type 'number'

Bug caught BEFORE running code.

Main Reasons TypeScript Exists

1. Catch Errors Early

JavaScript catches many bugs at runtime.

TypeScript catches them while coding.

Example:

let username: string = "John"

username = 123

Error immediately.

2. Better Autocomplete

TypeScript understands types.

Example:

const user = {
name: "John",
age: 20
}

VS Code now knows:

user.name
user.age

You get:

autocomplete
suggestions
documentation 3. Easier Refactoring

Large projects change often.

Without types:

renaming things becomes dangerous

With TypeScript:

IDE helps safely refactor code 4. Makes Large Applications Manageable

JavaScript becomes hard in:

big teams
huge codebases
enterprise apps

TypeScript provides:

structure
contracts
predictable code 5. Self-Documenting Code

This:

function createUser(
name: string,
age: number
) {}

Already explains:

what inputs are expected
what types are required

Less confusion.

6. Prevents Common JavaScript Mistakes

Example:

const user = null

console.log(user.name)

Runtime crash.

TypeScript warns before execution.

7. Better Team Collaboration

In teams:

developers understand APIs faster
fewer misunderstandings
safer shared code 8. Modern JavaScript Features

TypeScript supports:

latest ECMAScript features
older browser compatibility

```

Example:
//TypeScript code with type annotations for a User object and usage of its properties:
// type User = {
//   name: string
//   age: number
// }

// const user: User = {
//   name: "John",
//   age: 20
// }

// console.log(user.age.toFixed(2))
// console.log(user.age);
// console.log(user.name.toUpperCase())
