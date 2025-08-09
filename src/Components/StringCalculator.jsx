const StringCalculator = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="enter numbers"
        data-testid="input-field"
        name="input"
      />
      <br /> <br />
      <button type="button">Calculate</button>
    </div>
  );
};

export default StringCalculator;
