import "./calculator.css";

function Calculator({ onChangeProps, userInput }) {
  return (
    <div action="" id="user-input">
      <div className="input-group">
        <p>
          <label>Inisial :</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChangeProps("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>annual investment :</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onChangeProps("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expexted</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onChangeProps("expextedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onChangeProps("duration", e.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default Calculator;
