# Type Inference

Type inference means TypeScript guesses a type from the assigned value.

```ts
const name = "Isha"; // string
const age = 25; // number
const active = true; // boolean
```

Inference keeps code shorter while still giving type safety. Add explicit types when:

- A variable starts empty.
- A function return type should be documented.
- A value can hold more than one type.
- The inferred type is too narrow or too broad.
