import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";

export const fetchIntersets = createAsyncThunk("user/intresets", async () => {
  const markers = [];
  await db
    .collection("intersetsData")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        markers.push(doc.data());
      });
    });
  return markers;
});

const initialState = {
  theme: false,
  user: {},
  intrestData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, value } = action.payload;
      state.user[name] = value;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: {
    [fetchIntersets.fulfilled]: (state, action) => {
      state.intrestData = action.payload;
    },
    [fetchIntersets.rejected]: (state, action) => {
      state.intrestData = [];
    },
  },
});

export const { setTheme, setUser } = userSlice.actions;

export const getTheme = (state) => state.user.theme;

export const getUserDetails = (state) => state.user.user;

export default userSlice.reducer;
