import React from 'react';

export default function ClearComponent({ clearEverything, clearLastValue }) {
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
