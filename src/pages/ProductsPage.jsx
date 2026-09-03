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
    changeBrand,
    searchTerm,
    setSearchTerm,
    sortOption,
    changeSort,
    pagination,
    currentPage,
    setCurrentPage,
  } = useProducts();

  if (loading) {
    return <h2>Loading Products</h2>;
  }

  if (error) {
    return <h2>Failed to Load Products</h2>;
  }

  const startProduct = (currentPage - 1) * pagination.limit + 1;
  const endProduct = (currentPage - 1) * pagination.limit + products.length;
  return (
    <section>
      <h1>All products</h1>
      <select
        name="Filter Brands"
        value={selectedBrand}
        onChange={(event) => changeBrand(event.target.value)}
      >
        <option value="All">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>{" "}
      <select
        name="sort"
        value={sortOption}
        onChange={(event) => changeSort(event.target.value)}
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
          <p>
            Showing {startProduct} - {endProduct} of {pagination.totalProducts}{" "}
            products.
          </p>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {pagination.totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pagination.totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default ProductsPage;
