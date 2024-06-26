import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.active = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.active = false; // Corrected from state.action to state.active
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
