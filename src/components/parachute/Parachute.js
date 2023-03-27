import React from 'react';
import ParachuteItem from './ParachuteItem';
import './style.scss';

const Parachute = () => {
  return (
    <>
      <ParachuteItem
        initialRight={Math.floor(Math.random() * 970) + 300}
        initialTop={Math.floor(Math.random() * -50)}
      ></ParachuteItem>
      <ParachuteItem
        initialRight={Math.floor(Math.random() * 970) + 300}
        initialTop={Math.floor(Math.random() * -500)}
      ></ParachuteItem>
      <ParachuteItem
        initialRight={Math.floor(Math.random() * 970) + 300}
        initialTop={Math.floor(Math.random() * -300)}
      ></ParachuteItem>
    </>
  );
};

export default Parachute;
