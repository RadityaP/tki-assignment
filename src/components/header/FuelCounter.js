import React from 'react';
import fuelImage from '../../assets/fuel.png';
import useHeaderCounter from '../../hooks/useHeaderCounter.hooks';

const FuelCounter = () => {
  const { fuel } = useHeaderCounter();

  return (
    <div className="fuel-counter-container">
      <img src={fuelImage} alt="fuel"></img>
      <div className="counter">{fuel}</div>
    </div>
  );
};

export default FuelCounter;
