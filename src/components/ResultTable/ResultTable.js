import React from "react";

function ResultTable({ yearlyData }) {
  return (
    <div>
      {yearlyData.length > 0 ? (
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((yearlyValues) => (
              <tr key={yearlyValues.year}>
                <td>{yearlyValues.year}</td>
                <td>{yearlyValues.savingsEndOfYear}</td>
                <td>{yearlyValues.yearlyInterest}</td>
                <td>{yearlyValues.yearlyContribution}</td>
                <td>{yearlyValues.investedCapital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <p style={{ textAlign: "center" }}>No data available to display.</p>
        </div>
      )}
    </div>
  );
}

export default ResultTable;
