//add

const sum = function(a,b){
    return a + b;   
};

//subtract

const subtract = function(a,b){
    return a - b;
};

//multiply

const multiply = function(a,b){
    return a * b;
};
//divide

const divide = function(a,b){
    return a / b;
};

let firstNumber = 0;
let operator = '';
let secondNumber = 0;

// takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = function(operator, a, b){
    switch(operator){
        case '+':
        return sum(a,b);

        case '-':
        return subtract(a,b);

        case '*':
        return multiply(a,b);

        case '/':
        return divide(a,b);
        }};