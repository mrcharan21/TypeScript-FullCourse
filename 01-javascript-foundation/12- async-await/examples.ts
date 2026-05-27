// Example 1: basic async function
async function getMessage() {
  return "Hello from async";
}
getMessage().then((message) => console.log(message));

// Example 2: await a promise
async function loadUser() {
  const user = await Promise.resolve({ id: 1, name: "Dev" });
  console.log(user);
}
loadUser();

// Example 3: try catch
async function saveData() {
  try {
    await Promise.reject(new Error("Save failed"));
  } catch (error) {
    console.log((error as Error).message);
  }
}
saveData();

// Example 4: sequential awaits
async function sequentialTasks() {
  const first = await Promise.resolve("First");
  const second = await Promise.resolve("Second");
  console.log(first, second);
}
sequentialTasks();

// Example 5: parallel awaits
async function parallelTasks() {
  const [users, posts] = await Promise.all([
    Promise.resolve(["Asha", "Rohan"]),
    Promise.resolve(["Post 1", "Post 2"]),
  ]);
  console.log(users, posts);
}
parallelTasks();

// Example 6: fake product loading
async function loadProducts() {
  const products = await Promise.resolve(["Phone", "Laptop", "Tablet"]);
  console.log(products);
}
loadProducts();

// Example 7: fake checkout flow
async function checkout() {
  const cartValid = await Promise.resolve(true);
  if (!cartValid) {
    return "Cart is not valid";
  }
  return "Order placed";
}
checkout().then((message) => console.log(message));

// Example 8: handle failed API call
async function loadDashboard() {
  try {
    await Promise.reject(new Error("Dashboard API failed"));
  } catch (error) {
    console.log(`Error: ${(error as Error).message}`);
  }
}
loadDashboard();

// Example 9: wait before sending OTP
async function sendOtp() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.log("OTP sent");
}
sendOtp();

// Example 10: load profile and orders together
async function loadAccountPage() {
  const [profile, orders] = await Promise.all([
    Promise.resolve({ name: "Sneha" }),
    Promise.resolve(["Order 1", "Order 2"]),
  ]);
  console.log(profile, orders);
}
loadAccountPage();
