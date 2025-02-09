const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay(value) {
  display.textContent = value;
}

numberButtons.forEach(button => {
  button.onclick = () => {
    currentInput += button.textContent;
    updateDisplay(currentInput);
  };
});

operatorButtons.forEach(button => {
  button.onclick = () => {
    if (currentInput === '') return; 
    if (previousInput !== '') calculate();
    operator = button.textContent;
    previousInput = currentInput;
    currentInput = '';
  };
});

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay(currentInput);
}

equalsButton.onclick = () => {
  if (currentInput === '' || previousInput === '') return;
  calculate();
};

clearButton.onclick = () => {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('0');
};
