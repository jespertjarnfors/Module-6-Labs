const CalculateResult = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case "+":
          return firstNumber + secondNumber;
        case "-":
          return firstNumber - secondNumber;
        case "*":
          return firstNumber * secondNumber;
        case "/":
          return firstNumber / secondNumber;
        default:
          return "Invalid operator";
      }
  };

  export default CalculateResult