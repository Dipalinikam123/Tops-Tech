
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {count :900},//state 
  reducers:{ // we can create a functon here 
    incrementByOne:(state,action) => {      
        state.count++
    },
    incrementByFive:(state,action) => {      
        state.count+=5
    },
    decrementByTen:(state,action)=>{
        state.count-=10           // state.count= state.count-10
    }
  },
});

export default countSlice.reducer
export const {incrementByOne,decrementByTen,incrementByFive} = countSlice.actions