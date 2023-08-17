import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState:{value:0},
  reducers:{
    up:(state, action) => {
      state.value += action.payload;
    }
  }
})

export default counterSlice;
export const {up} = counterSlice.actions;