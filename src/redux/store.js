import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './product/productSlice';
import { productDetailReducer } from './product/productDetailSlice';
import { cartReducer } from './cartSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
});

export default store;
