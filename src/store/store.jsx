import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./reducer"

export const store = configureStore({
  reducer: {
    product: ProductsReducer,
  },
});
