import { CreateSlice } from "@reduxjs/toolkit";

export  const userSlice = CreateSlice({
       name:"username",
      initialStale:{
        username:null
      },
     reducers:{
       login:(state,action) =>{
        state.username = action.payload;
       },
       logout:(state) =>{
        state.username =null;
       },
     },
    })
    export const {login,logout} = userSlice.action
    export const selectUser = (state) => state.username.username

    export default userSlice.reducer;