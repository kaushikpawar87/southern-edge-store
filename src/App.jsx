import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  function handleRemoveFromCart(productId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  }

  return (
    <main className="container">
      <Navbar cartItems={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cartCount={cartItems.length}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/products"
          element={<ProductsPage onAddToCart={handleAddToCart} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
