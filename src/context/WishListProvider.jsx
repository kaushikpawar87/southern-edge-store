import { useState } from "react";
import { WishlistContext } from "./WishlistContext";
import { useProducts } from "./hooks/useProducts";

export function WishlistProvider({ children }) {
  const { products } = useProducts();
  const [wishlistItems, setWishlistItmes] = useState([]);

  function addToWishlist({ products }) {
    setWishlistItmes((previousItems) => {
      [...previousItems, products.id];
    });
  }

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
