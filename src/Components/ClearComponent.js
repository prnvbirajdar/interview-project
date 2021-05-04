import React from 'react';

export default function ClearComponent({ clearEverything, clearLastValue }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-2 ">
      <button
        onClick={clearEverything}
        className="p-3 rounded-lg shadow-md cursor-pointer w-full font-bold bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
      >
        Clear
      </button>
      <button
        onClick={clearLastValue}
        className="p-3 rounded-lg shadow-md cursor-pointer w-full font-bold bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
      >
        C
      </button>
    </div>
  );
}
