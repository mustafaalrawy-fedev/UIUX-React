import landingImg1 from '/image/LandingImg1.jpg';
import landingImg2 from '/image/LandingImg2.jpg';
import landingImg3 from '/image/LandingImg3.jpg';
import landingImg4 from '/image/LandingImg4.jpg';
import landingImg5 from '/image/LandingImg5.jpg';
import { createSlice } from '@reduxjs/toolkit';

const landingImages = [
  landingImg1,
  landingImg2,
  landingImg3,
  landingImg4,
  landingImg5,
];
const pageColors = [
  '--main-color-1',
  '--main-color-2',
  '--main-color-3',
  '--main-color-4',
  '--main-color-5',
];

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    url: landingImages,
    imagesLen: landingImages.length,
    imageIdx: 0,
    colors: pageColors,
    currentColor: pageColors[0],
  },
  reducers: {
    getImageIdx: (state, action) => {
      state.imageIdx = action.payload;
    },
    getImgColor: (state, action) => {
      state.currentColor = state.colors[action.payload];
    },
  },
});

export const { getImageIdx, getImgColor } = imageSlice.actions;
export default imageSlice.reducer;
