import React from 'react';
import timerImage from '../../assets/timer.png';
import useHeaderCounter from '../../hooks/useHeaderCounter.hooks';

const Timer = () => {
  const { formattedTime } = useHeaderCounter();
  return (
    <div className="time-counter-container">
      <img src={timerImage} alt="time"></img>
      <div className="counter">{formattedTime}</div>
    </div>
  );
};

export default Timer;
