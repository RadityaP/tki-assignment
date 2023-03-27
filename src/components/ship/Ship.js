import React, { useEffect, useRef } from 'react';

//import styles and assets
import './style.scss';
import ship from '../../assets/airplane.png';
import useShipMovement from '../../hooks/useShipMovement.hooks';

const Ship = () => {
  const ref = useRef(null);
  const { top, left, setRef } = useShipMovement();

  useEffect(() => {
    setRef(ref.current.getBoundingClientRect());
  }, [ref, top, left]);

  return (
    <div className="ship-container" style={{ top: top, left: left }}>
      <img src={ship} alt="ship" ref={ref}></img>
    </div>
  );
};

export default Ship;
