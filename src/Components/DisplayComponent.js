import React from 'react';

export default function DisplayComponent({ finalResult, input }) {
  return (
    <div className="p-3 bg-white justify-end flex border rounded-lg">
      {finalResult === 0 || finalResult === undefined ? (
        <p>{input || 'Enter Number'}</p>
      ) : (
        <p className="font-semibold">{finalResult}</p>
      )}
    </div>
  );
}
