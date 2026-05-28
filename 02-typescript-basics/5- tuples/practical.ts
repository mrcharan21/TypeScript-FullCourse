// 1. id and name tuple
const student: [number, string] = [101, "Riya"];
console.log(student);

// 2. coordinate tuple
const point: [number, number] = [12, 8];
console.log(point[0] + point[1]);

// 3. response tuple
const response: [number, string, boolean] = [200, "Success", true];
console.log(response);

// 4. tuple destructuring
const [studentId, studentLabel] = student;
console.log(`${studentId}: ${studentLabel}`);

// 5. readonly tuple
const rgb: readonly [number, number, number] = [255, 180, 0];
console.log(rgb);

// 6. optional tuple item
const userLocation: [string, string?] = ["Delhi"];
console.log(userLocation);

// 7. tuple in function return
function divide(a: number, b: number): [number, number] {
  return [Math.floor(a / b), a % b];
}
console.log(divide(17, 5));

// 8. tuple array
const entries: [string, number][] = [
  ["apples", 4],
  ["oranges", 6],
];
console.log(entries);

// 9. labeled tuple
type PageRange = [start: number, end: number];
const pageRange: PageRange = [1, 10];
console.log(pageRange);

// 10. rest tuple
type Command = [name: string, ...flags: string[]];
const buildCommand: Command = ["build", "--watch", "--prod"];
console.log(buildCommand);
