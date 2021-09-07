import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme, setUser } = userSlice.actions;

export const getTheme = (state) => state.user.theme;

export const getUserDetails = (state) => state.user.user;

export default userSlice.reducer;
