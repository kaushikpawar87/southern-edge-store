import ProductContext from "./ProductsContext";
import { useState, useEffect } from "react";

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams();

        if (selectedBrand !== "All") {
          params.append("brand", selectedBrand);
        }

        if (debouncedSearch) {
          params.append("search", debouncedSearch);
        }

        const queryString = params.toString();

        const url = `http://localhost:3000/api/products${queryString ? `?${queryString}` : ""}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.log(error);
        setError("Products failed to load");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [selectedBrand, debouncedSearch]);

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

  return (
    <ProductContext.Provider
      value={{
        products,
        brands,
        loading,
        error,
        selectedBrand,
        setSelectedBrand,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
