import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemCount } = useCart(); 
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Shop With Us
          </Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/add-product">Sell</Link> 
            <Link to="/cart" className="cart-link">
              <FaShoppingCart />
              <span className="cart-count">{getCartItemCount()}</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;