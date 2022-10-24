import { createSlice } from "@reduxjs/toolkit";


const usersRedux = createSlice({
    name: "users",
    initialState: {
        users: [],
        fetchusers: false,
    },
    reducers:{
        RetrievedAllUser: (state, action)=>{
            state.users = action.payload;
            state.fetchusers = true;
        },
        AddUser: (state, action)=>{
            state.users.push(action.payload);
            state.fetchusers = true;
        },
        DeleteUser: (state, action)=>{
          state.users =  state.users.filter((items) => items._id !== action.payload )
        },
        UserUpdate: (state, action)=>{
            state.users[state.users.findIndex((items)=> items._id === action.payload._id)] = action.payload;
        },
        HideUsers : (state)=>{
            state.users = [];
            state.fetchusers = false;
        },
    }
})


export const { RetrievedAllUser, AddUser, DeleteUser, UserUpdate, HideUsers } =
  usersRedux.actions;
export default usersRedux.reducer;