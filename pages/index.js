import React from 'react';
import ClearComponent from '../src/Components/ClearComponent';
import DisplayComponent from '../src/Components/DisplayComponent';
import NumberButtons from '../src/Components/NumberButtons';
import OperatorButton, {
  EqualsOperator
} from '../src/Components/OperatorButton';

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symArr = ['+', '-', '*', '/'];

export default function test() {
  const [result, setResult] = React.useState('');
  const [finalResult, setFinalResult] = React.useState(0);

  // function that handles onClick functionality for all numbers and signs
  const click = value => {
    setFinalResult(0);
    setResult(result.concat(value));
  };

  // function for C button: it clears last value and resets final value
  const clearLastValue = () => {
    setResult(result.slice(0, result.length - 1));
    setFinalResult(0);
  };

  // function for Clear button: it clears everything and resets back to intial state
  const clearEverything = () => {
    setResult('');
    setFinalResult(0);
  };

  // function for the = symbol: it calculates and gives final results or displays error message if there's a wrong
  // operation
  const calulateResult = () => {
    try {
      setFinalResult(eval(result).toString());
      setResult('');
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <>
      <section className="flex flex-col min-h-screen justify-center items-center font-bold text-4xl bg-gray-100">
        <div className=" flex flex-col mx-auto w-11/12 sm:max-w-md  bg-blue-200  rounded-lg  border p-6 space-y-5 ">
          {/* Input value displays the inputs or the final result */}
          <DisplayComponent finalResult={finalResult} result={result} />
          {/* Clear and C buttons */}
          <ClearComponent
            clearEverything={clearEverything}
            clearLastValue={clearLastValue}
          />
          {/* Arithmatic Operators */}
          <OperatorButton symArr={symArr} click={click} />
          {/* Numbers */}
          <NumberButtons numArr={numArr} click={click} />
          {/* Equals */}
          <EqualsOperator calulateResult={calulateResult} />
        </div>
      </section>
    </>
  );
}
