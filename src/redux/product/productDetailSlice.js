import { createSlice } from '@reduxjs/toolkit';

const productDetailSlice = createSlice({
  name: 'product',
  initialState: {
    loading: true,
    product: {},
    error: '',
  },
  reducers: {
    getProduct(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    error(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;
export const productDetailReducer = productDetailSlice.reducer;
