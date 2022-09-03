import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: true,
    products: [],
    error: '',
  },
  reducers: {
    getAllProducts(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    error(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
