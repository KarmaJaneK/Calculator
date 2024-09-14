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

let firstNumber = "";
let operator = "";
let secondNumber = "";

// takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = function (operator, a, b) {
  a = Number(a);
  b = Number(b); //convert the strings to numbers
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

let displayValue = "";

const display = function (value) {
  displayValue = value;
  document.querySelector(".display").innerText = displayValue; // show the value on the display
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
      display(""); //clear the display
    } else if ( //if the value is an operator
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) { if (operator === ""){
        operator = value; //if the operator is empty, the value is the operator
    } else if (operator !== "" && firstNumber !== "" && secondNumber !== "") {
        //if the operator is not empty and the first and second number are not empty, calculate the result
        display(operate(operator, firstNumber, secondNumber));
        firstNumber = displayValue; //store the result in the first number
        secondNumber = ""; //clear the second number
        operator = value; //store the new operator
        } else {
            operator = value; 
        };
        
    } else if (value === "=") {
      //if the value is the equal button

      //if firstNumber is empty, display 0
      if (
        firstNumber === "" ||
        firstNumber === null ||
        firstNumber === undefined
      ) {
        display(0); // show the value on the display

        //if second number and operator is empty, display the first number
      } else if (
        (secondNumber === "" ||
        secondNumber === null ||
        secondNumber === undefined) 
        && (operator === "" ||
        operator === null ||
        operator === undefined)
      ) {
        display(firstNumber);

        //if only second number is empty, concatenate the first number with the operator
      } else if (
        secondNumber === "" ||
        secondNumber === null ||
        secondNumber === undefined
      ) {
        document.querySelector(".display").innerText = firstNumber + operator; 
      } else {
        display(operate(operator, firstNumber, secondNumber)); //update the display with the result
      }
    }
  });
});

//if there is a firstNumber, operator and secondNumber, if another operator is clicked, calculate the result and display it
