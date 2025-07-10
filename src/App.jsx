// src/App.jsx
import React, { useState, useEffect } from 'react'; // 1. Import useEffect
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
  // 2. MODIFIED: Use a function to initialize state from localStorage
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    // If we have saved products in localStorage, parse and use them
    if (savedProducts) {
      return JSON.parse(savedProducts);
    }
    // Otherwise, use the initial products from our file
    return initialProducts;
  });
  
  const navigate = useNavigate();

  // 3. NEW: Use useEffect to save products to localStorage whenever they change
  useEffect(() => {
    // localStorage can only store strings, so we must stringify our array
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]); // This effect runs every time the 'products' state changes

  const handleAddProduct = (newProductData) => {
    const newProduct = {
      ...newProductData,
      id: Date.now(),
      price: parseFloat(newProductData.price),
    };
    // This will now trigger the useEffect hook to save the new list
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