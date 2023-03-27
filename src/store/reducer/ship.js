import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  shipRef: '',
  isPositionReset: false,
  initialPosition: {
    top: 300,
    left: 20,
  },
};

const shipSlice = createSlice({
  name: 'ship-slice',
  initialState: initialValue,
  reducers: {
    setShipRef: (state, action) => {
      state.isPositionReset = false;
      state.shipRef = action.payload;
    },
    setToInitialPosition: (state) => {
      state.isPositionReset = true;
    },
  },
});

export const shipAction = shipSlice.actions;
export default shipSlice.reducer;
