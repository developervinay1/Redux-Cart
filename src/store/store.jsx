import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice.jsx";

export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})