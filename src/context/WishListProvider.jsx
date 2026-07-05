import { WishlistContext } from "./WishlistContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useLocalStorage(
    "wishlistItems",
    [],
  );
  function isInWishlist(productId) {
    return wishlistItems.some((item) => item.id === productId);
  }
  function toggleWishlist(product) {
    setWishlistItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      return [...prevItems, product];
    });
  }

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, toggleWishlist, wishlistCount, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
