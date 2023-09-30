import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
//   console.log(products);
  const dispatch = useDispatch();

if (products.length === 0) {
  return <div>Loading...</div>;
}

  return (
    <div>
      <h1>Home Page</h1>
      
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
