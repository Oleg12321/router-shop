import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: 'idle',
    error: null
  }
;

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts', async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return data.filter((item) => item.id <= 10);
}
)

const ProductsReducer = createSlice({
  name: "product",
  initialState: initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});


export default ProductsReducer.reducer;