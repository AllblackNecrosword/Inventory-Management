import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isloggedin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setisLoggedin: (state, action) => {
      state.isloggedin = action.payload;
    },
  },
});

export const { setisLoggedin, setUser } = authSlice.actions;
export default authSlice.reducer;
