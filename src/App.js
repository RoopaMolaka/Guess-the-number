import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  const GenerateRandomNumber = () => {
    const Number = Math.floor(Math.random() * 10);
    setGeneratedNumber(Number);
    // console.log(Number);
  };

  const handleClick = () => {
    if (generatedNumber == value) {
      setSuccessMessage("Yahooo! You have won");
    } else if (value > generatedNumber) {
      setFailureMessage("your number is high ,try again ");
    } else {
      setFailureMessage("your number is low ,try again ");
    }
  };
  useEffect(() => {
    GenerateRandomNumber();
  }, []);
  return (
    <>
      <div className="container">
        <div>
          <h1>Guess The Number</h1>
          <p>Guess the numbers from 1 to 10</p>
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Enter the number"
        />
        <button onClick={handleClick}>Guess the number</button>
        {successMessage ? (
          <p className="success">{successMessage}</p>
        ) : (
          failureMessage && <p className="failure">{failureMessage}</p>
        )}
        <button onClick={GenerateRandomNumber}>Reset</button>
      </div>
    </>
  );
};

export default App;
