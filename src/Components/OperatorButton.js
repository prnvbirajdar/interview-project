import React from 'react';

export default function OperatorButton({ symArr, numOperatorClick }) {
  return (
    <div className="grid grid-cols-4 gap-2 mt-2 ">
      {symArr.map((symbol, index) => (
        <button
          onClick={() => numOperatorClick(symbol)}
          key={index}
          className="p-3 rounded-lg shadow-md cursor-pointer w-full font-bold bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
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
      className="p-3 rounded-lg shadow-md cursor-pointer w-full font-bold bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
      onClick={calulateResult}
    >
      =
    </button>
  );
}

export { EqualsOperator };
