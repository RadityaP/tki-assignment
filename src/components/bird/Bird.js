import React from 'react';
import BirdItem from './BirdItem';
import './style.scss';

const Birds = () => {
  return (
    <>
      <BirdItem
        initialRight={Math.random() * -100}
        initialTop={Math.floor(Math.random() * 768)}
      ></BirdItem>
      <BirdItem
        initialRight={Math.random() * -400}
        initialTop={Math.floor(Math.random() * 768)}
      ></BirdItem>
      <BirdItem
        initialRight={Math.random() * -800}
        initialTop={Math.floor(Math.random() * 768)}
      ></BirdItem>
      <BirdItem
        initialRight={Math.random() * -1200}
        initialTop={Math.floor(Math.random() * 768)}
      ></BirdItem>
      <BirdItem
        initialRight={Math.random() * -1600}
        initialTop={Math.floor(Math.random() * 768)}
      ></BirdItem>
    </>
  );
};

export default Birds;
