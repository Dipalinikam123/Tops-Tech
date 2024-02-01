import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Feature/Count/counter"

export const store = configureStore({
    reducer:{
        //key        // value 
        countReducer:countReducer,
    },
})

// store={
//     countReducer:{count:900},
// };