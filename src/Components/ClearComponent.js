import React from 'react';

export default function ClearComponent({ input, setInput, setFinalResult }) {
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
  return (
    <div className="grid grid-cols-2 gap-2 mt-2 ">
      <button onClick={clearEverything} className="btn">
        Clear
      </button>
      <button onClick={clearLastValue} className="btn">
        C
      </button>
    </div>
  );
}
