import React from "react";
import { useState } from "react";
import Calculator from "./component/Calculator";
import Header from "./component/Header";
import Result from "./component/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expextedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration > 0;

  function handlerUserInput(inputKey, newValue) {
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: +newValue,
      };
    });
  }

  return (
    //or use <>
    <React.Fragment>
      <Header />
      <Calculator onChangeProps={handlerUserInput} userInput={userInput} />
      {!durationIsValid && <p className="center">durasi harus diatas 0</p>}
      {durationIsValid && <Result resultInput={userInput} />}
    </React.Fragment>
    // or use </>
  );
}

export default App;
