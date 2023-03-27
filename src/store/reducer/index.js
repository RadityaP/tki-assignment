import { combineReducers } from '@reduxjs/toolkit';
import headerReducer from './header';
import shipReducer from './ship';
import gameReducer from './game';
import playerReducer from './player';

export const rootReducer = combineReducers({
  header: headerReducer,
  ship: shipReducer,
  game: gameReducer,
  player: playerReducer,
});
