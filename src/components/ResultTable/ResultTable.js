import React from "react";

function ResultTable({yearlyData}) {
  return (
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
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        ))}
      </tbody>
      {yearlyData.length === 0 && <p>No data available yet.</p>}
    </table>
  );
}

export default ResultTable;
