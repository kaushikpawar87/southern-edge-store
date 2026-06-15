import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function ProductsPage({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");

  console.log(selectedBrand);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  return (
    <section>
      <h1>All products</h1>
      <select
        name="Filter Brands"
        value={selectedBrand}
        onChange={(event) => setSelectedBrand(event.target.value)}
      >
        <option value="All">All Brands</option>
        <option value="SS">SS</option>
        <option value="SG">SG</option>
        <option value="DSC">DSC</option>
        <option value="GM">GM</option>
        <option value="Gray Nicolls">Gray Nicolls</option>
        <option value="Kookaburra">Kookaburra</option>
      </select>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div className="products-grid">
        {filteredProducts.map((product) => (
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
