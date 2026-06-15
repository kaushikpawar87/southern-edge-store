import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import { categories } from "../data/categories";
import { products } from "../data/products";

function HomePage({ cartCount, onAddToCart }) {
  return (
    <>
      <Hero cartCount={cartCount} />

      <section className="featured-categories">
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

      <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
