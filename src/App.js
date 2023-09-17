import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    let totalSavings = currentSavings;
    let totalInterest = 0;
    let investedCapital = currentSavings;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      
      investedCapital += yearlyContribution;

      const yearlyInterest = totalSavings * expectedReturn;

      totalSavings += yearlyContribution + yearlyInterest;
      totalInterest += yearlyInterest;

      yearlyData.push({
        year: year,
        savingsEndOfYear: totalSavings,
        yearlyInterest: yearlyInterest,
        toalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }
  }

  console.log(yearlyData);

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />

      {userInput && <ResultTable data={yearlyData} />}

      {/* <ResultTable yearlyData={userInput} /> */}
    </div>
  );
}

export default App;
