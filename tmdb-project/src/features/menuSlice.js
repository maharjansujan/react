import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  toggle: false
};



const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    change: (state, action) => {
      state.toggle = !state.toggle
    }
  }
});

export const { change } = menuSlice.actions;
export default menuSlice;