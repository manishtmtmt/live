import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      if (timer > 1000) {
        clearInterval(id);
      } else {
        setTimer((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);
  return <div>Count Down: {timer}</div>;
};

export default Timer;
