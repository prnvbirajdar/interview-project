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

  return (
    <>
      {/* Arithmatic Operators */}
      <OperatorButton symArr={symArr} numOperatorClick={numOperatorClick} />
      {/* Numbers */}
      <NumberButtons numArr={numArr} numOperatorClick={numOperatorClick} />
      {/* Equals Operator */}
      <EqualsOperator
        input={input}
        setInput={setInput}
        setFinalResult={setFinalResult}
      />
    </>
  );
}
