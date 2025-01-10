import React, { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operator) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        if (num2 === 0) {
          alert("Cannot divide by zero");
          setResult(null);
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setInput1("");
    setInput2("");
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Basic Calculator</h1>
      <div className="calculator-container">
        <input
          type="text"
          placeholder="Enter first number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter second number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <div className="button-group">
          <button onClick={() => handleCalculate("+")}>+</button>
          <button onClick={() => handleCalculate("-")}>-</button>
          <button onClick={() => handleCalculate("*")}>*</button>
          <button onClick={() => handleCalculate("/")}>/</button>
        </div>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
        {result !== null && <h2>Result: {result}</h2>}
      </div>
    </div>
  );
}

export default App;
