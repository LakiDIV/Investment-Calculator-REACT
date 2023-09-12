import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];
    let totalCapital = 0;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const savingsEndOfYear = currentSavings + yearlyContribution;
      totalCapital = currentSavings + savingsEndOfYear * year;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: year,
        savingsEndOfYear: formatter.format(savingsEndOfYear),
        yearlyInterest: formatter.format(yearlyInterest),
        toalInterest: yearlyInterest * expectedReturn,
        investedCapital: formatter.format(totalCapital),
      });
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      <ResultTable yearlyData={yearlyData} />
    </div>
  );
}

export default App;
