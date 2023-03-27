import React, { useEffect, useState, useRef } from 'react';
import bird from '../../assets/bird.png';
import { useSelector, useDispatch } from 'react-redux';
import { gameAction } from '../../store/reducer/game';

const BirdItem = ({ initialRight, initialTop, speed }) => {
  const [right, setRight] = useState(initialRight);
  const [top, setTop] = useState(initialTop);
  const { shipRef } = useSelector((state) => state.ship);

  const dispatch = useDispatch();
  const ref = useRef();

  const { isNewGame, isGamePaused, isGameStopped } = useSelector((state) => state.game);
  const [intervalState, setIntervalState] = useState();

  useEffect(() => {
    if (!isNewGame && !isGamePaused) {
      let interval;

      interval = setInterval(() => {
        setRight((prevState) => prevState + 10);
      }, 50);

      setIntervalState(interval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isNewGame, isGamePaused]);

  useEffect(() => {
    if (right > 1024) {
      setRight(-100);
      setTop(Math.floor(Math.random() * 728));
    }
  }, [right]);

  useEffect(() => {
    const rect1 = shipRef;
    const rect2 = ref.current.getBoundingClientRect();

    let verticalMatch;
    let horizontalMatch;
    if (
      (rect2.top > rect1.top && rect2.top < rect1.bottom) ||
      (rect2.bottom > rect1.top && rect2.bottom < rect1.bottom)
    ) {
      verticalMatch = true;
    } else {
      verticalMatch = false;
    }

    if (
      (rect2.right > rect1.left && rect2.right < rect1.right) ||
      (rect2.right < rect1.right && rect2.right > rect1.left)
    ) {
      horizontalMatch = true;
    } else {
      horizontalMatch = false;
    }
    const isOverlapping = verticalMatch && horizontalMatch;

    if (isOverlapping) {
      dispatch(gameAction.endGame());
    }
  }, [right]);

  useEffect(() => {
    if (isGamePaused || isGameStopped) {
      clearInterval(intervalState);
    }
  }, [isGamePaused, isGameStopped]);

  return (
    <img src={bird} style={{ top: top, right: right }} alt="bird" className="bird" ref={ref}></img>
  );
};

export default BirdItem;
