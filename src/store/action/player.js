import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewPlayer, getAllPlayer } from '../../api/player';

export const addNewPlayerAction = createAsyncThunk(
  'add-new-player',
  async (params) => await addNewPlayer(params),
);

export const getAllPlayerAction = createAsyncThunk(
  'get-all-player',
  async (params) => await getAllPlayer(params),
);
