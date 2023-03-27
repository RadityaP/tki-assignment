import { createSlice } from '@reduxjs/toolkit';
import { addNewPlayerAction, getAllPlayerAction } from '../action/player';

const initialState = {
  allPlayer: [],
  registeredPlayer: {},
  error: null,
};

const playerSlice = createSlice({
  name: 'player-slice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewPlayerAction.pending, (state) => ({
        ...state,
        error: null,
      }))
      .addCase(addNewPlayerAction.fulfilled, (state, result) => ({
        ...state,
        registeredPlayer: result.payload,
      }))
      .addCase(addNewPlayerAction.rejected, (state, result) => ({
        ...state,
        error: result?.error?.message,
      }))
      .addCase(getAllPlayerAction.pending, (state) => ({
        ...state,
        error: null,
      }))
      .addCase(getAllPlayerAction.fulfilled, (state, result) => ({
        ...state,
        allPlayer: result.payload,
      }))
      .addCase(getAllPlayerAction.rejected, (state, result) => ({
        ...state,
        error: result?.error?.message,
      }));
  },
});

export const playerAction = playerSlice.actions;
export default playerSlice.reducer;
