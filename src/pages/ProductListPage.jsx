import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListPage = ({ products }) => {
  return (
    <div className="page-container">
      <div className='container'>
        <h1 className="page-title">Explore Our Collection</h1>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;