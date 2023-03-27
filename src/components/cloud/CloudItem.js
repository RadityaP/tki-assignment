import React, { useEffect, useState } from 'react';
import cloud from '../../assets/cloud.png';
import { useSelector } from 'react-redux';

const CloudItem = ({ initialRight, initialTop, speed }) => {
  const [right, setRight] = useState(initialRight);
  const [top, setTop] = useState(initialTop);

  const { isNewGame, isGamePaused, isGameStopped } = useSelector((state) => state.game);
  const [intervalState, setIntervalState] = useState();

  useEffect(() => {
    if (!isNewGame && !isGamePaused) {
      let interval;

      interval = setInterval(() => {
        setRight((prevState) => prevState + 10);
      }, 100);

      setIntervalState(interval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isNewGame, isGamePaused]);

  useEffect(() => {
    if (right > 1024) {
      setRight(-100);
      setTop(Math.floor(Math.random() * 300));
    }
  }, [right]);

  useEffect(() => {
    if (isGamePaused || isGameStopped) {
      clearInterval(intervalState);
    }
  }, [isGamePaused, isGameStopped]);

  return <img src={cloud} style={{ top: top, right: right }} alt="cloud" className="cloud"></img>;
};

export default CloudItem;
