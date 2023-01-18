//business logic 
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

//user interface logic 
const number1 = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter another number: "));



const addition = window.alert("The addition of the numbers equals: " + add(number1, number2) + 
" The subtraction of the numbers equals: " + subtract(number1, number2) 
+ "  The multiplication of the numbers equals: " + multiply(number1, number2) + 
" The division of the numbers equals: " + divide(number1, number2)); 

//window.alert("The subtraction of the numbers equals: " + subtract(number1, number2));

//window.alert("The multiplication of the numbers equals: " + multiply(number1, number2));

// window.alert("The division of the numbers equals: " + divide(number1, number2));
