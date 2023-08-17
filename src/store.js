import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import counterSlice from './counterSlice';

const store = configureStore({
  reducer:{
    counter:counterSlice.reducer,
  }
})

export default store;