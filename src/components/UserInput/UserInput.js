import React, { useState } from "react";

const initialUserInput = {
  currentSavings: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};

function UserInput(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  // const [currentSavings, setCurrentSavings] = useState("");
  // const [yearlyContribution, setYearlyContribution] = useState("");
  // const [expectedReturn, setExpectedReturn] = useState("");
  // const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Stop page reload
    props.onCalculate(userInput);
  };

  const handleReset = () => {
    setUserInput(initialUserInput);
    props.onCalculate(userInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <div className="input-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={userInput.currentSavings}
              onChange={(event) =>
                inputChangeHandler("currentSavings", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInput.yearlyContribution}
              onChange={(event) =>
                inputChangeHandler("yearlyContribution", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest (%)</label>
            <input
              type="number"
              id="expected-return"
              value={userInput.expectedReturn}
              onChange={(event) =>
                inputChangeHandler("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput.duration}
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default UserInput;
