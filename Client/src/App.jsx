import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';


function App() {
return (
<div>
<Navbar />
<main style={{ padding: '20px' }}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/products/:id" element={<ProductDetails />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/blogs" element={<Blogs />} />
</Routes>
</main>
</div>
);
}


export default App;