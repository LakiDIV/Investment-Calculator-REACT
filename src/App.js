import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
  
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

      const yearlyData = []; // per-year results

      let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput["expectedReturn"] / 100;
      const duration = +userInput["duration"];

      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }

      // do something with yearlyData ...
      setYearlyData(yearlyData)
    
  };

  console.log(yearlyData)

  return (
    <div>
      <Header />
      <InputForm onSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

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
        </table>

      {yearlyData.length === 0 && <p>No data available yet.</p>}

    </div>
  );
}

export default App;
