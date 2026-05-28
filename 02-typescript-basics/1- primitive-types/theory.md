# Primitive Types

TypeScript primitive types describe simple values:

- `string` stores text.
- `number` stores integers and decimals.
- `boolean` stores `true` or `false`.
- `bigint` stores very large whole numbers.
- `symbol` creates unique identifiers.
- `null` means an intentional empty value.
- `undefined` means a value has not been assigned.

Primitive type annotations help TypeScript catch wrong assignments before the code runs.

```ts
let userName: string = "Asha";
let age: number = 21;
let isActive: boolean = true;
```

Use primitive types when a variable should hold one simple kind of data.
