import { configureStore } from "@reduxjs/toolkit"
import inputReducer from "../Feature1/Input/InputFormCurd"

export const store = configureStore({
    reducer:{
        inputReducer:inputReducer,
    },
    })