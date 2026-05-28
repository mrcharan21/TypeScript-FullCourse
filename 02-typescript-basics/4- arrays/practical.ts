// 1. number array
const marksList: number[] = [88, 76, 95];
console.log(marksList);

// 2. string array
const fruits: string[] = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);

// 3. Array<T> syntax
const pricesList: Array<number> = [100, 250, 80];
console.log(pricesList.length);

// 4. map logic
const doubled: number[] = marksList.map((mark) => mark * 2);
console.log(doubled);

// 5. filter logic
const passingMarks: number[] = marksList.filter((mark) => mark >= 80);
console.log(passingMarks);

// 6. reduce logic
const totalMarks: number = marksList.reduce((sum, mark) => sum + mark, 0);
console.log(totalMarks);

// 7. find logic
const firstExpensive = pricesList.find((priceItem) => priceItem > 200);
console.log(firstExpensive);

// 8. readonly array
const weekdays: readonly string[] = ["Mon", "Tue", "Wed"];
console.log(weekdays[0]);

// 9. array of objects
const products: { name: string; stock: number }[] = [
  { name: "Pen", stock: 10 },
  { name: "Book", stock: 0 },
];
console.log(products.filter((product) => product.stock > 0));

// 10. nested array
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(matrix[1][0]);
