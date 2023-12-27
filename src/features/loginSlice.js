import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    setLoginOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoginOpen } = loginSlice.actions;
export default loginSlice.reducer;
