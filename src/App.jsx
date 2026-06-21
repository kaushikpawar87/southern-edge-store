import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <main className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </main>
  );
}

export default App;
