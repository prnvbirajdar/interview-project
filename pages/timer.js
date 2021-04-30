import React from 'react';

export default function timer() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    if (timerOn) {
      const interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);

      return () => clearTimeout(interval);
    } else {
      setTime(0);
    }
  }, [timerOn]);

  const handleStart = () => {
    setTimerOn(true);
  };

  const handleStop = () => {
    setTimerOn(false);
  };

  console.log(timerOn);
  return (
    <>
      <section className="flex items-center h-screen">
        <div className="container flex flex-col mx-auto w-2/3 border p-6 space-y-5 ">
          <div className="text-center m-5 space-y-2">
            <p>Stopwatch: </p> <p>{time}</p>
          </div>
          <div className="mx-auto space-x-5">
            <button
              className="py-2 px-4 mx-auto bg-green-400 rounded-lg"
              onClick={handleStart}
            >
              Start
            </button>
            <button
              className="py-2 px-4 mx-auto bg-red-400 rounded-lg"
              onClick={handleStop}
            >
              Stop
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
