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

function EqualsOperator({ calulateResult }) {
  return (
    <button
      className="btn"
      onClick={calulateResult}
    >
      =
    </button>
  );
}

export { EqualsOperator };
