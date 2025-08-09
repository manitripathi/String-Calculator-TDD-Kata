import { useState } from "react";

const StringCalculator = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");

  const handleInputField = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    setResult(Number(input));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter numbers"
        data-testid="input-field"
        name="input"
        value={input}
        onChange={handleInputField}
      />
      <br /> <br />
      <button type="button" onClick={handleCalculate}>
        Calculate
      </button>
      <p data-testid="result">{result}</p>
    </div>
  );
};

export default StringCalculator;
