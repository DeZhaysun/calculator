const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, b, sign) {
  switch (sign) {
    case "+":
      return add(a, b);
    case "-":
      return minus(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const display = document.querySelector(".display");
let no1 = display.innerHTML;

function pressDigit(e) {
  display.innerHTML += e.key;
  no1 = parstInt(display.innerHTML);
}

const digits = document.querySelectorAll(".digit");
digits.forEach((key) => key.addEventListener("click", pressDigit));
