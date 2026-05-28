# Enums

Enums define named constants. They make code easier to read when a value must come from a fixed set.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

TypeScript supports:

- Numeric enums.
- String enums.
- Constant enum-like objects with `as const`.

String enums are often clearer because their runtime values are readable.
