import ProductCard from "../components/ProductCard";
import "../styles/products-page.css";
import { useProducts } from "../context/hooks/useProducts";

function ProductsPage() {
  const {
    products,
    brands,
    loading,
    error,
    selectedBrand,
    setSelectedBrand,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
  } = useProducts();

  if (loading) {
    return <h2>Loading Products</h2>;
  }

  if (error) {
    return <h2>Failed to Load Products</h2>;
  }
  return (
    <section>
      <h1>All products</h1>
      <select
        name="Filter Brands"
        value={selectedBrand}
        onChange={(event) => setSelectedBrand(event.target.value)}
      >
        <option value="All">All Brands</option>
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
      {products.length === 0 ? (
        <div className="no-results">
          <h2>No products found</h2>
          <p>Try adjusting you search or filter.</p>
        </div>
      ) : (
        <>
          <p>Showing {products.length} products.</p>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ProductsPage;
