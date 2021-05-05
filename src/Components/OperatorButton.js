import React from 'react';

export default function OperatorButton({ symArr, numOperatorClick }) {
  return (
    <div className="grid grid-cols-4 gap-2 mt-2 ">
      {symArr.map((symbol, index) => (
        <button
          onClick={() => numOperatorClick(symbol)}
          key={index}
          className="btn"
        >
          {symbol}
        </button>
      ))}
    </div>
  );
}

function EqualsOperator({ input, setInput, setFinalResult }) {
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
    <button className="btn" onClick={calulateResult}>
      =
    </button>
  );
}

export { EqualsOperator };
