import React from 'react';
import CloudItem from './CloudItem';
import './style.scss';

const Cloud = () => {
  return (
    <>
      <CloudItem
        initialRight={Math.random() * -100}
        initialTop={Math.floor(Math.random() * 200)}
      ></CloudItem>
      <CloudItem
        initialRight={Math.random() * -500}
        initialTop={Math.floor(Math.random() * 200)}
      ></CloudItem>
      <CloudItem
        initialRight={Math.random() * -800}
        initialTop={Math.floor(Math.random() * 200)}
      ></CloudItem>
      <CloudItem
        initialRight={Math.random() * -1000}
        initialTop={Math.floor(Math.random() * 200)}
      ></CloudItem>
      <CloudItem
        initialRight={Math.random() * -1200}
        initialTop={Math.floor(Math.random() * 200)}
      ></CloudItem>
    </>
  );
};

export default Cloud;
