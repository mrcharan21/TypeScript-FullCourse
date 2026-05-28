# Any, Unknown, And Never

These special types are useful in different situations:

- `any` disables type checking for a value. Use it rarely.
- `unknown` accepts any value, but forces you to check the type before using it.
- `never` represents a value that should never exist.

```ts
let risky: any = "hello";
let safe: unknown = "hello";

if (typeof safe === "string") {
  console.log(safe.toUpperCase());
}
```

Prefer `unknown` over `any` when working with uncertain data.
