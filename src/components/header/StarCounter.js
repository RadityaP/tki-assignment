import React from 'react';
import starImage from '../../assets/star.png';
import useHeaderCounter from '../../hooks/useHeaderCounter.hooks';

const StarCounter = () => {
  const { star } = useHeaderCounter();

  return (
    <div className="star-counter-container">
      <img src={starImage} alt="star"></img>
      <div className="counter">{star}</div>
    </div>
  );
};

export default StarCounter;
