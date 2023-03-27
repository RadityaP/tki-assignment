import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  fuel: 10,
  star: 0,
  time: 0,
};

const modifierStar = 1;
const modifierAddFuel = 10;
const modifierMinusFuel = 1;

const headerSlice = createSlice({
  name: 'header-slice',
  initialState: initialValue,
  reducers: {
    addStar: (state) => {
      state.star = state.star + modifierStar;
    },
    addFuel: (state) => {
      state.fuel = state.fuel + modifierAddFuel;
    },
    minusFuel: (state) => {
      state.fuel = state.fuel - modifierMinusFuel;
    },
    startCounter: (state) => {
      state.time = state.time + 1;
    },
    resetCounter: (state) => {
      state.fuel = 10;
      state.star = 0;
      state.time = 0;
    },
  },
});

export const headerAction = headerSlice.actions;
export default headerSlice.reducer;
