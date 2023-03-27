//import package
import React from 'react';

//import styles and assets
import './style.scss';
import mountain from '../../assets/mountain.jpg';

const Container = ({ ...props }) => {
  return (
    <div className="container">
      {props.children}
      <div className="background-image">
        <img src={mountain} alt="background"></img>
      </div>
    </div>
  );
};

export default Container;
