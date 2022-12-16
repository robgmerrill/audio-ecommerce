import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const changeValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurInputHandler = () => {
    setIsTouched(true);
  };

  const reset = ()=>{
    setEnteredValue('');
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid:valueIsValid,
    hasError,
    changeValueHandler,
    blurInputHandler,
    reset
  };
};

export default useInput;
