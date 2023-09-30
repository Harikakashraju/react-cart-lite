import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer, { fetchProducts } from './productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
