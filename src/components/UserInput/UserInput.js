import React, { useState } from "react";

function UserInput({ onSubmit }) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration,
    };
    onSubmit(formData);
  };

  const handleReset = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
    onSubmit("");
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
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={yearlyContribution}
              onChange={(e) => setYearlyContribution(e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest (%)</label>
            <input
              type="number"
              id="expected-return"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
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
