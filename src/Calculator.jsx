import { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculateResult from "./CalculateResult";
// importing the form and display components, as well as the logic/results function.

function Calculator() {

  const [formData, setFormData] = useState({
    firstNumber: "",
    secondNumber: "",
    operator: "+",
    // Setting the initial state with its three default state values.
  });

  const [displayNumber, setDisplayNumber] = useState("");
  // Initialised state with no value for the display component.

  const handleSubmit = (e) => {

    e.preventDefault();
    
    const { firstNumber, secondNumber, operator } = formData;
    // Destructuring the variables extracted from the formData which are needed for the calculator function.

    const result = CalculateResult(
      parseFloat(firstNumber),
      parseFloat(secondNumber),
      operator
    ); /* Using the imported function to parse the two inputs from the form as floats rather than strings,
         and uses the chosen operator from the form for the switch-statement. */

    setDisplayNumber(result.toString());
    // Update the display component to show the result of the operation.
  };

  return (
    <>
       <CalculatorDisplay displayNumber={displayNumber} />
      <CalculatorForm
        formData={formData}
        onFormChange={setFormData}
        onSubmit={handleSubmit}
      />

    </>
  );
}

export default Calculator;
