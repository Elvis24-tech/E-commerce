// src/App.jsx
import React, { useState, useEffect } from 'react'; 
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AddProductPage from './pages/AddProductPage';
import { CartProvider } from './context/CartContext';
import { products as initialProducts } from './data/products';

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      return JSON.parse(savedProducts);
    }
    return initialProducts;
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]); 

  const handleAddProduct = (newProductData) => {
    const newProduct = {
      ...newProductData,
      id: Date.now(),
      price: parseFloat(newProductData.price),
    };
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
    navigate('/');
  };

  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductListPage products={products} />} />
            <Route path="/product/:id" element={<ProductDetailPage products={products} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/add-product" element={<AddProductPage onAddProduct={handleAddProduct} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;