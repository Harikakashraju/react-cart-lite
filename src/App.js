import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux'; // Assuming you have a configured Redux store
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

function App() {
  return (
    <Provider store={store}> {/* Wrap your app with Provider */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

