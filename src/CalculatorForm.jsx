
function CalculatorForm({ formData, onFormChange, onSubmit }) {
    // formData contains the current form data in key:value pairs
    // onFormChange updates the form data based on user input
    // onSubmit is the final prop which handles form submission when users clicks "calculate"

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ ...formData, [name]: value });
  }; // Updates state to match the input field.

  return (
    <div className="calculatorForm formComponentBox">
      <form onSubmit={onSubmit}>
        <label className="calculatorFormItem">
          First Number:
          <input
            type="text"
            name="firstNumber"
            value={formData.firstNumber}
            onChange={handleChange}
            className="calculatorFormItem"
          />
        </label>
        <label className="calculatorFormItem">
          Second Number:
          <input
            type="text"
            name="secondNumber"
            value={formData.secondNumber}
            onChange={handleChange}
            className="calculatorFormItem"
          />
        </label>
        <div>
        <label className="calculatorFormItem">
          Operator:
          <select
            name="operator"
            value={formData.operator}
            onChange={handleChange}
            className="calculatorFormItem"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </label>
        
        <button className="calculatorFormItem">Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default CalculatorForm;
