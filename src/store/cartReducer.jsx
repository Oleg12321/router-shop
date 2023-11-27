import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  amountTotal: 0,
  priceTotal: 0 
}

const CartReducer = createSlice({
  name: "productsCart",
  initialState: initialState,
  reducer: {
    addToCartProduct: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      }
    },
  },
});

export const { addToCartProduct, removeFromCart } = CartReducer.actions;

export default CartReducer.reducer;