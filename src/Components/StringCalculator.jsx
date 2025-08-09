import { useState } from "react";

const StringCalculator = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");

  const handleInputField = (e) => {
    setInput(e.target.value);
  };

  const addFn = () => {
    const splitNum = input.split(/,|\n|\\n/);
    return splitNum.reduce((acc, curr) => Number(acc) + Number(curr), 0);
  };

  const handleCalculate = () => {
    const value = addFn();
    setResult(value);
  };

  return (
    <div>
      <textarea
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
