import ProductContext from "./ProductsContext";
import { useState, useEffect } from "react";

function ProductProvidor({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const transformedProducts = data.map((product) => ({
          id: product.id,
          name: product.title,
          brand: product.category,
          price: product.price,
          image: product.image,
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.log(error);
        setError("Products failed to load");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvidor;
