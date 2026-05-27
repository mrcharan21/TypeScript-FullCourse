// Example 1: basic object
const product = { name: "Laptop", price: 55000 };
console.log(product.name);

// Example 2: update property
product.price = 52000;
console.log(product.price);

// Example 3: bracket notation
const key = "name";
console.log(product[key]);

// Example 4: nested object
const order = {
  id: 101,
  customer: { name: "Anaya", city: "Delhi" },
};
console.log(order.customer.city);

// Example 5: method
const cart = {
  items: 3,
  summary() {
    return `${this.items} items in cart`;
  },
};
console.log(cart.summary());

// Example 6: update user profile
const userProfile = {
  name: "Arjun",
  city: "Mumbai",
};
userProfile.city = "Bengaluru";
console.log(userProfile);

// Example 7: check property before using it
const laptop = {
  brand: "Lenovo",
  ram: "16GB",
};
if ("ram" in laptop) {
  console.log(`RAM: ${laptop.ram}`);
}

// Example 8: get all object keys
const invoice = {
  id: 501,
  amount: 2500,
  paid: false,
};
console.log(Object.keys(invoice));

// Example 9: copy object and change one value
const oldSettings = { theme: "light", fontSize: 14 };
const newSettings = { ...oldSettings, theme: "dark" };
console.log(newSettings);

// Example 10: object inside array
const employees = [
  { name: "Nisha", department: "HR" },
  { name: "Varun", department: "IT" },
];
console.log(employees[1].department);
