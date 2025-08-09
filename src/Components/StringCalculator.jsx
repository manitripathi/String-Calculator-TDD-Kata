import { useState } from "react";

const StringCalculator = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter numbers"
        data-testid="input-field"
        name="input"
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
