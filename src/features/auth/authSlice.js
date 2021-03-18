import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isloggedIn: false,
  },
  reducers: {
    toggleLoginState: (state) => {
      state.isloggedIn = !state.isloggedIn;
    },

    // toggleState: (state, action) => {
    //   state.login = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoginState } = authSlice.actions;

export default authSlice.reducer;
