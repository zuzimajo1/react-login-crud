import { createSlice } from "@reduxjs/toolkit";


const userRedux = createSlice({
    name: "user",
    initialState:{
        user: [],
        userLogin: false,
    },
    reducers:{
        Loginuser: (state, action)=>{
            state.user = action.payload;
            state.userLogin = true;
        },
        Logout: (state)=>{
            state.user = [];
            state.userLogin = false;
        }
    }
})


export const { Loginuser, Logout } = userRedux.actions;
export default userRedux.reducer;