// 1. any allows anything
let flexible: any = "hello";
flexible = 123;
console.log(flexible);

// 2. unknown requires checking
let value: unknown = "TypeScript";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 3. unknown number check
const possibleNumber: unknown = 45;
if (typeof possibleNumber === "number") {
  console.log(possibleNumber + 5);
}

// 4. unknown array check
const possibleList: unknown = [1, 2, 3];
if (Array.isArray(possibleList)) {
  console.log(possibleList.length);
}

// 5. any can hide mistakes
const riskyUser: any = { name: "Aman" };
console.log(riskyUser.age);

// 6. safer unknown object check
const safeUser: unknown = { name: "Sara" };
if (
  typeof safeUser === "object" &&
  safeUser !== null &&
  "name" in safeUser
) {
  console.log(safeUser);
}

// 7. never for throwing function
function fail(message: string): never {
  throw new Error(message);
}

// 8. never with exhaustive switch
type Shape = "circle" | "square";
function area(shape: Shape): number {
  switch (shape) {
    case "circle":
      return 3.14;
    case "square":
      return 4;
    default: {
      const impossible: never = shape;
      return impossible;
    }
  }
}
console.log(area("circle"));

// 9. unknown from JSON
const parsedJson: unknown = JSON.parse('{"count":3}');
if (
  typeof parsedJson === "object" &&
  parsedJson !== null &&
  "count" in parsedJson
) {
  console.log(parsedJson);
}

// 10. any to unknown migration
const legacyValue: any = "45";
const saferValue: unknown = legacyValue;
if (typeof saferValue === "string") {
  console.log(Number(saferValue));
}
