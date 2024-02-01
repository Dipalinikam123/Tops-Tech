import { configureStore } from "@reduxjs/toolkit";
import pointReducer from "../Feature/point/Point1"

export const pointStore=configureStore({

    reducer:{
        pointReducer:pointReducer
    }
})