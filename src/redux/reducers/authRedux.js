import { createSlice } from "@reduxjs/toolkit";


const authRedux = createSlice({
  name: "user",
  initialState: {
    user: [],
    authLogin: false,
  },
  reducers: {
    Loginuser: (state, action) => {
      state.user = action.payload;
      state.userLogin = true;
    },
    Logout: (state) => {
      state.user = [];
      state.userLogin = false;
    },
  },
});


export const { Loginuser, Logout } = authRedux.actions;
export default authRedux.reducer;