import { useState } from "react";

const StringCalculator = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputField = (e) => {
    setInput(e.target.value);
  };

  const addFn = () => {
    let inputPart = input.replace(/\\n/g, "\n");
    let delimiter = /,|\n/;
    const customDelimiterMatch = inputPart.match(/^\/\/(.)(?:\n)?/);

    if (customDelimiterMatch) {
      delimiter = new RegExp(`\\${customDelimiterMatch[1]}`);
      inputPart = inputPart.replace(/^\/\/(.)(?:\n)?/, "");
    }

    const splitNum = customDelimiterMatch
      ? inputPart.split(delimiter)
      : inputPart.split(/,|\n|\\n/);

    const negativeNum = splitNum.filter((num) => Number(num) < 0);
    if (negativeNum.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNum}`);
    }

    return splitNum.reduce((acc, curr) => Number(acc) + Number(curr), 0);
  };

  const handleCalculate = () => {
    try {
      const value = addFn();
      setResult(value);
      setError("");
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default StringCalculator;
