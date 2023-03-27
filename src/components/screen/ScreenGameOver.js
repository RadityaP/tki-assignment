import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPlayerAction } from '../../store/action/player';
import { gameAction } from '../../store/reducer/game';
import { createUUID } from '../../utils/createUUID';
import './style.scss';

const ScreenGameOver = () => {
  const { time, star } = useSelector((state) => state.header);
  const data = useSelector((state) => state.player);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (name === '') setDisable(true);
    if (name !== '') setDisable(false);
  }, [name]);

  const handleSubmit = async () => {
    const res = await dispatch(addNewPlayerAction({ id: createUUID(), name, time, stars: star }));

    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(gameAction.showRank());
    }
  };

  return (
    <div className="screen-container">
      <div className="title">Game Over</div>
      <div className="form-container">
        <div className="label">Player Name</div>
        <input value={name} className="input" onChange={(e) => setName(e.target.value)}></input>
        <div
          className={`submit ${disable ? 'disable' : ''}`}
          onClick={() => (disable ? {} : handleSubmit())}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default ScreenGameOver;
