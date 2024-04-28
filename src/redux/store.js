import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import cartReducer from './cartSlice';
import { myreducer } from "./reducer";

export const store=configureStore({
    reducer:{
        [myApi.reducerPath]:myApi.reducer,
        [myreducer.name]:myreducer.reducer,
        cart: cartReducer,
    },
    
    middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(myApi.middleware),

})