function add(num1, num2) {
  return num1 + num2;
}

function multply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}
 


function calculate(num1, num2, operator){
    return operator(num1 , num2);
    }

console.log(calculate(3,5,multply));