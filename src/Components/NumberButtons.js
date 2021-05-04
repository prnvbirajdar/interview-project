import React from 'react';

export default function NumberButtons({ numArr, click }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {numArr.map((value, index) => {
          return (
            <div key={index} className="text-center">
              <button
                className="p-3 rounded-lg shadow-md cursor-pointer w-full font-bold bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                onClick={() => click(value)}
              >
                {value}
              </button>
              {/* <NumberButtons
                      value={value}
                      click={click}
                      result={result}
                      setResult={setResult}
                    /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
