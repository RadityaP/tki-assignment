import React from 'react';
import StarItem from './StarItem';
import './style.scss';

const Star = () => {
  return (
    <>
      <StarItem
        initialRight={Math.random() * 800}
        initialTop={Math.floor(Math.random() * -50)}
        id={'2'}
      ></StarItem>
      <StarItem
        initialRight={Math.random() * 800}
        initialTop={Math.floor(Math.random() * -500)}
      ></StarItem>
      <StarItem
        initialRight={Math.random() * 800}
        initialTop={Math.floor(Math.random() * -300)}
      ></StarItem>
    </>
  );
};

export default Star;
