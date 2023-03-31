import { configureStore } from "@reduxjs/toolkit";
import autherCart from "./auther-cart";
import autherSlice from "./auther-slid";

const store = configureStore({
    reducer: {
        auther: autherSlice.reducer,
        cart: autherCart.reducer
    }
})

export default store