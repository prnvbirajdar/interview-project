import React from 'react';

export default function timer() {
  return (
    <>
      <section className="flex items-center h-screen">
        <div className="container flex flex-col mx-auto w-2/3 border p-6 space-y-5 ">
          <div className="text-center m-5 space-y-2">
            <p>Stopwatch: </p> <p>0:0</p>{' '}
          </div>
          <button>Start</button>
        </div>
      </section>
    </>
  );
}
