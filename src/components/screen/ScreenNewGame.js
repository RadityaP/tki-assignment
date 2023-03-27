import React from 'react';
import { useDispatch } from 'react-redux';
import { gameAction } from '../../store/reducer/game';
import './style.scss';

const ScreenNewGame = () => {
  const dispatch = useDispatch();
  return (
    <div className="screen-container">
      <div className="title is-button" onClick={() => dispatch(gameAction.startNewGame())}>
        New Game
      </div>
    </div>
  );
};

export default ScreenNewGame;
