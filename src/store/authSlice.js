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
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.action = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
