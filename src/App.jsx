import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { categories } from "./data/categories";
import CategoryCard from "./components/CategoryCard";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((prevCount) => prevCount + 1);
  }

  return (
    <main className="container">
      <Navbar cartCount={cartCount} />
      <Hero cartCount={cartCount} />
      <section>
        <h2>Featured Categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Featured Products</h2>

        <div className="category-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
