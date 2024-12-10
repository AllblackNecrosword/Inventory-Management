import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allproducts: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      // state.allproducts = action.payload;
      state.allproducts = Array.isArray(action.payload) ? action.payload : [];
    },
  },
});
export const { setAllProducts } = productSlice.actions;
export default productSlice.reducer;
