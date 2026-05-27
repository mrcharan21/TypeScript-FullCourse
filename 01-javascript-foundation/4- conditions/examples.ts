// Example 1: if
const temperature = 34;
if (temperature > 30) {
  console.log("Hot day");
}

// Example 2: if else
const isMember = false;
if (isMember) {
  console.log("Discount applied");
} else {
  console.log("Regular price");
}

// Example 3: else if
const marks = 82;
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else {
  console.log("Keep practicing");
}

// Example 4: switch
const role = "admin";
switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("Guest access");
}

// Example 5: truthy check
const searchText = "typescript";
if (searchText) {
  console.log("Searching...");
}

// Example 6: decide delivery charge
const billAmount = 450;
if (billAmount >= 500) {
  console.log("Free delivery");
} else {
  console.log("Delivery charge added");
}

// Example 7: check traffic signal
const signal = "green";
if (signal === "red") {
  console.log("Stop");
} else if (signal === "yellow") {
  console.log("Get ready");
} else {
  console.log("Go");
}

// Example 8: validate username length
const username = "dev";
if (username.length < 4) {
  console.log("Username is too short");
} else {
  console.log("Username accepted");
}

// Example 9: decide account access
const accountActive = true;
const accountBlocked = false;
if (accountActive && !accountBlocked) {
  console.log("Account access allowed");
} else {
  console.log("Account access denied");
}

// Example 10: choose meal based on time
const hour = 14;
if (hour < 12) {
  console.log("Breakfast time");
} else if (hour < 17) {
  console.log("Lunch time");
} else {
  console.log("Dinner time");
}
