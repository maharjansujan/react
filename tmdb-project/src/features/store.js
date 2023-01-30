import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import menuSLice from './menuSlice';
import { newsSlice } from "./newsSlice";






export const store = configureStore({
  reducer: {
    menu: menuSLice.reducer,
    [movieSlice.reducerPath]: movieSlice.reducer,
    [newsSlice.reducerPath]: newsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieSlice.middleware,
      newsSlice.middleware
    ]),
});