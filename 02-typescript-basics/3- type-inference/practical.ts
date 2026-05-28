// 1. string inference
const course = "TypeScript";
console.log(course.toUpperCase());

// 2. number inference
const chapters = 20;
console.log(chapters * 2);

// 3. boolean inference
const isPublished = true;
console.log(isPublished ? "Live" : "Draft");

// 4. array inference
const numbers = [1, 2, 3];
console.log(numbers.reduce((sum, n) => sum + n, 0));

// 5. object inference
const user = { id: 1, name: "Kabir" };
console.log(user.name);

// 6. function return inference
function square(value: number) {
  return value * value;
}
console.log(square(6));

// 7. explicit type for empty array
const names: string[] = [];
names.push("Neha");
console.log(names);

// 8. union when value can change type
let input: string | number = "42";
input = 42;
console.log(input);

// 9. literal inference with const
const role = "admin";
console.log(role);

// 10. widened inference with let
let level = "beginner";
level = "advanced";
console.log(level);
