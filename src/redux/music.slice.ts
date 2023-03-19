import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

const initialState = {
  total: null,
};

export const musicSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setTotal: (state, action) => {
      const { total } = action.payload;
        state.total = total;
    },
  },
});

export const { setTotal } = musicSlice.actions;

export default musicSlice.reducer;

export const selectMusicTotal = (state: RootState) => state.total.total;
