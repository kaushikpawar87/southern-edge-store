import ProductContext from "./ProductsContext";
import { useState, useEffect } from "react";

function ProductProvider({ children }) {
  // State
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 5,
    totalProducts: 0,
    totalPages: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Handler Functions
  function changeBrand(brand) {
    setSelectedBrand(brand);
    setCurrentPage(1);
  }

  function changeSort(option) {
    setSortOption(option);
    setCurrentPage(1);
  }
  // Effects

  // Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  // Fetch Products
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams();

        params.append("page", String(currentPage));

        if (selectedBrand !== "All") {
          params.append("brand", selectedBrand);
        }

        if (debouncedSearch) {
          params.append("search", debouncedSearch);
        }

        if (sortOption === "price-low") {
          params.append("sort", "price");
        } else if (sortOption === "price-high") {
          params.append("sort", "-price");
        } else if (sortOption === "name") {
          params.append("sort", "name");
        }

        const queryString = params.toString();

        const url = `http://localhost:3000/api/products${queryString ? `?${queryString}` : ""}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        setProducts(data.products);
        setPagination(data.pagination);
      } catch (error) {
        console.log(error);
        setError("Products failed to load");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [selectedBrand, debouncedSearch, sortOption, currentPage]);

  // Fetch Brands
  useEffect(() => {
    async function fetchProductBrands() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/products/brands",
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();

        setBrands(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductBrands();
  }, []);

  // Provider
  return (
    <ProductContext.Provider
      value={{
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
