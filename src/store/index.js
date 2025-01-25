import { configureStore } from '@reduxjs/toolkit';
import imageSlice from './imageSlice/imageSlice';

const store = configureStore({
  reducer: {
    image: imageSlice,
  },
});

export default store;
