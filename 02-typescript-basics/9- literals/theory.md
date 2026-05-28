# Literal Types

Literal types restrict a value to exact allowed values.

```ts
let direction: "up" | "down";
direction = "up";
```

Literal types are useful for:

- status values
- configuration options
- event names
- roles
- modes

Use `as const` when you want TypeScript to preserve exact values instead of widening them to general types.
