import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LKR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultTable(props) {
  return (
    <div>
      {props.data.length > 0 ? (
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
            {props.data.map((yearData) => (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                <td>{formatter.format(yearData.toalInterest)}</td>
                <td>{formatter.format(yearData.investedCapital)}</td>
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
