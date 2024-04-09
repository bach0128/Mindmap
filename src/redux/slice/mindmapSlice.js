import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMap: [],
};

export const mindmapSlice = createSlice({
  name: "mindmap",
  initialState,
  reducers: {
    add: (state, action) => {
      state.listMap.push(action.payload);
    },
  },
});
