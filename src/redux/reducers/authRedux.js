import { createSlice } from "@reduxjs/toolkit";


const authRedux = createSlice({
  name: "user",
  initialState: {
    auth: [],
    userLogin: false,
  },
  reducers: {
    Loginuser: (state, action) => {
      state.auth = action.payload;
      state.userLogin = true;
    },
    Logout: (state) => {
      state.auth = [];
      state.userLogin = false;
    },
  },
});


export const { Loginuser, Logout } = authRedux.actions;
export default authRedux.reducer;