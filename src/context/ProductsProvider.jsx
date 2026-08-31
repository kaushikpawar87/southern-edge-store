import ProductContext from "./ProductsContext";
import { useState, useEffect } from "react";

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:3000/api/products");
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
  }, []);

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
    <ProductContext.Provider value={{ products, brands, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
