import React from 'react';

export default function countdown() {
  const [time, setTime] = React.useState(0);
  const [countdownOn, setCountdownOn] = React.useState(false);

  // Inputs
  const [timeInput, setTimeInput] = React.useState({
    hours: '',
    minutes: '',
    seconds: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setTimeInput({ ...timeInput, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const timeInSec =
      Number(timeInput.hours) * 3600 +
      Number(timeInput.minutes) * 60 +
      Number(timeInput.seconds);

    setTime(timeInSec);

    setCountdownOn(true);
  };


  //Countdown logic
  React.useEffect(() => {
    let interval = null;

    if (countdownOn && time >= -1) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else {
      clearTimeout(interval);
    }

    return () => {
      clearTimeout(interval);
    };
  }, [countdownOn]);

  return (
    <>
      {time >= 0 ? (
        <section className="flex items-center h-screen bg-gray-200">
          <div className="container flex flex-col mx-auto bg-white  rounded-lg w-2/3 border p-6 space-y-5 ">
            <form className="text-center m-5 space-y-4" onSubmit={handleSubmit}>
              <p>Countdown: </p>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <label htmlFor="hours">Hr</label>
                  <input
                    className="border-2 border-indigo-400 rounded-lg p-2"
                    type="number"
                    name="hours"
                    min="0"
                    max="99"
                    value={timeInput.hours}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="minutes">Min</label>
                  <input
                    className="border-2 border-indigo-400 rounded-lg p-2"
                    type="number"
                    name="minutes"
                    min="0"
                    max="59"
                    value={timeInput.minutes}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="seconds">Sec</label>
                  <input
                    className="border-2 border-indigo-400 rounded-lg p-2"
                    type="number"
                    name="seconds"
                    min="0"
                    max="59"
                    value={timeInput.seconds}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {time > 3600 ? (
                <p>
                  {Math.floor(time / 60)} min : {time % 60} sec
                </p>
              ) : (
                <p>
                  {Math.floor(time / 3600)} hr :{' '}
                  {Math.floor((time % 3600) / 60)} min : {time % 60} sec
                </p>
              )}

              <div className="mx-auto space-x-5">
                {!countdownOn && (
                  <button
                    className="py-2 px-4 mx-auto bg-green-400 rounded-lg"
                    onClick={handleSubmit}
                  >
                    Start
                  </button>
                )}

                {!countdownOn && time !== 0 && (
                  <button
                    className="py-2 px-4 mx-auto bg-blue-400 rounded-lg"
                    onClick={() => {
                      setTime(0);
                    }}
                  >
                    Reset
                  </button>
                )}

                {countdownOn && (
                  <div className="mx-auto space-x-5">
                    <button
                      className="py-2 px-4 mx-auto bg-red-400 rounded-lg"
                      onClick={() => {
                        setCountdownOn(false);
                      }}
                    >
                      Pause
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section>Done</section>
      )}
    </>
  );
}
