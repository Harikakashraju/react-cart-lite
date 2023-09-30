import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.find((product) => product.id === productToAdd.id);
      if (!existingProduct) {
        state.push({ ...productToAdd, quantity: 1 });
      } else {
        existingProduct.quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productToRemove = state.find((product) => product.id === productId);
      if (productToRemove) {
        if (productToRemove.quantity > 1) {
          productToRemove.quantity -= 1;
        } else {
          return state.filter((product) => product.id !== productId);
        }
      }
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
