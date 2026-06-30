import { useEffect, useState } from "react";
import { WishlistContext } from "./WishlistContext";

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    if (savedWishlist) {
      return JSON.parse(savedWishlist);
    }
    return [];
  });

  function isInWishlist(productId) {
    return wishlistItems.some((item) => item.id === productId);
  }

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  function toggleWishlist(product) {
    setWishlistItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      return [...prevItems, product];
    });
  }

  const wishListCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, toggleWishlist, wishListCount, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
