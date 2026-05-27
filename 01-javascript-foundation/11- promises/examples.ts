// Example 1: resolved promise
Promise.resolve("Done").then((result) => console.log(result));

// Example 2: rejected promise
Promise.reject(new Error("Something failed")).catch((error) =>
  console.log(error.message),
);

// Example 3: custom promise
const wait = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Wait complete"), 500);
});
wait.then((message) => console.log(message));

// Example 4: Promise.all
Promise.all([Promise.resolve(10), Promise.resolve(20)]).then((values) =>
  console.log(values),
);

// Example 5: finally
Promise.resolve("Saved")
  .then((message) => console.log(message))
  .finally(() => console.log("Cleanup finished"));

// Example 6: fake login request
const loginRequest = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Login successful"), 300);
});
loginRequest.then((message) => console.log(message));

// Example 7: fake payment failure
const paymentRequest = new Promise<string>((_resolve, reject) => {
  setTimeout(() => reject(new Error("Payment declined")), 300);
});
paymentRequest.catch((error) => console.log(error.message));

// Example 8: get the fastest server response
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Server A"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Server B"), 200)),
]).then((server) => console.log(server));

// Example 9: handle success and failure together
const inventoryCheck = Promise.resolve("Item available");
inventoryCheck
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));

// Example 10: chain steps in order
Promise.resolve(100)
  .then((amount) => amount + 50)
  .then((amount) => amount - 20)
  .then((finalAmount) => console.log(finalAmount));
