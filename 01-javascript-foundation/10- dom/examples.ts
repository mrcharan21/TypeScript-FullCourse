// Example 1: select an element
const heading = document.querySelector("h1");
console.log(heading?.textContent);

// Example 2: change text
const title = document.querySelector("#title");
if (title) {
  title.textContent = "JavaScript DOM";
}

// Example 3: change style
const box = document.querySelector(".box") as HTMLElement | null;
if (box) {
  box.style.backgroundColor = "lightblue";
}

// Example 4: create an element
const paragraph = document.createElement("p");
paragraph.textContent = "Created with JavaScript";
document.body.appendChild(paragraph);

// Example 5: event listener
const button = document.querySelector("button");
button?.addEventListener("click", () => {
  console.log("Button clicked");
});

// Example 6: read value from an input
const nameInput = document.querySelector("#name") as HTMLInputElement | null;
if (nameInput) {
  console.log(`Typed name: ${nameInput.value}`);
}

// Example 7: show an error message
const errorBox = document.querySelector("#error");
if (errorBox) {
  errorBox.textContent = "Please enter a valid email";
}

// Example 8: add a new list item
const taskList = document.querySelector("#tasks");
const taskItem = document.createElement("li");
taskItem.textContent = "Practice TypeScript";
taskList?.appendChild(taskItem);

// Example 9: toggle a class on click
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
menuButton?.addEventListener("click", () => {
  menu?.classList.toggle("open");
});

// Example 10: disable submit button after click
const submitButton = document.querySelector("#submit") as HTMLButtonElement | null;
submitButton?.addEventListener("click", () => {
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
});
