import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shipAction } from '../store/reducer/ship';

const modifier = 10;

const useShipMovement = () => {
  const dispatch = useDispatch();
  const { isNewGame, isGamePaused, isGameStopped } = useSelector((state) => state.game);
  const { initialPosition, isPositionReset } = useSelector((state) => state.ship);
  const [top, setTop] = useState(initialPosition.top);
  const [left, setLeft] = useState(initialPosition.left);

  const handleChangePosition = (e) => {
    if (isGameStopped || isGamePaused) {
      return null;
    } else {
      if (e.key === 'ArrowLeft')
        setLeft((prevState) => (prevState > 0 ? prevState - modifier : prevState));
      if (e.key === 'ArrowUp')
        setTop((prevState) => (prevState > 0 ? prevState - modifier : prevState));
      if (e.key === 'ArrowRight')
        setLeft((prevState) => (prevState < 1024 - 150 ? prevState + modifier : prevState));
      if (e.key === 'ArrowDown')
        setTop((prevState) => (prevState < 768 - 50 ? prevState + modifier : prevState));
    }
  };

  useEffect(() => {
    if (isPositionReset) {
      setTop(initialPosition.top);
      setLeft(initialPosition.left);
    }
  }, [isPositionReset]);

  const setRef = (ref) => {
    dispatch(shipAction.setShipRef(ref));
  };

  useEffect(() => {
    if (!isNewGame) {
      document.addEventListener('keydown', handleChangePosition);
      return () => {
        document.removeEventListener('keydown', handleChangePosition);
      };
    }
  }, [isNewGame]);

  useEffect(() => {
    if (isGamePaused || isGameStopped) {
      document.removeEventListener('keydown', handleChangePosition);
      // handleChangePosition();
    }
  }, [isGamePaused, isGameStopped]);

  return {
    top,
    left,
    setRef,
  };
};

export default useShipMovement;
