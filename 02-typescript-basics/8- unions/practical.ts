// 1. basic union
let userId: number | string = 101;
userId = "USR-101";
console.log(userId);

// 2. typeof narrowing
function printId(id: number | string): void {
  if (typeof id === "number") {
    console.log(id.toFixed(0));
  } else {
    console.log(id.toUpperCase());
  }
}
printId("abc");

// 3. union with null
let selectedProduct: string | null = null;
selectedProduct = "Laptop";
console.log(selectedProduct);

// 4. array union
const mixedIds: (number | string)[] = [1, "A2", 3];
console.log(mixedIds);

// 5. literal union
type Size = "small" | "medium" | "large";
const shirtSize: Size = "medium";
console.log(shirtSize);

// 6. object union with in check
type EmailUser = { email: string };
type PhoneUser = { phone: string };
function contact(user: EmailUser | PhoneUser): string {
  return "email" in user ? user.email : user.phone;
}
console.log(contact({ phone: "9999999999" }));

// 7. discriminated union
type ApiResult =
  | { status: "success"; data: string }
  | { status: "error"; error: string };
function readResult(result: ApiResult): string {
  return result.status === "success" ? result.data : result.error;
}
console.log(readResult({ status: "success", data: "Loaded" }));

// 8. union return type
function findName(id: number): string | undefined {
  return id === 1 ? "Kiran" : undefined;
}
console.log(findName(2) ?? "Not found");

// 9. union with boolean
type ToggleValue = boolean | "auto";
const themeMode: ToggleValue = "auto";
console.log(themeMode);

// 10. narrowing arrays
function first(valueList: string[] | number[]): string | number {
  return valueList[0];
}
console.log(first([10, 20]));
