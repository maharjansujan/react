import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  posts: [],
  showModal: false
};


const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    postadd: (state, action) => {
      state.posts.push(action.payload);
    },
    toggle: (state, action) => {
      state.showModal = action.payload;
    },
    removePost: (state, action) => {
      state.posts.splice(action.payload, 1);
    }
  }
});


export const { postadd, toggle } = postSlice.actions;

export default postSlice.reducer;