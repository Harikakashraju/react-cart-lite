import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    // Perform checkout logic here
    dispatch(clearCart());
    alert('Items have been checked out!');
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
        </div>
      ))}
      <div>
        <h2>Cart Total: ${totalPrice.toFixed(2)}</h2>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
