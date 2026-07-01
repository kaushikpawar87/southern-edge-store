import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import { categories } from "../data/categories";
import { useCart } from "../context/hooks/useCart.js";
import { useProducts } from "../context/hooks/useProducts.js";
import WishlistPage from "./WishlistPage.jsx";

function HomePage() {
  const { cartCount, addToCart } = useCart();
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 4);

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

      <section className="">
        <h2>Featured Products</h2>

        <div className="featured-products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>Wishlist</h2>
        <WishlistPage />
      </section>
    </>
  );
}

export default HomePage;
