# Unions

Union types allow a value to be one of multiple types.

```ts
let id: number | string;
id = 101;
id = "A101";
```

When using a union, TypeScript asks you to narrow the value before using type-specific methods.

Common narrowing techniques:

- `typeof`
- `in`
- `Array.isArray`
- equality checks
- discriminated unions
