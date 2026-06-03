import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { categories } from "./data/categories";
import CategoryCard from "./components/CategoryCard";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
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
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
