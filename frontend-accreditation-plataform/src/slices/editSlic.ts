import DataCreate from '@/interfaces/dataCreate';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  data: {},
} as any;

const dataUserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    dataOnStore: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});
export const { dataOnStore } = dataUserSlice.actions;
export const productReducer = dataUserSlice.reducer;
