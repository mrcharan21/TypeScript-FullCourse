// Example 1: array destructuring
const coordinates = [10, 20];
const [x, y] = coordinates;
console.log(x, y);

// Example 2: object destructuring
const profile = { name: "Isha", skill: "TypeScript" };
const { name, skill } = profile;
console.log(name, skill);

// Example 3: rename property
const course = { title: "JavaScript", level: "Beginner" };
const { title: courseTitle } = course;
console.log(courseTitle);

// Example 4: default value
const settings = { theme: "dark" };
const { theme, language = "en" } = settings;
console.log(theme, language);

// Example 5: function parameter destructuring
function printUser({ id, email }: { id: number; email: string }) {
  console.log(id, email);
}
printUser({ id: 1, email: "user@example.com" });

// Example 6: get first and second cart items
const cartProducts = ["phone", "charger", "cover"];
const [firstProduct, secondProduct] = cartProducts;
console.log(firstProduct, secondProduct);

// Example 7: skip unwanted array value
const rgb = [255, 120, 80];
const [red, , blue] = rgb;
console.log(red, blue);

// Example 8: collect remaining values
const queue = ["Amit", "Sara", "John", "Pooja"];
const [nextCustomer, ...waitingCustomers] = queue;
console.log(nextCustomer, waitingCustomers);

// Example 9: nested object destructuring
const booking = {
  bookingId: 77,
  guest: { guestName: "Riya", room: 204 },
};
const {
  guest: { guestName, room },
} = booking;
console.log(guestName, room);

// Example 10: destructuring API-like response
const response = {
  status: 200,
  data: { totalUsers: 45 },
};
const {
  data: { totalUsers },
} = response;
console.log(totalUsers);
