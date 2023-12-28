import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMap: [],
};

export const mindmapSlice = createSlice({
  name: "mindmap",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.listMap.push(action.payload);
    },
  },
});
