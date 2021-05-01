import React from 'react';

export default function timer() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    } else {
      clearTimeout(interval);
    }

    return () => clearTimeout(interval);
  }, [timerOn]);

  return (
    <>
      <section className="flex items-center h-screen bg-gray-200">
        <div className="container flex flex-col mx-auto bg-white  rounded-lg w-2/3 border p-6 space-y-5 ">
          <div className="text-center m-5 space-y-2">
            <p>Stopwatch: </p>
            {time < 3600 ? (
              <p>
                {Math.floor(time / 60)} min : {time % 60} sec
              </p>
            ) : (
              <p>
                {Math.floor(time / 3600)} hr : {Math.floor((time % 3600) / 60)}{' '}
                min : {time % 60} sec
              </p>
            )}
          </div>
          <div className="mx-auto space-x-5">
            {!timerOn && (
              <button
                className="py-2 px-4 mx-auto bg-green-400 rounded-lg"
                onClick={() => {
                  setTimerOn(true);
                }}
              >
                Start
              </button>
            )}

            {!timerOn && time !== 0 && (
              <button
                className="py-2 px-4 mx-auto bg-blue-400 rounded-lg"
                onClick={() => {
                  setTime(0);
                }}
              >
                Reset
              </button>
            )}

            {timerOn && (
              <div className="space-x-5">
                <button
                  className="py-2 px-4 mx-auto bg-red-400 rounded-lg"
                  onClick={() => {
                    setTimerOn(false);
                  }}
                >
                  Stop
                </button>
                <button
                  className="py-2 px-4 mx-auto bg-blue-400 rounded-lg"
                  onClick={() => {
                    setTime(0);
                  }}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
