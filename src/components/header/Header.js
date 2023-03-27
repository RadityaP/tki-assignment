import React from 'react';
import './style.scss';
import StarCounter from './StarCounter';
import FuelCounter from './FuelCounter';
import Timer from './Timer';
import PauseBotton from './PauseButton';

const Header = () => {
  return (
    <div className="header-container">
      <div className="counter-container">
        <StarCounter />
        <FuelCounter />
        <Timer />
      </div>
      <PauseBotton />
    </div>
  );
};

export default Header;
