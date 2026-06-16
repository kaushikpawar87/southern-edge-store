import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function ProductsPage({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortOption, setSortOption] = useState("featured");

  const brands = ["All", ...new Set(products.map((product) => product.brand))];

  console.log(selectedBrand);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  const sortedProducts = [...filteredProducts];

  if (sortOption === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "name") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <section>
      <h1>All products</h1>
      <select
        name="Filter Brands"
        value={selectedBrand}
        onChange={(event) => setSelectedBrand(event.target.value)}
      >
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand === "All" ? "All brands" : brand}
          </option>
        ))}
      </select>{" "}
      <select
        name="sort"
        value={sortOption}
        onChange={(event) => setSortOption(event.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name: A to Z</option>
      </select>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="products-grid">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
