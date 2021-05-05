import React from 'react';
import NumberButtons from './NumberButtons';
import OperatorButton, { EqualsOperator } from './OperatorButton';

export default function NumbersAndOperatorsComponent({
  symArr,
  numArr,
  input,
  setFinalResult,
  setInput
}) {
  // function that handles onClick functionality for all numbers and signs
  const numOperatorClick = value => {
    setFinalResult(0);
    setInput(input.concat(value));
  };

  // function for the equals operator: it calculates and gives final results or displays error message if there's a wrong
  // operation
  const calulateResult = () => {
    try {
      const calculatedNum = eval(input);
      // fixes deciamals places to two, converts the final value to string,
      // parseFloat removes unnecessary decimals and 00
      // eg: 12.00 becomes 12
      const finalValue = parseFloat(calculatedNum.toFixed(2).toString());

      // convert the final value to number and update the state
      setFinalResult(Number(finalValue));
      setInput('');
    } catch (error) {
      // if someone enters num++++ or ++++num or num====,
      // instead of crashing, the app resets the state and works normally
      setInput('Error');
      setInput('');
    }
  };

  return (
    <>
      {/* Arithmatic Operators */}

      <OperatorButton symArr={symArr} numOperatorClick={numOperatorClick} />
      {/* Numbers */}
      <NumberButtons numArr={numArr} numOperatorClick={numOperatorClick} />
      {/* Equals Operator */}
      <EqualsOperator calulateResult={calulateResult} />
    </>
  );
}
