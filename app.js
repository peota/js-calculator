const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keys");
const display = calculator.querySelector(".display");

// on clicking on a button
keys.addEventListener("click", (e) => {
  const key = e.target; // get clicked number
  const action = key.dataset.action; // grab data action

  // case it's number
  if (!action) {
    display.textContent = e.target.textContent;
  }

  // case it's an operator
  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    console.log("operator key!");
  }

  if (action === "decimal") {
    console.log("decimal key!");
  }

  if (action === "clear") {
    console.log("clear key!");
  }

  if (action === "equal") {
    console.log("equal key!");
  }
});
