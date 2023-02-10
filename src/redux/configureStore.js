import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import foodSlice from './API/features/slicer';

const store = configureStore({
  reducer: {
    food: foodSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
