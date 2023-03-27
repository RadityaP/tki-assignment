import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import star from '../../assets/star.png';
import { headerAction } from '../../store/reducer/header';

const StarItem = ({ initialRight, initialTop, id }) => {
  const [right, setRight] = useState(initialRight);
  const [top, setTop] = useState(initialTop);
  const dispatch = useDispatch();
  const { shipRef } = useSelector((state) => state.ship);
  const ref = useRef();

  const { isNewGame, isGamePaused, isGameStopped } = useSelector((state) => state.game);
  const [intervalState, setIntervalState] = useState();

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
      setTop(-50);
      setRight(Math.floor(Math.random() * 800));
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
      dispatch(headerAction.addStar());
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
    <img src={star} style={{ top: top, right: right }} alt="star" className="star" ref={ref}></img>
  );
};

export default StarItem;
