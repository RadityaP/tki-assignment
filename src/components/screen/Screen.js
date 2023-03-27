import React from 'react';
import { useSelector } from 'react-redux';
import ScreenGameOver from './ScreenGameOver';
import ScreenNewGame from './ScreenNewGame';
import ScreenPauseGame from './ScreenPauseGame';
import ScreenRank from './ScreenRank';

const Screen = () => {
  const { isNewGame, isGameStopped, isGamePaused, isShowRank } = useSelector((state) => state.game);

  if (isGameStopped && isShowRank) return <ScreenRank />;
  if (isNewGame) return <ScreenNewGame />;
  if (isGameStopped) return <ScreenGameOver />;
  if (isGamePaused) return <ScreenPauseGame />;
};

export default Screen;
