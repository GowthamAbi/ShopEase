// FILE: package.json
{
  "name": "shopease-client",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}


// FILE: src/index.js
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


// FILE: src/App.js
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


// FILE: src/data/products.js
export const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    description: 'Light floral printed summer dress, perfect for casual outings.',
    price: 1299,
    material: 'Cotton',
    color: 'Pink',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://via.placeholder.com/400x400?text=Floral+Summer+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 2,
    name: 'Casual Denim Dress',
    description: 'Blue denim dress with short sleeves and button front.',
    price: 1899,
    material: 'Denim',
    color: 'Blue',
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://via.placeholder.com/400x400?text=Casual+Denim+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 3,
    name: 'Party Wear Gown',
    description: 'Elegant long gown with lace design, ideal for parties.',
    price: 3499,
    material: 'Georgette',
    color: 'Red',
    sizes: ['M', 'L', 'XL'],
    image: 'https://via.placeholder.com/400x400?text=Party+Wear+Gown',
    category: 'Dress',
    inStock: true
  },
  {
    id: 4,
    name: 'Office Formal Dress',
    description: 'Knee-length solid dress suitable for office wear.',
    price: 2199,
    material: 'Polyester Blend',
    color: 'Navy Blue',
    sizes: ['S', 'M', 'L'],
    image: 'https://via.placeholder.com/400x400?text=Office+Formal+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 5,
    name: 'Maxi Dress',
    description: 'Full-length maxi dress with floral patterns and V-neck.',
    price: 1799,
    material: 'Rayon',
    color: 'Green',
    sizes: ['M', 'L', 'XL'],
    image: 'https://via.placeholder.com/400x400?text=Maxi+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 6,
    name: 'Casual Striped Dress',
    description: 'Black and white striped dress with belt.',
    price: 1299,
    material: 'Cotton',
    color: 'Black & White',
    sizes: ['S', 'M', 'L'],
    image: 'https://via.placeholder.com/400x400?text=Casual+Striped+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 7,
    name: 'Evening Cocktail Dress',
    description: 'Stylish sleeveless cocktail dress with shimmer fabric.',
    price: 2999,
    material: 'Silk Blend',
    color: 'Maroon',
    sizes: ['S', 'M', 'L'],
    image: 'https://via.placeholder.com/400x400?text=Evening+Cocktail+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 8,
    name: 'Bohemian Style Dress',
    description: 'Flowy boho dress with ethnic prints and tassels.',
    price: 1599,
    material: 'Rayon',
    color: 'Multicolor',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://via.placeholder.com/400x400?text=Bohemian+Style+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 9,
    name: 'Sleeveless A-Line Dress',
    description: 'A-line cut dress, perfect for brunch outings.',
    price: 1499,
    material: 'Cotton',
    color: 'Lavender',
    sizes: ['XS', 'S', 'M'],
    image: 'https://via.placeholder.com/400x400?text=A-Line+Dress',
    category: 'Dress',
    inStock: true
  },
  {
    id: 10,
    name: 'Printed Kurti Dress',
    description: 'Indo-western printed kurti dress with 3/4th sleeves.',
    price: 1199,
    material: 'Cotton Blend',
    color: 'Yellow',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://via.placeholder.com/400x400?text=Printed+Kurti+Dress',
    category: 'Dress',
    inStock: true
  }
  // add more items if needed
];


// FILE: src/data/blogs.js
export const blogs = [
  {
    id: 1,
    title: 'Top 10 Summer Fashion Trends You Can’t Miss in 2025',
    image: 'https://via.placeholder.com/800x400?text=Summer+Fashion+Trends',
    description: 'Explore the latest summer styles — from floral prints to pastel shades. Comfort meets elegance.',
    author: 'Roopa A.',
    date: '2025-05-20'
  },
  {
    id: 2,
    title: 'Ultimate Styling Guide: Dress for Every Occasion',
    image: 'https://via.placeholder.com/800x400?text=Styling+Guide',
    description: 'Simple mix & match ideas, layering tips, and color coordination tricks for a perfect look.',
    author: 'Gowtham A.',
    date: '2025-06-15'
  },
  {
    id: 3,
    title: 'Sustainable Fashion: Eco-Friendly is the New Trend',
    image: 'https://via.placeholder.com/800x400?text=Sustainable+Fashion',
    description: 'How eco-friendly fabrics and ethical brands are redefining modern wardrobes.',
    author: 'Janika M.',
    date: '2025-07-10'
  },
  {
    id: 4,
    title: 'Top 5 Must-Have Wardrobe Essentials in 2025',
    image: 'https://via.placeholder.com/800x400?text=Wardrobe+Essentials',
    description: 'Build a minimal yet versatile wardrobe with these essential pieces.',
    author: 'Team ShopEase',
    date: '2025-08-30'
  }
];


