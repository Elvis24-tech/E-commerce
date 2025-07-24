import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">Ksh {product.price.toFixed(2)}</p>
      </Link>
      <button 
        className={`add-to-cart-btn ${isAdded ? 'added' : ''}`} 
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;