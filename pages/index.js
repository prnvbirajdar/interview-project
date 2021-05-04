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
  const [input, setInput] = React.useState('');
  const [finalResult, setFinalResult] = React.useState(0);

  // function that handles onClick functionality for all numbers and signs
  const numOperatorClick = value => {
    setFinalResult(0);
    setInput(input.concat(value));
  };

  // function for C button: it clears last value and resets final value
  const clearLastValue = () => {
    setInput(input.slice(0, input.length - 1));
    setFinalResult(0);
  };

  // function for Clear button: it clears everything and resets back to intial state
  const clearEverything = () => {
    setInput('');
    setFinalResult(0);
  };

  // function for the = symbol: it calculates and gives final results or displays error message if there's a wrong
  // operation
  const calulateResult = () => {
    try {
      setFinalResult(eval(input).toString());
      setInput('');
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <>
      <section className="flex flex-col min-h-screen justify-center items-center font-bold text-4xl bg-gray-100">
        <div className=" flex flex-col mx-auto w-11/12 sm:max-w-md  bg-indigo-300  rounded-lg  border p-6 space-y-5 ">
          {/* Input value displays the inputs or the final result */}
          <DisplayComponent finalResult={finalResult} input={input} />
          {/* Clear and C buttons */}
          <ClearComponent
            clearEverything={clearEverything}
            clearLastValue={clearLastValue}
          />
          {/* Arithmatic Operators */}
          <OperatorButton symArr={symArr} numOperatorClick={numOperatorClick} />
          {/* Numbers */}
          <NumberButtons numArr={numArr} numOperatorClick={numOperatorClick} />
          {/* Equals */}
          <EqualsOperator calulateResult={calulateResult} />
        </div>
      </section>
    </>
  );
}
