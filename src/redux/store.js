import { configureStore } from "@reduxjs/toolkit";
import { mindmapSlice } from "./slice/mindmapSlice";

export const store = configureStore({
  reducer: {
    mindmap: mindmapSlice.reducer,
  },
});
