# Variables

Variables store values. TypeScript supports the same variable keywords as JavaScript:

- `const` for values that should not be reassigned.
- `let` for values that can change.
- `var` is older and usually avoided because it has function scope.

TypeScript can infer variable types, but explicit annotations are useful when the expected type should be clear.

```ts
const appName: string = "Todo App";
let completedTasks: number = 0;
```

Prefer `const` by default. Use `let` only when the value needs to change.
