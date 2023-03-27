import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNewGame: true,
  isGameStopped: false,
  isGamePaused: false,
  isShowRank: false,
};

const gameSlice = createSlice({
  name: 'game-slice',
  initialState: initialState,
  reducers: {
    startNewGame: (state) => {
      state.isNewGame = false;
    },
    backToHomePage: (state) => {
      state.isGamePaused = false;
      state.isGameStopped = false;
      state.isNewGame = true;
      state.isShowRank = false;
    },
    startGame: (state) => {
      state.isGamePaused = false;
    },
    pauseGame: (state) => {
      state.isGamePaused = true;
    },
    showRank: (state) => {
      state.isShowRank = true;
    },
    endGame: (state) => {
      state.isGameStopped = true;
    },
  },
});

export const gameAction = gameSlice.actions;
export default gameSlice.reducer;
