import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './product/productSlice';
import { productDetailReducer } from './product/productDetailSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    productDetail: productDetailReducer,
  },
});

export default store;
