import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './styles/main.css';


const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
<CartProvider>
<App />
</CartProvider>
</BrowserRouter>
</React.StrictMode>
);