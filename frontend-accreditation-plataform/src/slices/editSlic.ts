/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice,  PayloadAction } from '@reduxjs/toolkit';

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
