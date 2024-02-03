import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  './features/cart/cartSlice';

export const store1 = configureStore({
  reducer: {
    cart: cartReducer,
    
  },
})