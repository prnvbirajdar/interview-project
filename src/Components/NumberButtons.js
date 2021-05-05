import React from 'react';

export default function NumberButtons({ numArr, numOperatorClick }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {numArr.map((value, index) => {
          return (
            <div key={index} className="text-center">
              <button className="btn" onClick={() => numOperatorClick(value)}>
                {value}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
