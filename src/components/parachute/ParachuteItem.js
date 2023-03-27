import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parachute from '../../assets/parachute.png';
import { headerAction } from '../../store/reducer/header';

const ParachuteItem = ({ initialRight, initialTop, speed }) => {
  const [right, setRight] = useState(initialRight);
  const [top, setTop] = useState(initialTop);

  const { shipRef } = useSelector((state) => state.ship);
  const { isNewGame, isGamePaused, isGameStopped } = useSelector((state) => state.game);
  const [intervalState, setIntervalState] = useState();

  const dispatch = useDispatch();

  const ref = useRef();

  useEffect(() => {
    if (!isNewGame && !isGamePaused) {
      let interval;

      interval = setInterval(() => {
        setTop((prevState) => prevState + 10);
      }, 80);

      setIntervalState(interval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isNewGame, isGamePaused]);

  useEffect(() => {
    if (top > 768) {
      setTop(Math.floor(Math.random() * -300));
      setRight(Math.floor(Math.random() * 970) + 300);
    }
  }, [top]);

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
      dispatch(headerAction.addFuel());
      setTop(-200);
      setRight(Math.floor(Math.random() * 800));
    }
  }, [top]);

  useEffect(() => {
    if (isGamePaused || isGameStopped) {
      clearInterval(intervalState);
    }
  }, [isGamePaused, isGameStopped]);
  return (
    <img
      src={parachute}
      style={{ top: top, right: right }}
      alt="parachute"
      className="parachute"
      ref={ref}
    ></img>
  );
};

export default ParachuteItem;
