import React from 'react';
import ClearComponent from '../src/Components/ClearComponent';
import DisplayComponent from '../src/Components/DisplayComponent';
import NumbersAndOperatorsComponent from '../src/Components/NumbersAndOperatorsComponent';
import { numArr, symArr } from '../src/data/data';

export default function test() {
  // Decided to go ahead with an empty string, since it was easier to use concat and eval methods on strings
  const [input, setInput] = React.useState('');
  // finalResult stores the final result in Number primitive and replaces the input value in the DisplayComponent
  const [finalResult, setFinalResult] = React.useState(0);

  return (
    <>
      <section className="flex  min-h-screen justify-center items-center font-bold text-lg text-gray-800 bg-gray-100">
        <div className=" flex flex-col  mx-auto w-11/12 sm:max-w-md bg-gray-50  rounded-lg shadow-lg border-2 border-gray-400 p-6 space-y-5 ">
          {/* Input value displays the inputs or the final result */}
          <DisplayComponent finalResult={finalResult} input={input} />
          {/* Clear and C buttons */}
          <ClearComponent
            input={input}
            setFinalResult={setFinalResult}
            setInput={setInput}
          />
          {/* Number and Operators Function */}
          <NumbersAndOperatorsComponent
            symArr={symArr}
            numArr={numArr}
            input={input}
            setFinalResult={setFinalResult}
            setInput={setInput}
          />
        </div>
      </section>
    </>
  );
}
