import { configureStore } from "@reduxjs/toolkit";
import  amountReducer from '../Feature/Amount/Amount'

export  const amountStore= configureStore({
    reducer :{
        amountReducer:amountReducer,
    },


})