import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [watch, setWatch] = useState(0);
  const timerId = useRef(null)
  // const [timerId, setTimerId] = useState(null);

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      // setTimerId(id);
      timerId.current = id
    }
  };
  const pause = () => {
    clearInterval(timerId.current);
    // setTimerId(null)
    timerId.current = null;
  };
  const reset = () => {
    clearInterval(timerId.current);
    // setTimerId(null)
    timerId.current = null;
    setWatch(0);
  };
  // useEffect(()=>{
  //   return reset;
  // })
  return (
    <div>
      Stopwatch: {watch}
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
