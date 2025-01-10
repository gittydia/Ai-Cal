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

    <div className="bg-gray-300">
    <div className="justify-center items-center h-screen flex flex-col">
      <h1 className="text-4xl text-center text-gray-600 font-bold">Basic Calculator</h1>
      <div className="space-x-5 > * mt-5 p-5 bg-gray-200 rounded-lg shadow-lg">
        <input className="text-center border border-gray-400 p-2 rounded-lg" 
          type="text"
          placeholder="Enter first number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input className="text-center border border-gray-400 p-2 rounded-lg"
          type="text"
          placeholder="Enter second number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <div className="flex justify-center space-x-5 mt-5">
          <button className="p-4  bg-gray-100 rounded-lg shadow-lg hover:bg-gray-500 hover:text-gray-300" onClick={() => handleCalculate("+")}>+</button>
          <button className="p-4  bg-gray-100 rounded-lg shadow-lg hover:bg-gray-500 hover:text-gray-300" onClick={() => handleCalculate("-")}>-</button>
          <button className="p-4  bg-gray-100 rounded-lg shadow-lg hover:bg-gray-500 hover:text-gray-300" onClick={() => handleCalculate("*")}>*</button>
          <button className="p-4  bg-gray-100 rounded-lg shadow-lg hover:bg-gray-500 hover:text-gray-300" onClick={() => handleCalculate("/")}>/</button>
        </div>
        <button className="justify-center space-x-5 mt-5 p-4  bg-gray-100 rounded-lg shadow-lg hover:bg-gray-500 hover:text-gray-300 bold" onClick={handleReset}>
          Reset
        </button>
        {result !== null && <h2 className="mt-5 text-2xl text-center text-gray-600 font-bold">Result: {result}</h2>}
      </div>
    </div>
    </div>     
      
    
  );
}

export default App;
