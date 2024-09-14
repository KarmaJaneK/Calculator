//add

const sum = function (a, b) {
  return a + b;
};

//subtract

const subtract = function (a, b) {
  return a - b;
};

//multiply

const multiply = function (a, b) {
  return a * b;
};
//divide

const divide = function (a, b) {
  return a / b;
};
//store the first and second number and the operator

let firstNumber = '';
let operator = '';
let secondNumber = '';

// takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return sum(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
};

let displayValue = '';

const display = function(value) {
    displayValue = value;
    document.querySelector('.display').innerText = displayValue; // show the value on the display
};
document.querySelectorAll("button").forEach((button) => {
  //add event listener to all buttons
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (!isNaN(value)) {
      //if the value is a number
      if (operator === "") {
        //if the operator is empty, the value is the first number
        firstNumber += value;
        display(firstNumber);
      } else {
        secondNumber += value; //if the operator is not empty, the value is the second number
        display(secondNumber);
      }

    } else if (value === "C") {
        //if the value is the clear button
      displayValue = '';
      firstNumber = '';
      operator = '';
      secondNumber = '';

    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      //if the value is an operator
      operator = value;
    } else if (value === "=") {
      //if the value is the equal button
      display(operate(operator, firstNumber, secondNumber)); //update the display with the result
    }
  });
});
