import React from 'react';
import { useDispatch } from 'react-redux';
import { gameAction } from '../../store/reducer/game';
import './style.scss';

const ScreenPauseGame = () => {
  const dispatch = useDispatch();

  return (
    <div className="screen-container">
      <div className="title">Game Paused</div>
      <div className="start" onClick={() => dispatch(gameAction.startGame())}>
        Continue?
      </div>
    </div>
  );
};

export default ScreenPauseGame;
