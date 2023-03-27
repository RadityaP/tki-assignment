import React from 'react';
import { useDispatch } from 'react-redux';
import pause from '../../assets/pause.png';
import { gameAction } from '../../store/reducer/game';

const PauseBotton = () => {
  const dispatch = useDispatch();
  return (
    <div className="pause-container">
      <img src={pause} alt="pause" onClick={() => dispatch(gameAction.pauseGame())}></img>
    </div>
  );
};

export default PauseBotton;
