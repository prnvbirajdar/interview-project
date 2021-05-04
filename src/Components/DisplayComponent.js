import React from 'react';

export default function DisplayComponent({ finalResult, input }) {
  return (
    <div className="p-2 bg-white justify-end flex rounded-lg">
      {finalResult === 0 || finalResult === undefined ? (
        <p>{input || 'Enter Number'}</p>
      ) : (
        <p className="font-semibold">{finalResult}</p>
      )}
    </div>
  );
}
