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
  // Decided to go ahead with an empty string, since it was easier to use concat and eval methods on strings
  const [input, setInput] = React.useState('');
  // finalResult stores the final result in Number primitive and replaces the input value in the DisplayComponent
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
      const calculatedNum = eval(input);

      const finalValue = calculatedNum
        // fixes deciamals places to two,
        .toFixed(2)
        // converts the final value to string,
        .toString()
        // removed the unnecessary decimals (eg:12.00)
        .replace(/(\.[0-9]*?)0+$/, '$1')
        // removed the decimal point (eg: 12.)
        .replace(/\.$/, '');

      setFinalResult(finalValue);
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
      <section className="flex flex-col min-h-screen justify-center items-center font-bold text-4xl text-gray-800 bg-gray-100">
        <div className=" flex flex-col  mx-auto w-11/12 sm:max-w-md bg-indigo-300  rounded-lg  border p-6 space-y-5 ">
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