// FILE: src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1, size = null) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id && p.size === size);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { ...product, qty, size }];
    });
  };

  const removeFromCart = (id, size = null) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQty = (id, qty, size = null) => {
    setCart(prev => prev.map(item => (item.id === id && item.size === size ? { ...item, qty } : item)));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


// FILE: src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const qty = cart.reduce((s, i) => s + i.qty, 0);
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">ShopEase</Link>
      </div>
      <div className="nav-center">
        <Link to="/products">Products</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="nav-right">
        <Link to="/cart">Cart ({qty})</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;


// FILE: src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <p className="mat">{product.material} • {product.color}</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <button onClick={() => addToCart(product, 1, product.sizes[0])}>Add</button>
          <Link to={`/products/${product.id}`} className="details">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


// FILE: src/components/CartItem.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQty } = useCart();
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-info">
        <h4>{item.name}</h4>
        <p>Size: {item.size}</p>
        <p>Price: ₹{item.price}</p>
        <div className="qty">
          <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1), item.size)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1, item.size)}>+</button>
        </div>
        <button className="remove" onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;


// FILE: src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => {
  const featured = products.slice(0, 4);
  return (
    <div>
      <section className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop fashion store</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>

      <section>
        <h2>Featured Dresses</h2>
        <div className="grid">
          {featured.map(p => (
            <div key={p.id} className="feature-card">
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


// FILE: src/pages/Products.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
  return (
    <div>
      <h2>All Products</h2>
      <div className="products-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Products;


// FILE: src/pages/ProductDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(product?.sizes?.[0] || null);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>
        <p><b>Material:</b> {product.material}</p>
        <div style={{ marginTop: '10px' }}>
          <label>Size: </label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            {product.sizes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Qty: </label>
          <input type="number" min="1" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
        </div>
        <div style={{ marginTop: '12px' }}>
          <button onClick={() => addToCart(product, qty, size)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


// FILE: src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total, clearCart } = useCart();
  if (cart.length === 0) return (
    <div>
      <h2>Your Cart is Empty</h2>
      <Link to="/products" className="btn">Browse Products</Link>
    </div>
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cart.map(item => <CartItem key={item.id + (item.size||'')} item={item} />)}
      </div>
      <div className="cart-summary">
        <h3>Total: ₹{total}</h3>
        <Link to="/checkout" className="btn">Checkout</Link>
        <button onClick={clearCart} style={{ marginLeft: '10px' }}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;


// FILE: src/pages/Checkout.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // In real app: call backend to create order
    alert('Order placed! Total: ₹' + total);
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <p>Items: {cart.length}</p>
        <p>Total: ₹{total}</p>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;


// FILE: src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login: save user to localStorage
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        <label>Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


// FILE: src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy register: save user to localStorage
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        <label>Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;


// FILE: src/pages/Blogs.jsx
import React from 'react';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';

const Blogs = () => {
  return (
    <div>
      <h2>Fashion Blogs</h2>
      <div className="blogs-grid">
        {blogs.map(b => <BlogCard key={b.id} blog={b} />)}
      </div>
    </div>
  );
};

export default Blogs;


// FILE: src/components/BlogCard.jsx
import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="blog-info">
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <small>{blog.author} • {blog.date}</small>
      </div>
    </div>
  );
};

export default BlogCard;


// FILE: src/styles/main.css
:root{
  --brand:#ff6b6b;
  --muted:#666;
}
body{font-family:Arial,Helvetica,sans-serif;margin:0;padding:0;background:#fafafa;color:#222}
.nav{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;background:#fff;border-bottom:1px solid #eee}
.brand{font-weight:700;color:var(--brand);text-decoration:none}
.nav-center a,.nav-right a{margin-left:12px;text-decoration:none;color:#333}
.btn{display:inline-block;padding:8px 14px;background:var(--brand);color:#fff;border-radius:6px;text-decoration:none}
.hero{background:#fff;padding:40px;text-align:center;margin-bottom:20px;border-radius:6px}
.grid{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
.feature-card{border:1px solid #eee;padding:10px;border-radius:6px;width:200px;text-align:center}
.products-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
.product-card{background:#fff;border:1px solid #eee;border-radius:8px;overflow:hidden}
.product-card img{width:100%;height:280px;object-fit:cover}
.product-info{padding:12px}
.price{color:var(--brand);font-weight:700}
.product-details{display:flex;gap:20px;align-items:flex-start}
.product-details img{width:420px;height:420px;object-fit:cover;border-radius:8px}
.details{max-width:520px}
.cart-list{display:flex;flex-direction:column;gap:12px}
.cart-item{display:flex;gap:12px;background:#fff;padding:10px;border-radius:8px}
.cart-item img{width:120px;height:120px;object-fit:cover}
.cart-info{flex:1}
.qty{display:flex;align-items:center;gap:8px}
.form{display:flex;flex-direction:column;gap:8px}
.blogs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px}
.blog-card{background:#fff;border-radius:8px;overflow:hidden}
.blog-card img{width:100%;height:200px;object-fit:cover}

/* responsive */
@media(max-width:800px){
  .product-details{flex-direction:column}
  .product-details img{width:100%;height:320px}
}
