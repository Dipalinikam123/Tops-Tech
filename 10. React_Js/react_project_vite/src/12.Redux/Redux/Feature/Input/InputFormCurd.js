import { createSlice } from "@reduxjs/toolkit";

 const inputSlice = createSlice({
    name:"user",
    initialState: {user:[]},
    reducers:{
        submitHandler: (state,action) => {
            console.log("🚀 ~ action:", action)
            state.user.push(action.payload);
            
        },
        deleteHandeler: (state,action)=>{
            state.user.pop(  action.payload)
        },
        upadateButton:(state,action) => {
            console.log("🚀 ~update ======= action:", action)
            //   state.user.slice(action.payload.index, 1, action.payload.userInput)

              const payload = action.payload;
              state.user[payload.index] = payload.userInput;
        }
        
    }
})

export default inputSlice.reducer
export const {submitHandler,deleteHandeler,upadateButton} = inputSlice.actions







// const { index, newValue } = action.payload;
// state.user[index] = newValue; // Update item at index with new value