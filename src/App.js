import React, { useEffect, useState } from 'react';
import Container from './components/container';
import Ship from './components/ship';
import Cloud from './components/cloud';
import Bird from './components/bird';
import Sky from './components/sky';
import Star from './components/star';
import Parachute from './components/parachute';
import Header from './components/header/Header';
import Screen from './components/screen';
import useHeaderCounter from './hooks/useHeaderCounter.hooks';
import { useDispatch, useSelector } from 'react-redux';
import { gameAction } from './store/reducer/game';

function App() {
  const dispatch = useDispatch();
  const { startCounter, minusFuel, fuel } = useHeaderCounter();
  const [intervalState, setIntervalState] = useState();
  const { isNewGame, isGamePaused, isGameStopped } = useSelector((state) => state.game);

  const startGame = (e) => {
    if (e.key === 'Space') {
      dispatch(gameAction.pauseGame());
    }
  };

  useEffect(() => {
    if (!isNewGame) {
      let interval = setInterval(() => {
        startCounter();
        minusFuel();
      }, 1000);

      // document.addEventListener('keydown', );
      // return () => {
      //   document.removeEventListener('keydown', handleChangePosition);
      // };

      setIntervalState(interval);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isNewGame, isGamePaused]);

  useEffect(() => {
    if (fuel === 0) {
      dispatch(gameAction.endGame());
    }
  }, [fuel]);

  useEffect(() => {
    if (isGamePaused || isGameStopped) {
      clearInterval(intervalState);
    }
  }, [isGamePaused, isGameStopped]);

  return (
    <>
      <Container>
        <Header />
        <Sky>
          <Parachute />
          <Star />
          <Bird />
          <Cloud />
        </Sky>
        <Ship />
        <Screen />
      </Container>
    </>
  );
}

export default App;
