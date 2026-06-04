import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function ProductsPage({ onAddToCart }) {
  return (
    <section>
      <h1>All products</h1>

      <div className="category-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
