import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      // check if the item is already in cart (so only increase quantity)
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          countInStock: newItem.countInStock,
          quantity: newItem.quantity ? newItem.quantity : 1,
          totalPrice: newItem.quantity
            ? newItem.price * newItem.quantity
            : newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    quantitySelectUpdate(state, action) {
      const { id, selectQuantity } = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      existingItem.quantity = selectQuantity;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
